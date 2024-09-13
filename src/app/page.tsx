import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { MdCloudDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import minhafoto from "@/app/img/logo.png";
export default function Home() {
  const links = [{ name: "contact", path: "/contact" }];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Container para alinhar foto à direita e texto à esquerda */}
      <div className="flex flex-col xl:flex-row items-center justify-between w-full max-w-5xl mb-8">
        {/* Foto acima do texto em dispositivos menores */}
        <div className="flex xl:w-1/2 xl:order-last mt-8 xl:mt-[-200px]">
          <Photo />
        </div>

        {/* Texto à esquerda em dispositivos maiores */}
        <div className="text-center xl:text-left xl:w-1/2 xl:mr-20">
          <h2 className="text-lg font-semibold">Olá, eu sou</h2>
          <h1 className="text-4xl font-bold mt-2 text-accent">André</h1>
          <p className="mt-4">
            Com mais de 10 anos de experiência em gestão e coordenação de
            equipes, desenvolvi sólidas habilidades em liderança, organização.
            No entanto, movido pela paixão por tecnologia e o desejo de atuar em
            uma área que sempre sonhei, decidi fazer uma transição de carreira.
            Formado em Análise e Desenvolvimento de Sistemas pela Universidade
            Projeção, comecei minha nova trajetória profissional em 2021,
            iniciando com freelances em desenvolvimento .NET. Durante esse
            período, tive a oportunidade de aplicar meus conhecimentos em
            projetos práticos e, com o tempo, fui efetivado em algumas empresas,
            onde pude aprimorar ainda mais minhas habilidades técnicas. Sempre
            motivado a crescer e enfrentar novos desafios, busco me aprofundar
            no universo da programação e desenvolvimento de software. Meu
            objetivo é não apenas dominar as ferramentas e linguagens que
            utilizo no dia a dia, como .NET, C#, entre outras, mas também
            contribuir de maneira significativa para as equipes e projetos nos
            quais estou inserido. Acredito no aprendizado contínuo e na inovação
            como pilares para o sucesso nessa nova fase da minha carreira, e
            estou constantemente explorando novas tecnologias e tendências para
            me manter atualizado e entregar soluções de alta qualidade.
          </p>
        </div>
      </div>

      {/* Botão e social links abaixo, centralizado */}
      <div className="flex flex-col items-center gap-4">
        <Button
          form="contact-form"
          variant={"outline"}
          size={"lg"}
          className="uppercase flex items-center gap-2 rounded"
        >
          <span>Download currículum</span>
          <MdCloudDownload className="text-xl" />
        </Button>

        {/* Div para social links */}
        <div className="mb-8 flex flex-row space-x-4">
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-rosa-loiola-644b76246/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>

          <a
            href="https://wa.me/5561981194732?text=Ol%C3%A1%20Andr%C3%A9!%20Tenho%20uma%20oportunidade%20para%20voc%C3%AA%20e%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a href="/contact" className="text-3xl">
            <MdOutlineMail />
          </a>
          <a href="https://github.com/AndreRosaLoiola" target="_blank">
            <FaGithub className="text-3xl" />
          </a>
          <Link
            href={"https://www.instagram.com/taguareef?igsh=aGN4MHBvb21rZ3N1"}
          >
            <Image
              src={minhafoto}
              priority
              quality={100}
              alt="Minha Foto"
              className="object-contain rounded-md border-gray-500 w-8 h-8 sm:w-10 sm:h-10 -mt-1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
