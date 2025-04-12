// components/products/ProductContent.tsx
import { Product } from "@/lib/productsData";

interface ProductContentProps {
  product: Product;
}

const ProductContent = ({ product }: ProductContentProps) => {
  return (
    <>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <div className="flex items-center my-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(product.rating)
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
      </div>
      <p className="text-gray-700 mb-2 line-clamp-2">{product.description}</p>
      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
        {product.specs.cpu && (
          <div>
            <span className="font-semibold">CPU:</span> {product.specs.cpu}
          </div>
        )}
        {product.specs.gpu && (
          <div>
            <span className="font-semibold">GPU:</span> {product.specs.gpu}
          </div>
        )}
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="font-bold text-lg">
          ${product.price.toLocaleString()}
        </span>
        <button className="bg-primary-blue text-white px-4 py-2 rounded hover:bg-blue-700">
          {product.category === "gpu" ? "Rent Now" : "Configure"}
        </button>
      </div>
    </>
  );
};

export default ProductContent;
