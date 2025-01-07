import Image from 'next/image';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-teal-900 to-emerald-900 text-white min-h-screen">
      {/* Contact Hero Section */}
      <div className="relative h-96 bg-cover bg-center">
        <Image
          src="/images/contact.jpg"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-teal-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg border-b-4 border-teal-400 pb-2">
            Contact Us
          </h1>
        </div>
      </div>

      {/* We are here to help you Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-6 animate-pulse">
          We Are Here to Help You
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Our expert team is ready to assist with any inquiries regarding our electronics and services.
        </p>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Sales", description: "Need assistance with electronics inquiries? Our sales team is ready to help.", phone: "+1 234 567 89", email: "sales@electronicsstore.com" },
            { title: "Complaints", description: "Have an issue? We're here to resolve your complaints efficiently.", phone: "+1 234 567 89", email: "complaints@electronicsstore.com" },
            { title: "Marketing", description: "Explore partnership opportunities with our marketing team.", phone: "+1 234 567 89", email: "marketing@electronicsstore.com" },
            { title: "Returns", description: "Need help with returns? Our team ensures a seamless return process.", phone: "+1 234 567 89", email: "returns@electronicsstore.com" },
          ].map((service, index) => (
            <div key={index} className="bg-teal-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <div className="text-gray-300">
                <p>Phone: <a href={`tel:${service.phone}`} className="text-teal-400 hover:underline">{service.phone}</a></p>
                <p>Email: <a href={`mailto:${service.email}`} className="text-teal-400 hover:underline">{service.email}</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section: Heading and Text */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-teal-400 mb-6">
              You Tell Us, We Listen
            </h2>
            <p className="text-lg text-gray-300">
              Reach out to our customer support team for any inquiries, feedback, or issues. We&apos;re here to help!
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full lg:w-1/2 bg-teal-900 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-extrabold text-teal-400 mb-6">
              We&apos;d Love to Hear From You!
            </h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-emerald-800 border border-emerald-700 rounded-lg mt-2 focus:ring-2 focus:ring-teal-400 text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-emerald-800 border border-emerald-700 rounded-lg mt-2 focus:ring-2 focus:ring-teal-400 text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 bg-emerald-800 border border-emerald-700 rounded-lg mt-2 focus:ring-2 focus:ring-teal-400 text-white"
                  placeholder="Write your message"
                  rows={6}
                ></textarea>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-400 text-teal-900 font-semibold rounded-lg hover:bg-teal-300 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

