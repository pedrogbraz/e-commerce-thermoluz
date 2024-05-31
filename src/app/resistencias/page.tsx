import ProductsContent from "@/components/productsContent";

export default function Resistencias() {
  return (
    <div className="space-y-6 mb-5 px-5 sm:px-12 md:px-16">
    <h1 className="text-xl font-medium text-[--black]">Resistências</h1>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
      <ProductsContent name="Resistências 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Resistências 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Resistências 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Resistências 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Resistências 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Resistências 20x20" oldPrice="49,99" price="29,99" />
    </div>
  </div>
  )
}