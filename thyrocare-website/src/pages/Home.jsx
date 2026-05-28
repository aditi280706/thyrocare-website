import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Search, Download } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");

  const tests = [
    {
      name: "Aarogyam B Pro",
      image: "/images/b-pro.jpg",
      file: "/brochures/aarogyam-b-pro.pdf",
    },
    {
      name: "Aarogyam C Pro",
      image: "/images/c-pro.jpg",
      file: "/brochures/aarogyam-c-pro.pdf",
    },
    {
      name: "Aarogyam D Pro",
      image: "/images/d-pro.jpg",
      file: "/brochures/aarogyam-d-pro.pdf",
    },
    {
      name: "Aarogyam D Plus",
      image: "/images/d-plus.jpg",
      file: "/brochures/aarogyam-d-plus.pdf",
    },
    {
      name: "Aarogyam Stree Profile",
      image: "/images/stree.jpg",
      file: "/brochures/aarogyam-stree-profile.pdf",
    },
    {
      name: "Aarogyam Purush Profile",
      image: "/images/purush.jpg",
      file: "/brochures/aarogyam-purush-profile.pdf",
    },
    {
      name: "Thyroid Basic Profile",
      image: "/images/thyroid.jpg",
      file: "/brochures/thyroid-basic-profile.pdf",
    },
    {
      name: "Vitamin D Profile",
      image: "/images/vitamin-d.jpg",
      file: "/brochures/vitamin-d-profile.pdf",
    },
    {
      name: "Vitamin B12 Profile",
      image: "/images/vitamin-b12.jpg",
      file: "/brochures/vitamin-b12-profile.pdf",
    },
    {
      name: "Lipid Profile",
      image: "/images/lipid.jpg",
      file: "/brochures/lipid-profile.pdf",
    },
    {
      name: "HbA1c",
      image: "/images/hba1c.jpg",
      file: "/brochures/hba1c.pdf",
    },
  ];

  const filtered = tests.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const sendWhatsApp = (name = "", phone = "", message = "") => {
    const text =
      `Hello Thyrocare Center\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Message: ${message}\n\n` +
      `Please contact me for booking.`;

    const url =
      "https://wa.me/919819013891?text=" +
      encodeURIComponent(text);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fb]">

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Thyro<span className="text-red-500">care</span>
          </h1>
          <p className="text-xs text-gray-500">Trusted Diagnostic Services</p>
        </div>

        <div className="flex gap-3">
          <a href="tel:+919819013891" className="bg-blue-100 p-3 rounded-full">
            <Phone className="text-blue-700" size={18} />
          </a>

          <a href="https://wa.me/919819013891" className="bg-green-100 p-3 rounded-full">
            <MessageCircle className="text-green-600" size={18} />
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className="mx-4 mt-4 rounded-[28px] bg-gradient-to-r from-blue-900 to-blue-600 text-white p-5">
        <h1 className="text-3xl font-bold leading-tight">
          Trusted Tests.
          <br />
          Better Health.
        </h1>

        <p className="mt-3 text-sm text-gray-200">
          Home Collection • Accurate Reports • Fast Service
        </p>

        <div className="mt-5 flex gap-3 flex-wrap">
          <a href="tel:+919819013891" className="bg-white text-blue-700 px-4 py-3 rounded-xl font-semibold text-sm">
            Call Now
          </a>

          <a href="https://wa.me/919819013891" className="bg-green-500 px-4 py-3 rounded-xl font-semibold text-sm">
            WhatsApp
          </a>

          <Link to="/enquiry" className="bg-pink-500 px-4 py-3 rounded-xl font-semibold text-sm">
            Enquiry
          </Link>
        </div>
      </div>

      {/* SEARCH */}
      <div className="p-4">
        <div className="bg-white rounded-[28px] px-4 py-2.5 flex items-center shadow-sm">
          <Search className="text-gray-400 mr-3" size={18} />

          <input
            type="text"
            placeholder="Search tests..."
            className="outline-none flex-1 bg-transparent"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TEST CARDS */}
      <div className="px-4 pb-6 grid grid-cols-1 gap-5">
        {filtered.map((t, i) => (
          <div key={i} className="bg-white rounded-[28px] overflow-hidden shadow-sm">
            
            <img src={t.image} alt={t.name} className="w-full h-48 object-cover" />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">{t.name}</h2>

              <p className="text-sm text-gray-500 mt-1">
                View package details, test parameters and pricing.
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href={t.file}
                  download
                  className="flex-1 bg-blue-600 text-white py-2.5 rounded-2xl flex items-center justify-center gap-2 font-semibold"
                >
                  <Download size={18} />
                  Download
                </a>

                <Link
                  to="/enquiry"
                  className="flex-1 border border-pink-400 text-pink-500 py-2.5 rounded-2xl text-center font-semibold"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QUICK ENQUIRY FORM */}
      <div className="px-4 pb-10">
        <div className="bg-white rounded-[30px] p-5 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800">Quick Enquiry</h2>

          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.target);

              const name = formData.get("name");
              const phone = formData.get("phone");
              const message = formData.get("message");

              if (!name || !phone || !message) {
                alert("Please fill all fields");
                return;
              }

              sendWhatsApp(name, phone, message);
              e.target.reset();
            }}
          >
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full border rounded-2xl p-4 outline-none"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full border rounded-2xl p-4 outline-none"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your enquiry..."
              className="w-full border rounded-2xl p-4 outline-none"
            />

            <button className="w-full bg-black text-white py-4 rounded-2xl font-semibold">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
