import ProductsContent from "@/components/productsContent";

export default function Termopares() {
  return (
    <div className="space-y-6 mb-5 px-5 sm:px-12 md:px-16">
    <h1 className="text-xl font-medium text-[--black]">Termopares</h1>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
      <ProductsContent name="Termopar Tipo K" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Termopar Tipo K" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Termopar Tipo K" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Termopar Tipo K" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Termopar Tipo K" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Termopar Tipo K" oldPrice="49,99" price="29,99" />
    </div>
  </div>
  )
}