import { useState } from "react";
import { Link } from "react-router-dom";

function Enquiry() {
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
    const text =
      "Hello Thyrocare Center\n\n" +
      "Name: " +
      form.name +
      "\nPhone: " +
      form.phone +
      "\nMessage: " +
      form.message;

    const url =
      "https://wa.me/919819013891?text=" +
      encodeURIComponent(text);

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4">

      <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-[#17398d]">
          Enquiry Form
        </h1>

        <p className="text-center text-gray-500 mt-2 text-sm">
          Contact us for bookings and reports
        </p>

        <div className="mt-6 space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-2xl px-4 py-3 outline-none"
          />

          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-500 text-white py-3 rounded-2xl font-bold"
          >
            Send via WhatsApp
          </button>

          <Link
            to="/"
            className="block text-center text-blue-600 font-medium"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Enquiry;