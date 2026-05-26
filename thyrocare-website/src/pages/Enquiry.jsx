import { useState } from "react";
import { Link } from "react-router-dom";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white p-6 rounded shadow w-full max-w-md">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Enquiry Form
        </h2>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          Send via WhatsApp
        </button>

        <Link to="/" className="block text-center mt-4 text-blue-600">
          Back to Home
        </Link>

      </div>

    </div>
  );
}