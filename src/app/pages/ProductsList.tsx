import ProductCard from "../components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
