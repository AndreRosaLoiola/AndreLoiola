import { motion } from "framer-motion";

const stairAnimation = {
  initial: { x: "0%", opacity: 1 },
  animate: { x: ["0%", "-100%"], opacity: 0 },
  exit: { x: "0%", opacity: 1 },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const getColor = () => {
  // Função para gerar uma cor cinza transparente baseada no índice
  const grayColor = "rgba(128, 128, 128, 0.5)"; // Cinza com 50% de opacidade
  return grayColor;
};

const Stairs = () => {
  return (
    <>
      {/* Lado esquerdo */}
      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-1/6 bg-white absolute"
            style={{
              backgroundColor: getColor(), // Define a cor diretamente no estilo
              left: `${index * 16.6}%`, // Ajusta a posição horizontal para criar o efeito de degraus
              top: "0", // Posiciona os degraus na parte superior
            }}
          />
        ))}
      </div>

      {/* Lado direito */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-1/6 bg-white absolute"
            style={{
              backgroundColor: getColor(), // Define a cor diretamente no estilo
              right: `${index * 16.6}%`, // Ajusta a posição horizontal para criar o efeito de degraus
              top: "0", // Posiciona os degraus na parte superior
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Stairs;
