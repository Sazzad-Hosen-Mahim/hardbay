import { useState } from "react";
import img1 from "@/assets/products/1.webp";
import img2 from "@/assets/products/server2.jpeg";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Enterprise Server X9000",
    price: 120,
    quantity: 1,
    image: img1,
  },
  {
    id: 2,
    name: "NVIDIA RTX 3090",
    price: 300,
    quantity: 2,
    image: img2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-20">
      <h2 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h2>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Preview</th>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end items-center gap-6">
        <h3 className="text-xl font-semibold">Total: ${getTotal()}</h3>
        <Link to="/checkout">
          <button className="bg-primary-orange hover:bg-primary-yellow hover:text-black text-white px-6 py-3 rounded-lg shadow">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
