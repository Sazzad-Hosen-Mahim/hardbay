import { Link } from "react-router-dom";
import { Product } from "@/types/ProductInterface";

interface ProductContentProps {
  product: Product;
}

const ProductContent = ({ product }: ProductContentProps) => {
  console.log(product, "product in ProductContent");
  const { id, productName, description, price, createdAt, specs } = product;
  console.log(specs, "specs in ProductContent");

  const processorSpec = specs.find((spec) => spec.title === "Processor");

  const cpuData = processorSpec?.data.find((entry) => "CPU" in entry);

  // console.log(cpuData?.CPU);
  const expenssionSlotSpec = specs.find((spec) => spec.title === "GPU");
  // console.log(expenssionSlotSpec, 'expenssionSlotSpec in ProductContent');
  const gpuData = expenssionSlotSpec?.data?.find((entry) => "GPU" in entry);
  console.log(gpuData, "gpuData in ProductContent");
  return (
    <>
      <Link to={`/service/product-details/${id}`}>
        <h3 className="font-bold text-lg">{productName}</h3>
      </Link>
      <div className="text-sm text-primary-orange">
        {new Date(createdAt).toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </div>
      <p className="text-gray-700 mb-2 line-clamp-2">{description}</p>
      {cpuData?.CPU && (
        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div>
            <span className="font-semibold">CPU:</span> {cpuData.CPU}
          </div>
        </div>
      )}
      {gpuData?.GPU && (
        <div>
          <span className="font-semibold">GPU:</span> {gpuData.GPU}
        </div>
      )}

      <div className="mt-auto flex justify-between items-center">
        <span className="font-bold text-lg">${price.toLocaleString()}</span>
        <Link to={`/service/product-details/${id}`}>
          <button className="bg-primary-blue text-white px-4 py-2 rounded hover:bg-blue-700">
            Configure
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductContent;
