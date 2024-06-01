"use client"

import Link from "next/link";

import { IoMdMenu, IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import DarkModeToggle from "./DarkModeToggle/darkModeToggle";

export default function Header() {
  return (
    <div className="flex items-center text-[--textNavbar] justify-between border-b border-[--separator] mb-10 md:mb-20 py-4 px-6 sm:px-12 md:px-16">
      <Link href="/" className="hover:text-[--white] duration-300">
        <span>Logo</span>
      </Link>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <Sheet>
        <SheetTrigger>
          <IoMdMenu className="size-6" />
        </SheetTrigger>
          <SheetContent className="bg-[--bg] border-none text-[--menubar]">
            <SheetHeader>
              <SheetDescription className="flex flex-col space-y-6 text-start px-2 py-4 text-base">
                <div className="flex flex-col space-y-4">
                  <Link className="hover:translate-x-[2px] duration-300" href="/">
                    <span >Início</span>
                  </Link>
                  <Link className="hover:translate-x-[2px] duration-300" href="/produtos">
                    <span >Produtos</span>
                  </Link>
                  <Link className="hover:translate-x-[2px] duration-300" href="/sobre">
                    <span >Sobre nós</span>
                  </Link>
                  <Link className="hover:translate-x-[2px] duration-300" href="/contatos">
                    <span >Contatos</span>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  <Link className="hover:translate-x-[2px] duration-300" href="/resistencias">
                      <span>Resistências</span>
                    </Link>
                    <Link className="hover:translate-x-[2px] duration-300" href="/termopares">
                      <span>Termopares</span>
                    </Link>
                    <Link className="flex items-center gap-1" href="/produtos">
                      <span>Ver todos</span>
                    </Link>
                </div>
                <div className="flex justify-evenly gap-4 text-[--white]">
                  <Link href="https://www.instagram.com/thermoluz_resistencias_/" target="_blank" className="p-2 rounded-[8px] bg-gradient-to-tr from-amber-500 to-pink-500 hover:scale-[1.06] duration-300">
                    <IoLogoInstagram className="size-5" />
                  </Link>
                  <Link href="https://wa.me/5511961432251" target="_blank" className="p-2 rounded-[8px] bg-green-500 hover:scale-[1.06] duration-300">
                    <IoLogoWhatsapp className="size-5" />
                  </Link>
                  <Link href="mailto:thermoluz.ind@hotmail.com" target="_blank" className="p-2 rounded-[8px] bg-[#EA4335] hover:scale-[1.06] duration-300">
                    <MdOutlineMailOutline className="size-5" />
                  </Link>
                  <Link href="/contatos" className="p-2 rounded-[8px] bg-blue-500 hover:scale-[1.06] duration-300">
                    <MdLocalPhone className="size-5" />
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}