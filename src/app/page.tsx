import Photo from "@/components/Photo";
import Botaodownload from "./components/botaodownloadcurriculo";

export default function Home() {
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
          <h1 className="text-4xl font-bold mt-2 text-accent">André.</h1>
          <p className="mt-4">
            Profissional com ampla experiência em desenvolvimento de software,
            com um histórico de participação em projetos de grande porte para
            empresas renomadas como{" "}
            <span className="text-accent">Allure Models</span>,{" "}
            <span className="text-accent">Brasil Cash</span>,{" "}
            <span className="text-accent">Polishop</span> e{" "}
            <span className="text-accent">
              Geap Plano de Saúde do Servidor Público
            </span>
            . Antes de iniciar minha carreira em programação, trabalhei com
            gestão de empresas, o que me proporcionou uma excelente comunicação
            e muita proatividade. Essa experiência me permitiu desenvolver
            habilidades de liderança e uma visão estratégica, que aplico no meu
            trabalho diário. Ao longo da minha carreira, desenvolvi habilidades
            sólidas em diversas tecnologias, incluindo .NET, React e Vue. Também
            trabalhei com sistemas legados utilizando ASP Clássico e Visual
            Basic. Tenho um forte compromisso com a entrega de soluções de alta
            qualidade e a melhoria contínua dos processos de desenvolvimento.
            Além das minhas competências técnicas, sou conhecido por minha
            capacidade de trabalhar bem em equipe, resolver problemas complexos
            e adaptar-me rapidamente a novas tecnologias e metodologias.
          </p>

          <div className="mt-6 flex  justify-center align-middle">
            <Botaodownload />
          </div>
        </div>
      </div>
    </main>
  );
}
