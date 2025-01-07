import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

type Product = {
  title: string
  description: string
  price: number
  slug: string
  category: string
  imageUrl: string
  stock: number
}

async function getData() {
  const response = await client.fetch(`*[_type == "product"]{
    title,
    description,
    price,
    "slug": slug.current,
    category,
    "imageUrl": image.asset->url,
    stock
  }`)
  return response;
}

export default async function ProductListing() {
  const data = await getData();

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-800 to-emerald-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-400 mb-12">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product: Product, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Product Image */}
              {product.imageUrl && (
                <div className="relative w-full h-64">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-800 truncate">{product.title}</h3>
                <p className="text-gray-600 text-sm mt-2 h-12 overflow-hidden">{product.description}</p>
                <p className="text-lg font-bold text-emerald-600 mt-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm mt-2">Category: {product.category}</p>
                {product.stock > 0 ? (
                  <p className="text-green-500 text-sm mt-1">In Stock</p>
                ) : (
                  <p className="text-red-500 text-sm mt-1">Out of Stock</p>
                )}

                {/* View Details Button */}
                <Link href={`/product/${product.slug}`}>
                  <button className="mt-6 w-full bg-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

