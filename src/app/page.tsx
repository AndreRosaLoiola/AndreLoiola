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
            Com mais de 10 anos de experiência em gestão e coordenação de
            equipes, desenvolvi habilidades sólidas em liderança e organização.
            Movido pela paixão por tecnologia e pelo desejo de atuar na área que
            sempre sonhei, decidi fazer uma transição de carreira. Formado em
            Análise e Desenvolvimento de Sistemas pela Universidade Projeção,
            iniciei minha nova trajetória profissional em 2021 com
            desenvolvimento em <span className="text-accent">.NET</span>.
            Durante esse período, tive a oportunidade de aplicar meus
            conhecimentos em projetos práticos e fui efetivado em algumas
            empresas, onde aprimorei minhas habilidades técnicas. Sempre
            motivado a crescer e enfrentar novos desafios, busco me aprofundar
            no universo da programação e desenvolvimento de software. Acredito
            no aprendizado contínuo e na inovação como pilares para o sucesso
            nessa nova fase da minha carreira. Estou constantemente explorando
            novas tecnologias e tendências para me manter atualizado e entregar
            soluções de alta qualidade. Minhas experiências anteriores em gestão
            têm me proporcionado uma perspectiva única, ajudando a otimizar
            processos e a colaborar de forma eficiente em equipe.
          </p>
          <div className="mt-6 flex  justify-center align-middle">
            <Botaodownload />
          </div>
        </div>
      </div>
    </main>
  );
}
