import { useState } from "react";
import bannerBgImg from "../assets/images/banner-bg.jpg";

export default function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", surname: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Banner */}
      <section
        style={{ backgroundImage: `url(${bannerBgImg})` }}
        className="bg-blue-500 bg-cover bg-center bg-no-repeat text-white pt-28 pb-24 px-6 rounded-b-[150px] text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-3">
          CONTACT US
        </h1>
        <p className="text-sm text-white/90">
          <button
            onClick={() => onNavigate("home")}
            className="hover:underline "
          >
            Home
          </button>{" "}
          &gt; Contact Us
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Box */}
          <div className="lg:col-span-6 bg-gray-100 p-10 md:p-14 rounded-[25px] text-center lg:text-left">
            <span className="text-rose-400 uppercase font-bold text-xs tracking-wider">
              CONTACT US
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-6">
              Say Hello!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS
              framework. This template is provided by TemplateMo and it is
              suitable for your gaming shop ecommerce websites. Feel free to use
              this for any purpose. Thank you.
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <h6 className="font-bold text-gray-900 mb-1">Address</h6>
                <p className="text-gray-500">
                  Sunny Isles Beach, FL 33160, United States
                </p>
              </div>
              <div>
                <h6 className="font-bold text-gray-900 mb-1">Phone</h6>
                <p className="text-gray-500">+123 456 7890</p>
              </div>
              <div>
                <h6 className="font-bold text-gray-900 mb-1">Email</h6>
                <p className="text-gray-500">lugx@contact.com</p>
              </div>
            </div>
          </div>

          {/* Right Map & Form */}
          <div className="lg:col-span-6 space-y-8">
            <div className="w-full h-72 rounded-[25px] overflow-hidden shadow-sm">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14357.075290868324!2d-80.1325069!3d25.9428712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-center lg:text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name..."
                  className="w-full bg-gray-100 border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="surname"
                  required
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Your Surname..."
                  className="w-full bg-gray-100 border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your E-mail..."
                  className="w-full bg-gray-100 border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject..."
                  className="w-full bg-gray-100 border border-gray-200 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-gray-100 border border-gray-200 rounded-[25px] p-6 text-sm focus:outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-rose-400 hover:bg-blue-500 text-white uppercase text-xs font-bold px-8 py-4 rounded-full transition duration-300 "
              >
                SEND MESSAGE NOW
              </button>

              {sent && (
                <p className="text-green-600 text-sm font-medium">
                  Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
