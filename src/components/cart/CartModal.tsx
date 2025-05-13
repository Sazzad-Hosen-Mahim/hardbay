import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { clearCart } from "@/store/Slices/CartSlice/cartSlice";
import axios from "axios";
import { useState } from "react";

const baseURL = import.meta.env.VITE_BASE_URL;

interface CartModalProps {
  setIsPaymentModalOpen: (isOpen: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ setIsPaymentModalOpen }) => {
  const { items } = useAppSelector((state) => state.cart);

  console.log(items, "items from caaaartttt");

  const productsName: string[] = [];

  items.map((item) => {
    productsName.push(item.name);
  });
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    phone: "",
    productName: productsName,
    quantity: 0,
    address: "",
    postalCode: "",
    country: "",
  });

  const dispatch = useAppDispatch();

  console.log(productsName, "products naaameeee");

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearCart());
    // Handle payment processing here
    console.log("Payment submitted:", paymentDetails);
    const response = axios.post(`${baseURL}/bookings`, paymentDetails);
    console.log(response, "response from cart api");
    // Close modal after submission
    setIsPaymentModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Payment Details</h3>
          <button
            onClick={() => setIsPaymentModalOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handlePaymentSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={paymentDetails.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={paymentDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={paymentDetails.productName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder=""
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={paymentDetails.quantity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={paymentDetails.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="24, Mapple Street"
              required
            />
          </div>
          <div className="flex gap-3 w-full">
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={paymentDetails.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="3440"
                required
              />
            </div>
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={paymentDetails.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Finland"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsPaymentModalOpen(false)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartModal;
