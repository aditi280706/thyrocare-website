import { useState } from "react";
import { Link } from "react-router-dom";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const url =
      "https://wa.me/919819013891?text=" +
      "Hello Thyrocare Center%0A%0A" +
      "Name: " + form.name + "%0A" +
      "Phone: " + form.phone + "%0A" +
      "Message: " + form.message + "%0A%0A" +
      "Please contact me for booking.";

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fb] p-6">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Enquiry Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl p-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold"
        >
          Send via WhatsApp
        </button>

        <Link
          to="/"
          className="block text-center mt-5 text-blue-600 font-medium"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}