import { useState } from "react";
import img1 from "@/assets/products/1.webp";
import img2 from "@/assets/products/2.webp";
import img3 from "@/assets/products/3.webp";
import img4 from "@/assets/products/4.webp";
import img5 from "@/assets/products/5.webp";
import img6 from "@/assets/products/6.webp";
import img7 from "@/assets/products/7.webp";

const NewDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const product = {
    name: "Supermicro SuperChassis 505-203B",
    images: [
      {
        id: 1,
        src: img1,
        alt: "Front view of server",
      },
      {
        id: 2,
        src: img2,
        alt: "Top view of server",
      },
      {
        id: 3,
        src: img3,
        alt: "Drive bay view of server",
      },
      {
        id: 4,
        src: img4,
        alt: "Internal view of server",
      },
      {
        id: 5,
        src: img5,
        alt: "Rear view of server",
      },
      {
        id: 6,
        src: img6,
        alt: "Rear view of server",
      },
      {
        id: 7,
        src: img7,
        alt: "Rear view of server",
      },
    ],
    price: "£134.40",
    tax: "£112.00",
    sku: "CSE-505-203B",
    availability: "Available",
    features: {
      "Form Factor":
        '2U chassis support max. motherboard size - ATX 12" x 10", E-ATX 12" x 13", EE-ATX 13" x 13.68". Support up to ATX 12"x13" MB with rear 2.5” HDD option installed',
      "Drive Bays":
        '24 x 2.5" hot-swap SAS/SATA drive bay, optional 2 x 2.5" hot-swap drive bay',
      Backplane:
        "24-port 2U SAS3 12Gbps single-expander backplane, support up to 24x 2.5-inch SAS3/SATA3 HDD/SSD",
      "Power Supply":
        "1U 920W Redundant Platinum Super Quiet power supply W/PMbus",
      "Expansion Slots": "7 low-profile expansion slot(s)",
      Cooling:
        "3 x 8cm high-performance PWM fan(s) Optional 5 x 6cm 4pin high performance fan(s)",
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Image Gallery */}
      <div className="flex gap-4 flex-col-reverse pb-5 border-b-2">
        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto pb-2 items-center justify-center  md:overflow-visible md:pb-0">
          {product.images.map((image, index) => (
            <div
              key={image.id}
              className={`flex-shrink-0 cursor-pointer overflow-hidden rounded ${
                selectedImage === index
                  ? "ring-2 ring-blue-800"
                  : "border border-gray-200"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-16 w-16 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-grow overflow-hidden rounded border border-gray-200">
          <img
            src={product.images[selectedImage].src || "/placeholder.svg"}
            alt={product.images[selectedImage].alt}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-2 text-center">{product.name}</h1>
        <p className="text-center text-sm text-gray-700">
          Inc. Vat <strong>{product.price}</strong>
        </p>
        <p className="text-center text-sm text-gray-600 mb-4">
          Excl. Tax: <strong>{product.tax}</strong>
        </p>
      </div>

      {/* Features */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
        <table className="w-full text-sm text-left text-gray-700">
          <tbody>
            {Object.entries(product.features).map(([label, value]) => (
              <tr key={label} className="border-b">
                <th className="py-2 font-medium w-48">{label}</th>
                <td className="py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SKU & Availability */}
      <div className="mt-6 text-sm text-gray-800">
        <p className="mb-1">
          Availability:{" "}
          <span className="font-bold text-green-600">
            {product.availability}
          </span>
        </p>
        <p>
          SKU: <span className="font-bold">{product.sku}</span>
        </p>
      </div>
    </div>
  );
};

export default NewDetails;
