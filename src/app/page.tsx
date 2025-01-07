import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpeg"
            alt="Electronics Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="block">Discover the Future of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">
                Electronics
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore cutting-edge gadgets, smart home devices, and the latest tech innovations. Elevate your digital lifestyle today!
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/product">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Shop Now
                </Button>
              </Link>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Paragraph Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">
              Explore Electronics
            </span>
          </h2>
          <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
            Electronics are at the heart of modern innovation, driving advancements in communication, automation, and entertainment. From smartphones that keep us connected with the world to smart home devices that bring convenience to our daily lives, the scope of electronics is ever-expanding. Laptops power creativity and productivity, while cutting-edge audio systems immerse us in rich soundscapes. Embrace the future with electronics that not only enhance your lifestyle but also set the foundation for a smarter, more connected world. Dive into the latest technological marvels and experience the transformative power of electronics today.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">
              Stay Updated
            </span>
          </h2>
          <p className="mb-8 text-lg">
            Subscribe to our newsletter for the latest tech news and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-teal-600 bg-gray-700 text-white"
            />
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-r-full">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}