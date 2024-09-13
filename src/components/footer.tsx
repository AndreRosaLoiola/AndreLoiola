"use client";

import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-8 xl:py-4 text-white bg-gray-900">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex flex-row space-x-4 mb-8">
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-rosa-loiola-644b76246/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-accent hover:text-white transition-colors" />
          </a>

          <a
            href="/contact"
            className="text-3xl text-accent hover:text-white transition-colors"
          >
            <MdOutlineMail />
          </a>
          <a href="https://github.com/AndreRosaLoiola" target="_blank">
            <FaGithub className="text-3xl text-accent hover:text-white transition-colors" />
          </a>

          <a
            href="https://wa.me/5561981194732?text=Ol%C3%A1%20Andr%C3%A9!%20Tenho%20uma%20oportunidade%20para%20voc%C3%AA%20e%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-accent hover:text-white transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} André Rosa Loiola. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
