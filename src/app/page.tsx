"use client";

import { Button } from "@/components/ui/button";
import receitas, { Receita } from "@/constants/receitas";
import Image from "next/image";
import { useState } from "react";
import {
  PiArrowCircleRightFill,
  PiShuffleSimpleFill,
  PiXCircleFill,
} from "react-icons/pi";

const limitarTexto = (texto: any, limite: any) => {
  return texto.length > limite ? texto.slice(0, limite) + "..." : texto;
};

export default function Home() {
  const [receitaSelecionada, setReceitaSelecionada] = useState<Receita | null>(
    null
  );

  const escolherReceitaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * receitas.length);
    setReceitaSelecionada(receitas[indiceAleatorio]);
  };

  const fecharModal = () => {
    setReceitaSelecionada(null);
  };

  const truncateNome = (nome: string, maxLength: number): string => {
    if (nome.length <= maxLength) {
      return nome;
    }

    return `${nome.substring(0, maxLength - 3)}...`;
  };

  return (
    <main className="px-3.5 py-5 flex flex-col gap-5 h-full overflow-x-hidden">
      <h1 className="text-2xl text-zinc-900 font-bold">Receitas</h1>
      <div className="flex flex-col gap-3 mb-20">
        {receitas.map((receita) => (
          <div
            key={receita.id}
            className="border border-zinc-300 rounded-lg p-3 gap-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-3 w-full">
              <img
                src={receita.imagem}
                alt={receita.nome}
                className="w-[70px] h-auto min-h-12 rounded-2xl object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-zinc-800">
                  {truncateNome(receita.nome, 30)}
                </h2>
                <p className="text-sm font-normal text-zinc-600">
                  {receita.midia}
                </p>
              </div>
            </div>
            <PiArrowCircleRightFill
              size={32}
              className="min-w-8 text-yellow-600 cursor-pointer"
              onClick={() => setReceitaSelecionada(receita)}
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 w-[97%] bg-white">
        <div className="pt-6 pb-4 border-t border-zinc-300 mr-4 ">
          <Button
            size={"lg"}
            onClick={escolherReceitaAleatoria}
            className="w-full"
          >
            Escolher receita aleatória <PiShuffleSimpleFill size={24} />
          </Button>
        </div>
      </div>

      {receitaSelecionada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-80"
            onClick={fecharModal}
          ></div>
          <div className="bg-white max-h-2/3 p-5 rounded-lg shadow-lg max-w-[90%] relative z-10 ">
            <button
              className="absolute top-4 z-30 right-4 rounded-smring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none  dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:bg-zinc-800 dark:text-zinc-400"
              onClick={fecharModal}
            >
              <span className="sr-only">Close</span>
              <PiXCircleFill
                size={32}
                className="text-white border-yellow-600 border-2 rounded-full"
              />
            </button>
            <div className="bg-black/50 z-0">
              <img
                src={receitaSelecionada.imagem}
                alt={receitaSelecionada.nome}
                className="w-full object-cover object-top h-52 absolute top-0 left-0  "
              />
            </div>
            <div className="flex flex-col mb-2 mt-52">
              <h2 className="text-2xl font-semibold">
                {receitaSelecionada.nome}
              </h2>
              <p className="text-base font-regular text-zinc-600">
                {receitaSelecionada.midia}
              </p>
            </div>
            <div className="max-h-96 overflow-x-auto py-3 flex flex-col gap-5">
              <div className="text-sm font-regular text-zinc-600">
                <h3 className="text-lg font-semibold text-zinc-700 mb-2">
                  Ingredientes:
                </h3>
                <ul className="flex flex-col gap-2">
                  {receitaSelecionada.ingredientes.map((ingrediente, index) => (
                    <li
                      key={index}
                      className="text-sm font-light text-zinc-900 flex items-start gap-2"
                    >
                      {" "}
                      <div className="min-w-1.5 min-h-1.5 rounded-full bg-yellow-600 mt-1.5" />
                      {ingrediente}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold text-zinc-700 mb-2">
                  Modo de preparo:
                </h3>
                <ul className="flex flex-col gap-2">
                  {receitaSelecionada.modo_de_preparo.map((passo, index) => (
                    <li
                      key={index}
                      className="text-sm font-light text-zinc-900 flex items-start gap-2"
                    >
                      <span className="text-yellow-600 font-medium">
                        {index + 1}.
                      </span>
                      <span>{passo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
