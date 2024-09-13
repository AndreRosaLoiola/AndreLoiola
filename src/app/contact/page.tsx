"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button"; // Certifique-se de ajustar o caminho conforme necessário
import { MdOutlineMail, MdLocationOn } from "react-icons/md"; // Importando ícones
import { FaWhatsapp } from "react-icons/fa";

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
      <div className="flex w-full max-w-4xl">
        {/* Texto à esquerda */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4 text-accent">
            Vamos Conversar ?
          </h2>
          <p>
            Estou sempre aberto a novas oportunidades e colaborações. Se você
            tem alguma ideia, projeto ou dúvida, não hesite em entrar em
            contato! Preencha o formulário ao lado e eu retornarei o mais breve
            possível.
          </p>
          <div className="flex items-center mt-4">
            <FaWhatsapp className="text-xl text-accent mr-2 " />
            <a
              href="https://wa.me/5561981194732?text=Ol%C3%A1%20Andr%C3%A9!%20Tenho%20uma%20oportunidade%20para%20voc%C3%AA%20e%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white"
            >
              Envie uma mensagem
            </a>
          </div>
          <div className="flex items-center mt-4">
            <MdOutlineMail className="text-xl mr-2 text-accent" />
            <a
              href="mailto:andrerosaloiola@hotmail.com"
              className="text-blue-600 hover:underline"
            >
              andrerosaloiola@hotmail.com
            </a>
          </div>
          <div className="flex items-center mt-2">
            <MdLocationOn className="text-xl mr-2 text-accent" />
            <span>Brasília, DF</span>
          </div>
        </div>

        {/* Formulário à direita */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col space-y-4 p-4"
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
    </div>
  );
};

export default Contact;
