import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <>
      <div className="flex px-8 py-10 bg-[--bg-content] rounded-xl items-center mt-8">
        
        <div className="w-full flex flex-col space-y-6">
        <div className="space-y-1">
          <h1 className="text-lg font-bold text-[--primary]">THERMO <span className="text-[--secondary]">LUZ</span></h1>
          <p className="text-sm text-[--text]">A Thermoluz é líder em Guarulhos em materiais de aquecimento de alta qualidade, oferecendo resistências tubulares, cartuchos e mais, com expertise técnica e atendimento personalizado.</p>
        </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[--text]">Explorar Páginas</h2>
            <Link href="/" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Início
            </Link>
            <Link href="/products" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Produtos
            </Link>
            <Link href="/about" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Sobre
            </Link>
            <Link href="/contacts" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Contatos
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[--text]">Contatos</h2>
            <Link href="/" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Whatsapp
            </Link>
            <Link href="/" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Instagram
            </Link>
            <Link href="/" className="text-[13px] hover:translate-x-[2px] duration-300 text-[--black]">
              Telefone
            </Link>
          </div>
          <Separator className="w-full bg-[--separator]" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[--text] text-center">Thermoluz © 2024. Todos os Direitos Reservados.</span>
              <span className="text-xs text-[--text] text-center">Desenvolvido por <Link className="hover:text-[--primary] duration-300" href="https://www.instagram.com/pedr0_br4z/">Pedro Gontijo Braz</Link></span>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}