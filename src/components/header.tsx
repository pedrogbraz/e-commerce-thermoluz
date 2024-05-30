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
    <div className="flex items-center text-[--textNavbar] justify-between border-b border-[--separator] mb-10 py-4 px-6 md:px-16">
      <Link href="/" className="hover:text-[--white] duration-300">
        <span>Logo</span>
      </Link>
      <div className="flex items-center gap-3">
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
                  <Link className="hover:translate-x-[2px] duration-300" href="/products">
                    <span >Produtos</span>
                  </Link>
                  <Link className="hover:translate-x-[2px] duration-300" href="/about">
                    <span >Sobre nós</span>
                  </Link>
                  <Link className="hover:translate-x-[2px] duration-300" href="/contacts">
                    <span >Contatos</span>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  <Link className="hover:translate-x-[2px] duration-300" href="/cartridges">
                      <span >Resistências em Cartucho</span>
                    </Link>
                    <Link className="hover:translate-x-[2px] duration-300" href="/collars">
                      <span >Resistências em Coleira</span>
                    </Link>
                    <Link className="hover:translate-x-[2px] duration-300" href="/">
                      <span >Resistências em Tubular</span>
                    </Link>
                    <Link className="hover:translate-x-[2px] duration-300" href="/">
                      <span >Resistências em Microtubular</span>
                    </Link>
                    <Link className="hover:translate-x-[2px] duration-300" href="/">
                      <span >Termopares</span>
                    </Link>
                    <Link className="flex items-center gap-1" href="/">
                      <span>Ver todos</span>
                    </Link>
                </div>
                <div className="flex justify-evenly gap-4 text-[--white]">
                  <Link href="/" target="_blank" className="p-2 rounded-[8px] bg-gradient-to-tr from-amber-500 to-pink-500 hover:scale-[1.06] duration-300">
                    <IoLogoInstagram className="size-5" />
                  </Link>
                  <Link href="/" target="_blank" className="p-2 rounded-[8px] bg-green-500 hover:scale-[1.06] duration-300">
                    <IoLogoWhatsapp className="size-5" />
                  </Link>
                  <Link href="mailto:thermoluz.ind@hotmail.com" target="_blank" className="p-2 rounded-[8px] bg-[#EA4335] hover:scale-[1.06] duration-300">
                    <MdOutlineMailOutline className="size-5" />
                  </Link>
                  <Link href="/" target="_blank" className="p-2 rounded-[8px] bg-blue-500 hover:scale-[1.06] duration-300">
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