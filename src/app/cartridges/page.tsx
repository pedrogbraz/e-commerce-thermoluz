import ProductsContent from "@/components/productsContent";

export default function Cartridges() {
  return (
    <div className="space-y-6 mb-5 px-5">
    <h1 className="text-xl font-medium text-[--black]">Resistências em Cartuchos</h1>
    <div className="grid grid-cols-2 gap-3">
      <ProductsContent name="Cartucho 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Cartucho 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Cartucho 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Cartucho 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Cartucho 20x20" oldPrice="49,99" price="29,99" />
      <ProductsContent name="Cartucho 20x20" oldPrice="49,99" price="29,99" />
    </div>
  </div>
  )
}