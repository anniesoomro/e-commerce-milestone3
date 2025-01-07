import React from 'react';
import { FaShippingFast, FaTag, FaLock, FaUndo } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-b from-teal-900 via-emerald-800 to-green-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-teal-500 rounded-full opacity-20 transform rotate-45"></div>
          <div className="absolute right-0 bottom-0 w-60 h-60 bg-emerald-500 rounded-full opacity-20 transform -rotate-45"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8 leading-tight">
            Discover the Future of <span className="text-teal-300">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto text-teal-100">
            Explore our curated collection of cutting-edge electronics and innovative gadgets designed to elevate your digital lifestyle.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <BenefitCard icon={<FaShippingFast />} title="Free Shipping" description="On all orders over $50" />
            <BenefitCard icon={<FaTag />} title="Exclusive Deals" description="Save big on top brands" />
            <BenefitCard icon={<FaLock />} title="Secure Checkout" description="Your data is protected" />
            <BenefitCard icon={<FaUndo />} title="Easy Returns" description="30-day money back guarantee" />
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href="/products" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
      <div className="text-4xl mb-4 text-teal-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-teal-100">{description}</p>
    </div>
  );
}

export default Hero;

