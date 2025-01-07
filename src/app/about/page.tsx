import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-teal-900 to-emerald-900 text-gray-100 min-h-screen">
      {/* About Us Banner */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/download13.jpg')" }}>
        <div className="absolute inset-0 bg-teal-800 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white px-4 py-2 border-b-4 border-teal-400">
            About Us
          </h1>
        </div>
      </div>

      {/* Innovating the Future Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6">
              Innovating the Future of Electronics
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a cutting-edge electronics provider focused on offering the best in class technology and electronic products. From the latest gadgets to home electronics, we bring you innovation and reliability with every product. Our mission is to revolutionize the way you experience technology with unmatched customer service.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-80">
            <div 
              className="w-full h-full bg-cover bg-center rounded-lg shadow-md transform transition duration-500 hover:scale-105 border-4 border-teal-400"
              style={{ backgroundImage: "url('/images/about2.webp')" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Meet Our Experts Section */}
      <div className="bg-teal-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
            Meet Our Experts
          </h2>
          <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Our team consists of industry experts who are passionate about technology. They bring forward the knowledge and experience to deliver quality products and customer satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", image: "/images/TM1.jpg", description: "Tech visionary with an eye for emerging trends." },
              { name: "Jane Smith", image: "/images/TM2.jpg", description: "Innovation in electronics is our passion." },
              { name: "Emily Clarke", image: "/images/TM3.jpg", description: "Focused on delivering the highest quality and performance." },
              { name: "Michael Lee", image: "/images/TM4.jpg", description: "Pioneering technology for a smarter tomorrow." },
              { name: "Sarah Johnson", image: "/images/TM5.jpg", description: "Driving the future of consumer electronics." },
              { name: "Alex Brown", image: "/images/TM6.jpg", description: "Passionate about creating innovative solutions for electronics." },
            ].map((member, index) => (
              <div key={index} className="bg-emerald-700 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 border-2 border-teal-400">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-teal-400">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-400">{member.name}</h3>
                  <p className="text-gray-300 text-center mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="bg-emerald-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">
            Connect With Us <span role="img" aria-label="Connect Emoji">📲</span>
          </h2>
          <p className="text-lg text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay up to date with the latest trends and innovations in the electronics industry. Follow us on social media for more!
          </p>
          <div className="flex justify-center space-x-8">
            {[
              { icon: FaFacebook, href: "https://www.facebook.com", color: "text-blue-400 hover:text-teal-400" },
              { icon: FaTwitter, href: "https://www.twitter.com", color: "text-blue-300 hover:text-teal-400" },
              { icon: FaLinkedin, href: "https://www.linkedin.com", color: "text-blue-500 hover:text-teal-400" },
              { icon: FaInstagram, href: "https://www.instagram.com", color: "text-pink-400 hover:text-teal-400" },
            ].map((social, index) => (
              <a key={index} href={social.href} className={`${social.color} transition-colors duration-300`}>
                <social.icon className="text-4xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

