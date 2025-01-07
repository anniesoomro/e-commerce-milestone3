import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-emerald-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">About Us</h3>
            <p className="text-teal-100 text-sm leading-relaxed">
              We are a premier eCommerce platform dedicated to providing the latest electronics and cutting-edge technology. Our mission is to bring you the best in consumer electronics with unbeatable prices and unmatched service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center"><span className="mr-2">→</span>Home</Link></li>
              <li><Link href="/about" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center"><span className="mr-2">→</span>About</Link></li>
              <li><Link href="/contact" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center"><span className="mr-2">→</span>Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center"><span className="mr-2">→</span>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Contact Info</h3>
            <p className="text-teal-100 text-sm flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@techstore.com" className="hover:text-white transition-colors duration-300">info@techstore.com</a>
            </p>
            <p className="text-teal-100 text-sm flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">+123 456 7890</a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-teal-600 text-center">
          <p className="text-teal-300 text-sm">
            &copy; {new Date().getFullYear()} TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

