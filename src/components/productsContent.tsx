import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
        <Image src="/tubular6.webp" alt="dawdawd" width={200} height={200} className="rounded-xl" />
        <div className="space-y-1 px-1">
          <h1 className="text-sm text-[--black]">{name}</h1>
          <div className="text-xs flex gap-2 justify-start">
            <span className="line-through text-[--black]">De: {oldPrice}</span>
            <span className="font-semibold text-[--primary]">Para: {price}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <Button className="rounded-xl text-[--black] text-xs">Ver mais</Button>
          <Button className="rounded-xl text-xs bg-green-500 hover:bg-green-500/80 duration-300 text-[--white] font-semibold">Comprar</Button>
        </div>
      </div>
    </>
  )
}