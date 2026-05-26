import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");

  const tests = [
    { name: "Aarogyam B Pro", file: "/brochures/aarogyam-b-pro.pdf" },
    { name: "Aarogyam C Pro", file: "/brochures/aarogyam-c-pro.pdf" },
    { name: "Aarogyam D Pro", file: "/brochures/aarogyam-d-pro.pdf" },
    { name: "Aarogyam D Plus", file: "/brochures/aarogyam-d-plus.pdf" },
    { name: "Aarogyam Stree Profile", file: "/brochures/aarogyam-stree-profile.pdf" },
    { name: "Aarogyam Purush Profile", file: "/brochures/aarogyam-purush-profile.pdf" },
    { name: "Thyroid Basic Profile", file: "/brochures/thyroid-basic-profile.pdf" },
    { name: "Vitamin D Profile", file: "/brochures/vitamin-d-profile.pdf" },
    { name: "Vitamin B12 Profile", file: "/brochures/vitamin-b12-profile.pdf" },
    { name: "Lipid Profile", file: "/brochures/lipid-profile.pdf" },
    { name: "HbA1c", file: "/brochures/hba1c.pdf" }
  ];

  const filtered = tests.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">
          Thyrocare Provider Services
        </h1>

        <p className="mt-2 text-lg">
          Trusted Blood Tests • Home Collection • Fast Reports
        </p>

        <div className="mt-5 flex justify-center gap-3 flex-wrap">
          <a
            href="tel:+919819013891"
            className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919819013891"
            className="bg-green-500 px-5 py-2 rounded-full font-semibold text-white"
          >
            💬 WhatsApp
          </a>

          <Link
            to="/enquiry"
            className="bg-black px-5 py-2 rounded-full text-white"
          >
            🧾 Enquiry
          </Link>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="p-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search tests (Thyroid, Vitamin, Lipid...)"
          className="w-full p-3 border rounded-xl shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TEST CARDS */}
      <div className="px-6 pb-10 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {filtered.map((t, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-3">
              {t.name}
            </h2>

            <a
              href={t.file}
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
            >
              Download Brochure
            </a>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="bg-white border-t p-6 text-center text-gray-600">
        <p>📍 Mulund, Mumbai | Home Sample Collection Available</p>
        <p>© Thyrocare Diagnostic Center</p>
      </div>

    </div>
  );
}