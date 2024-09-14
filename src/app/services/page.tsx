"use client";
import { useEffect } from "react";
import "../globals.css";

const Services = () => {
  useEffect(() => {
    const columns = Array.from(
      document.querySelectorAll(".column")
    ) as HTMLElement[];

    const handleDragStart: EventListener = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.add("dragging");
      }
    };

    const handleDragEnd: EventListener = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target) {
        target.classList.remove("dragging");
      }
    };

    const handleDragOver: EventListener = (e: Event) => {
      e.preventDefault(); // Necessário para permitir o drop
      const dragEvent = e as DragEvent;
      const target = dragEvent.currentTarget as HTMLElement;
      const dragging = document.querySelector(".dragging") as HTMLElement;

      if (!(dragging instanceof HTMLElement)) return; // Verifique se o dragging é um HTMLElement

      const applyAfter = getNewPosition(target, dragEvent.clientY);

      if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
      } else {
        target.prepend(dragging);
      }
    };

    const getNewPosition = (column: HTMLElement, posY: number) => {
      const cards = column.querySelectorAll(
        ".item:not(.dragging)"
      ) as NodeListOf<HTMLElement>;
      let result: HTMLElement | undefined;

      cards.forEach((refer_card) => {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
      });

      return result;
    };

    const handleDrop: EventListener = (e: Event) => {
      e.preventDefault();
      const dragEvent = e as DragEvent;
      const target = dragEvent.currentTarget as HTMLElement;
      const dragging = document.querySelector(".dragging") as HTMLElement;

      if (!(dragging instanceof HTMLElement)) return; // Verifique se o dragging é um HTMLElement

      const applyAfter = getNewPosition(target, dragEvent.clientY);
      if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
      } else {
        target.prepend(dragging);
      }

      // Remover a classe 'dragging' após o drop
      dragging.classList.remove("dragging");
    };

    columns.forEach((column) => {
      column.addEventListener("dragstart", handleDragStart as EventListener);
      column.addEventListener("dragend", handleDragEnd as EventListener);
      column.addEventListener("dragover", handleDragOver as EventListener);
      column.addEventListener("drop", handleDrop as EventListener);
    });

    // Remova os event listeners ao desmontar o componente
    return () => {
      columns.forEach((column) => {
        column.removeEventListener(
          "dragstart",
          handleDragStart as EventListener
        );
        column.removeEventListener("dragend", handleDragEnd as EventListener);
        column.removeEventListener("dragover", handleDragOver as EventListener);
        column.removeEventListener("drop", handleDrop as EventListener);
      });
    };
  }, []);

  return (
    <div className="flex items-center bg-primary justify-center min-h-screen -mt-10 ">
      <div className="bg-white bg-primary   w-full max-w-6xl">
        <div className="grid grid-cols-1 bg-primary sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="text-accent font-bold  mb-2">To do.</div>
            <div className="flex flex-col gap-4 p-4 bg-cadetblue rounded column">
              <div
                className="bg-white p-4 rounded w-60 h-32 text-black item"
                draggable="true"
              >
                Pode ser a sua empresa ou o seu projeto.
              </div>
              <div
                className="bg-white p-4 rounded w-60 h-32 text-black item"
                draggable="true"
              >
                Pode ser a sua empresa ou o seu projeto.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-accent font-bold mb-2">In Progress.</div>
            <div className="flex flex-col gap-4 p-4 bg-cadetblue rounded column">
              <div
                className="bg-white p-4 rounded w-60 h-32 text-black item"
                draggable="true"
              >
                Desenvolvedor Jr Full Stack .Net/React . OnFriday Technologies
                2023 -2024
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-accent font-bold mb-2">Done.</div>
            <div className="flex flex-col gap-4 p-4 bg-cadetblue rounded column">
              <div
                className="bg-white p-4 rounded w-60 h-32 text-black item"
                draggable="true"
              >
                Desenvolvedor .Net Digital Mark · 2023 - 2023 ·
              </div>
              <div
                className="bg-white p-4 rounded w-60 h-32 text-black item"
                draggable="true"
              >
                Gerente de vendas casa das ferragens 2015 - 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
