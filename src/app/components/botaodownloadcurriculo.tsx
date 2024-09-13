"use client";
import React from "react";
import pdf from "@/assets/andreRosa.pdf";
import { Button } from "@/components/ui/button";
import { MdCloudDownload } from "react-icons/md";

const Botaodownload = () => {
  function handleDownloadPdf() {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "andreRosa.pdf";
    link.click();
  }
  return (
    <Button
      form="contact-form"
      variant={"outline"}
      size={"lg"}
      className="uppercase flex items-center gap-2 rounded"
      onClick={handleDownloadPdf}
    >
      <span>Download currículo</span>
      <MdCloudDownload className="text-xl" />
    </Button>
  );
};

export default Botaodownload;
