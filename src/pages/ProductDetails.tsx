import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
