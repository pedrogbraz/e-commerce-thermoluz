"use client"

import Link from "next/link";

import { motion } from "framer-motion";

export default function Contatos() {
  return (
    <div className="px-5 sm:px-12 md:px-16">
      <div
      className="flex flex-col items-center gap-4 text-[--text] bg-[--bg] px-4 py-10 rounded-xl">

        <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        className="flex flex-col gap-1 w-full justify-center items-center">
          <h2 className="text-[--primary] font-semibold text-xl">Entre em contato</h2>
          <h3 className="font-semibold text-[--black70] text-sm">Telefone / WhatsApp</h3>
          <div className="flex flex-col">
            <Link className="hover:text-[--text-hover] duration-300" href="https://wa.me/5511961432251" target="_blank">(11) 96143-2251</Link>
            <Link className="hover:text-[--text-hover] duration-300" href="https://wa.me/5511967474103" target="_blank">(11) 96747-4103</Link>
            <span>(11) 2402-2399</span>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-1 w-full justify-center items-center">
          <h2 className="text-[--primary] font-semibold text-xl">Endereço</h2>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="font-semibold text-[--black70] text-sm">Onde estamos</h3>
            <span className="text-center max-w-[80%]">Rua Noburo Nonaka 149 - Jardim Santa Lidia - GRU</span>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-1 w-full justify-center items-center">
          <h2 className="text-[--primary] font-semibold text-xl">E-mail</h2>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="font-semibold text-[--black70] text-sm">E-mail</h3>
            <Link href="mailto:thermoluz.ind@hotmail.com" className="hover:text-[--text-hover] duration-300" target="_blank">thermoluz.ind@hotmail.com</Link>
          </div>
        </motion.div>
      </div>
   </div>
  )
}