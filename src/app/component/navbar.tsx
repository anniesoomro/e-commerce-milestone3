"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = []; // This should be replaced with actual cart data

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/download1.png"
            alt="TechStore Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-teal-300">TechStore</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">Home</Link>
          <Link href="/product">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Cart and User Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-teal-300 transition-colors duration-300" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <div className="hidden md:block space-x-2">
            <Link href="/login" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Log In
            </Link>
            <Link href="/signup" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-800 p-4">
          <div className="flex flex-col space-y-4">
            <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink href="/products" onClick={toggleMenu}>Products</NavLink>
            <NavLink href="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>
            <Link href="/login" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-center">
              Log In
            </Link>
            <Link href="/signup" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <Link href={href} className="text-white hover:text-teal-300 transition-colors duration-300" onClick={onClick}>
      {children}
    </Link>
  );
}

export default Navbar;

