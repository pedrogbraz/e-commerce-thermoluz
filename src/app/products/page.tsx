import ProductsContent from "@/components/productsContent"

export default function Products() {
  return (  
    <div className="space-y-6 mb-5 px-5">
      <h1 className="text-xl font-medium">Nossos Produtos</h1>
      <div className="grid grid-cols-2 gap-3">
        <ProductsContent name="Tubular Tipo J" oldPrice="49,99" price="29,99" />
        <ProductsContent name="Tubular Tipo J" oldPrice="49,99" price="29,99" />
        <ProductsContent name="Tubular Tipo J" oldPrice="49,99" price="29,99" />
        <ProductsContent name="Tubular Tipo J" oldPrice="49,99" price="29,99" />
        <ProductsContent name="Tubular Tipo J" oldPrice="49,99" price="29,99" />
        <ProductsContent name="Tubular Tipo J" oldPrice="49,99" price="29,99" />
      </div>
    </div>
  )
}