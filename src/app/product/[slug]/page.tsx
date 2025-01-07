"use client";

import { useCart } from "@/app/component/cardProvider";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

type Product = {
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
};

type Params = {
  params: {
    slug: string;
  };
};

async function getProduct(slug: string) {
  const response = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      title,
      description,
      price,
      category,
      "imageUrl": image.asset->url,
      stock
    }`,
    { slug }
  );
  return response;
}

export default function ProductDetails({ params }: Params) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const fetchedProduct = await getProduct(params.slug);
      setProduct(fetchedProduct);
    }
    fetchData();
  }, [params.slug]);

  const handleQuantityChange = (increment: number) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: params.slug,
        name: product.title,
        description: product.description,
        price: product.price,
        quantity: quantity,
        imageUrl: product.imageUrl,
      });
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-800 to-emerald-900">
        <p className="text-white text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-800 to-emerald-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          {product.imageUrl && (
            <div className="relative w-full h-64 md:h-full">
              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={product.imageUrl}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}

          {/* Product Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-gray-50">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
                {product.title}
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-xl md:text-2xl font-semibold text-emerald-600 mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-500">
                  Category:{" "}
                  <span className="font-medium text-teal-800">
                    {product.category}
                  </span>
                </p>
                {product.stock > 0 ? (
                  <p className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                    In Stock
                  </p>
                ) : (
                  <p className="text-sm text-red-600 font-medium bg-red-100 px-3 py-1 rounded-full">
                    Out of Stock
                  </p>
                )}
              </div>
            </div>

            {/* Quantity Controller */}
            <div className="flex items-center space-x-4 mt-6">
              <button
                className={`px-4 py-2 rounded text-lg font-semibold transition-colors duration-300 ${
                  quantity === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="text-lg font-semibold text-gray-800">
                {quantity}
              </span>
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-lg font-semibold transition-colors duration-300"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-medium py-3 px-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md text-center">
                Item added to cart successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}