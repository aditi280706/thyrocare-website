import { useState } from "react";
import { Link } from "react-router-dom";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendWhatsApp = () => {
    const message =
      `Hello Thyrocare Center\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Message: ${form.message}\n\n` +
      `Please contact me for booking.`;

    const url =
      "https://wa.me/919819013891?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f6fb] p-6">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Enquiry Form
        </h2>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-4"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-4"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-4"
        />

        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold"
        >
          Send via WhatsApp
        </button>

        <Link to="/" className="block text-center mt-5 text-blue-600">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}