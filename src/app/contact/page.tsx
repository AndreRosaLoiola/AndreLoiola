"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button"; // Certifique-se de ajustar o caminho conforme necessário

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false); // Adicionando estado de carregamento

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const templateParams = {
        to_name: formData.get("name") as string,
        email: formData.get("email") as string,
        from_name: formData.get("assunto") as string,
        message: formData.get("message") as string,
      };

      setLoading(true); // Iniciar o carregamento

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        );
        toast.success("Email enviado com sucesso!");
        if (form.current) {
          form.current.reset(); // Resetar os campos do formulário
        }
      } catch (error) {
        toast.error("Erro ao enviar o email. Tente novamente.");
        console.error(error); // Exibir erro no console para depuração
      } finally {
        setLoading(false); // Finalizar o carregamento
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 -mt-16">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full max-w-lg space-y-4"
      >
        <label htmlFor="name" className="font-medium text-accent">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="p-2 border border-gray-300 rounded text-gray-800"
          placeholder="Seu nome"
          required
        />

        <label htmlFor="email" className="font-medium text-accent">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="p-2 border border-gray-300 rounded text-gray-800"
          placeholder="Seu e-mail"
          required
        />

        <label htmlFor="assunto" className="font-medium text-accent">
          Assunto
        </label>
        <input
          id="assunto"
          name="assunto"
          type="text"
          className="p-2 border border-gray-300 rounded text-gray-800"
          placeholder="Assunto"
          required
        />

        <label htmlFor="message" className="font-medium text-accent">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={10}
          className="p-2 border border-gray-300 rounded text-gray-800"
          placeholder="Sua mensagem"
          required
        />

        <Button
          type="submit"
          variant={"outline"}
          size={"lg"}
          className="uppercase flex items-center gap-2 rounded"
          disabled={loading} // Desativar o botão durante o carregamento
        >
          <span>Enviar</span>
        </Button>
      </form>
    </div>
  );
};

export default Contact;
