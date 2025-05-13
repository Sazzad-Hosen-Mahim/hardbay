import React, { useState } from "react";

const Checkout = () => {
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed with address:", address);
    // Handle actual order logic here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      {/* Address Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={address.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP / Postal Code"
            value={address.zip}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={address.country}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
        >
          Place Order
        </button>
      </form>

      {/* Order Summary Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Enterprise Server X9000</span>
            <span>$120</span>
          </div>
          <div className="flex items-center justify-between">
            <span>NVIDIA RTX 3090</span>
            <span>$300</span>
          </div>
          <hr />
          <div className="flex items-center justify-between font-semibold text-lg">
            <span>Total</span>
            <span>$420</span>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Payment will be handled securely after order confirmation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
