"use client"

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

interface ProductsContentProps {
  img?: ReactNode,
  name: string,
  oldPrice: string,
  price: string
}

export default function ProductsContent({ img, name, oldPrice, price }: ProductsContentProps) {
  return (
    <>
      <div className="bg-[--bg-content] flex flex-col justify-center space-y-4 px-4 py-4 rounded-xl">
        <Image src="/tubular6.webp" alt="Foto da peça" width={200} height={200} className="rounded-xl" />
        <div className="space-y-1 px-1">
          <h1 className="text-sm text-[--black]">{name}</h1>
          <div className="text-xs flex gap-2 justify-start">
            <span className="line-through text-[--black]">De: {oldPrice}</span>
            <span className="font-semibold text-[--primary]">Para: {price}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <Dialog>
            <DialogTrigger className="bg-[--bg] text-[--black] rounded-xl py-2 px-1.5 sm:py-2 sm:px-3 text-[10px] sm:text-xs font-medium">Ver mais</DialogTrigger>
            <DialogContent className="bg-[--bg] space-y-[10px] border-none text-[--white]">
              <DialogHeader>
                <DialogTitle className="font-medium text-[--black]">{name}</DialogTitle>
              </DialogHeader>
              <div className="flex gap-4">
                <div className="w-[50%] h-40 rounded-xl shadow-md border">
                  <Image src="/tubular6.webp" alt="dawdawd" width={350} height={200} className="rounded-xl" />
                </div>
                <div className="w-[50%] h-40 rounded-xl">
                <ScrollArea className="h-[200px] max-h-40 rounded-md text-[--black]">
                  <div className="flex flex-col text-sm gap-2">
                    <div>
                      <h1 className="">{name}</h1>
                      <div className="flex gap-1">
                        <span className="line-through text-[--black]">De: {oldPrice}</span>
                        <span className="font-semibold text-[--primary]">Para: {price}</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-sm">Descrição</h2>
                      <p className="text-[--text] text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eos perspiciatis architecto quos sequi, unde laudantium optio possimus atque delectus totam reiciendis aspernatur enim. Voluptatum labore sapiente libero nobis incidunt.</p>
                    </div>
                    <div>
                      <h2 className="text-sm">Medidas</h2>
                      <p className="text-[--text] text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eos perspiciatis architecto quos sequi, unde laudantium optio possimus atque delectus totam reiciendis aspernatur enim. Voluptatum labore sapiente libero nobis incidunt.</p>
                    </div>
                  </div>
                </ScrollArea>
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                <Button className="rounded-xl text-xs w-full bg-[--primary] hover:bg-[--primary] duration-300 text-[--white] font-semibold">Fechar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Link href="https://wa.me/5511961432251" target="_blank" className="rounded-xl text-[10px] sm:text-xs py-2 px-1.5 sm:py-2 sm:px-3 bg-green-500 hover:bg-green-500/80 duration-300 text-[--white] font-semibold">Comprar</Link>
        </div>
      </div>
    </>
  )
}