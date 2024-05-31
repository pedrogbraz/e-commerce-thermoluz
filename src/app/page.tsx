"use client"

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import Link from "next/link";

import { motion } from "framer-motion";

import { TbAdjustmentsBolt } from "react-icons/tb";
import { IoIosThermometer } from "react-icons/io";
import { BsMouse } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <div className="flex flex-col gap-3 px-5 sm:px-12 md:px-16 md:flex-row-reverse md:items-center">
          <motion.img
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0  }}
          transition={{ delay: 0.4 }}
          exit={{ opacity: 0, translateX: 20 }}
          src="/industria.jpg" className="max-h-[320px] rounded-xl" alt="" />
          <div className="space-y-10">  
            <div className="md:w-[90%] md:space-y-6">
              <motion.h1
              initial={{ opacity: 0, translateX: -20 }}
              animate={{ opacity: 1, translateX: 0  }}
              exit={{ opacity: 0, translateX: -20 }}
              className="text-[24px] md:text-4xl font-bold text-[--primary]">NOME <span className="text-[--secondary]">DA EMPRESA</span></motion.h1>
              <motion.p
              initial={{ opacity: 0, translateX: 20 }}
              animate={{ opacity: 1, translateX: 0  }}
              transition={{ delay: 0.2 }}
              exit={{ opacity: 0, translateX: 20 }}
              className="text-[--text] text-sm md:text-lg">A (Nome) é líder a mais de 10 anos em São Paulo em materiais de aquecimento de alta qualidade, oferecendo todos os tipos de resistências elétricas e muito mais, com expertise técnica e atendimento personalizado.</motion.p>
              <div className="space-y-8">
                <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0  }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="mt-6 flex gap-4">
                  <Link className="bg-[--primary] w-[50%] md:w-[26%] text-[--white] font-medium text-center p-2 rounded-xl hover:-translate-y-[2px] hover:shadow-lg duration-300" href="/">
                    Ver mais sobre
                  </Link>
                  <Link className="bg-[--bg-content] w-[50%] md:w-[26%] text-[--black] font-medium text-center p-2 rounded-xl hover:-translate-y-[2px] hover:shadow-lg duration-300" href="/products">
                    Produtos
                  </Link>
                </motion.div>
              </div>
            </div>
          <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0  }}
          transition={{ delay: 0.4 }}
          exit={{ opacity: 0, translateX: -20 }}
          className="flex items-center text-[--black] gap-1 mt-2">
            <BsMouse />
            <span className="text-xs">Role para ver mais seções</span>
          </motion.div>
          </div>
        </div>

        <h1 className="w-full px-5 sm:px-12 md:px-16 text-3xl text-[--black] font-medium">Nossas linhas</h1>
        <div className="flex flex-col gap-4 mx-5 sm:mx-0 sm:px-12 md:px-16 md:grid md:grid-cols-3">
          <Container color="bg-[--bg-content]" content={
            <div className="text-center space-y-5">
              <div className="inline-flex justify-center bg-[--bg] rounded-full p-3">
                <TbAdjustmentsBolt className="size-8 text-[--primary]" />
              </div>
              <h4 className="font-medium text-[--black]">Industrias Plásticas</h4>
              <p className="text-sm text-[--text] px-6">Resistências elétricas são críticas na indústria plástica, regulando temperaturas em processos como moldagem por injeção e extrusão, garantindo a qualidade dos produtos e aquecendo equipamentos fundamentais para a produção.</p>
            </div>
          }>
          </Container>
          <Container color="bg-[--bg-content]" content={
            <div className="text-center space-y-5">
              <div className="inline-flex justify-center bg-[--bg] rounded-full p-3">
                <TbAdjustmentsBolt className="size-8 text-[--primary]" />
              </div>
              <h4 className="font-medium text-[--black]">Galvanoplastia</h4>
              <p className="text-sm text-[--text] px-6">Resistências elétricas desempenham um papel crucial na galvanoplastia, controlando a temperatura para garantir a deposição uniforme de metais sobre substratos, assegurando a qualidade dos produtos finais.</p>
            </div>
          }>
          </Container>
          <Container color="bg-[--bg-content]" content={
            <div className="text-center space-y-5">
              <div className="inline-flex justify-center bg-[--bg] rounded-full p-3">
                <IoIosThermometer className="size-8 text-[--primary]" />
              </div>
              <h4 className="font-medium text-[--black]">Tratamento Térmico</h4>
              <p className="text-sm text-[--text] px-6">Resistências elétricas desempenham um papel vital tanto na indústria plástica, para controle térmico em processos como moldagem por injeção e extrusão, quanto em tratamentos térmicos, aquecendo materiais para promover mudanças em suas propriedades.</p>
            </div>
          }>
          </Container>
          <Container color="bg-[--bg-content]" content={
            <div className="text-center space-y-5">
              <div className="inline-flex justify-center bg-[--bg] rounded-full p-3">
                <TbAdjustmentsBolt className="size-8 text-[--primary]" />
              </div>
              <h4 className="font-medium text-[--black]">Indústrias Químicas</h4>
              <p className="text-sm text-[--text] px-6">Resistências elétricas são essenciais nas indústrias químicas, controlando a temperatura para garantir condições ideais em processos de produção e tratamento de substâncias, promovendo eficiência e segurança operacional.
              </p>
            </div>
          }>
          </Container>
          <Container color="bg-[--bg-content]" content={
            <div className="text-center space-y-5">
              <div className="inline-flex justify-center bg-[--bg] rounded-full p-3">
                <TbAdjustmentsBolt className="size-8 text-[--primary]" />
              </div>
              <h4 className="font-medium text-[--black]">Fundições</h4>
              <p className="text-sm text-[--text] px-6">Resistências elétricas desempenham um papel crucial na fundição, proporcionando o calor necessário para derreter metais e moldá-los em formas específicas, garantindo precisão e eficiência no processo de fabricação de peças fundidas.</p>
            </div>
          }>
          </Container>
          <Container color="bg-[--bg-content]" content={
            <div className="text-center space-y-5">
              <div className="inline-flex justify-center bg-[--bg] rounded-full p-3">
                <TbAdjustmentsBolt className="size-8 text-[--primary]" />
              </div>
              <h4 className="font-medium text-[--black]">Indústrias Alimentícias</h4>
              <p className="text-sm text-[--text] px-6">Resistências elétricas são fundamentais nas indústrias alimentícias, controlando com precisão a temperatura em processos como cozimento, assamento, fritura e esterilização, garantindo a segurança e a qualidade dos alimentos produzidos.</p>
            </div>
          }>
          </Container>
        </div>

        <div className="space-y-2 px-5 sm:px-12 md:px-16">
          <Container color="bg-[--primary]" content={
              <div className="space-y-3">
                <h1 className="flex items-center gap-2 justify-center text-3xl font-semibold text-[--white]">Qualidade</h1>
              </div>
            }>
          </Container>
          <Container color="bg-[--secondary]" content={
              <div className="space-y-3">
                <h1 className="flex items-center gap-2 justify-center text-3xl font-semibold text-[--white]">Confiabilidade </h1>
              </div>
            }>
          </Container>
          <Container color="bg-[--bg-content]" content={
              <div className="space-y-3">
                <h1 className="flex items-center gap-2 justify-center text-3xl font-semibold text-[--black70]">Durabilidade </h1>
              </div>
            }>
          </Container>
        </div>

        <div>
          <h1 className="w-full px-5 sm:px-12 md:px-16 text-3xl text-[--black] font-medium">Avaliações</h1>
          <div className="flex flex-col gap-3 px-5 sm:px-12 md:px-16 py-8">
            <div className="w-full flex justify-start">
              <div className="flex justify- px-4 py-3 rounded-full items-center gap-4 bg-[--bg-content] w-[85%]">
                <img src="pessoa1.jpg" className="w-16 h-16 rounded-full" />
                <div className="flex flex-col ">
                  <span className="text-xs font-medium text-[--black]">Ediléia Santos</span>
                  <span className="text-[--text] text-xs max-w-72">Maravilhosa a atenção que eles tem com os clientes, estão de parabéns.</span>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex justify-end px-4 py-3 rounded-full items-center gap-4 bg-[--bg-content] w-[85%]">
                <div className="flex flex-col ">
                  <span className="text-xs text-end font-medium text-[--black]">Paulo Gonçalves</span>
                  <span className="text-[--text] text-end text-xs max-w-72">Maravilhosa a atenção que eles tem com os clientes, estão de parabéns.</span>
                </div>
                <img src="pessoa2.jpg" className="w-16 h-16 rounded-full" />
              </div>
            </div>
            <div className="w-full flex justify-start">
              <div className="flex justify-start px-4 py-3 rounded-full items-center gap-4 bg-[--bg-content] w-[85%]">
                <img src="pessoa3.jpg" className="w-16 h-16 rounded-full" />
                <div className="flex flex-col ">
                  <span className="text-xs font-medium text-[--black]">Adailton Silva</span>
                  <span className="text-[--text] text-xs max-w-72">Maravilhosa a atenção que eles tem com os clientes, estão de parabéns.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}