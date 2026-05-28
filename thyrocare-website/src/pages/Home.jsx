import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");

  const tests = [
    {
      name: "Aarogyam B Pro",
      image: "/images/b-pro.jpg",
      pdf: "/brochures/aarogyam-b-pro.pdf",
    },
    {
      name: "Aarogyam C Pro",
      image: "/images/c-pro.jpg",
      pdf: "/brochures/aarogyam-c-pro.pdf",
    },
    {
      name: "Aarogyam D Plus",
      image: "/images/d-plus.jpg",
      pdf: "/brochures/aarogyam-d-plus.pdf",
    },
    {
      name: "Aarogyam D Pro",
      image: "/images/d-pro.jpg",
      pdf: "/brochures/aarogyam-d-pro.pdf",
    },
    {
      name: "Purush Profile",
      image: "/images/purush.jpg",
      pdf: "/brochures/aarogyam-purush-profile.pdf",
    },
    {
      name: "Stree Profile",
      image: "/images/stree.jpg",
      pdf: "/brochures/aarogyam-stree-profile.pdf",
    },
    {
      name: "HbA1c",
      image: "/images/hbalc.jpg",
      pdf: "/brochures/hbalc.pdf",
    },
    {
      name: "Lipid Profile",
      image: "/images/lipid.jpg",
      pdf: "/brochures/lipid-profile.pdf",
    },
    {
      name: "Thyroid Profile",
      image: "/images/thyroid.jpg",
      pdf: "/brochures/thyroid-basic-profile.pdf",
    },
    {
      name: "Vitamin B12",
      image: "/images/vitamin-b12.jpg",
      pdf: "/brochures/vitamin-b12-profile.pdf",
    },
    {
      name: "Vitamin D",
      image: "/images/vitamin-d.jpg",
      pdf: "/brochures/vitamin-d-profile.pdf",
    },
  ];

  const filteredTests = tests.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 py-5">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-extrabold text-[#17398d]">
            Thyro<span className="text-red-500">care</span>
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Trusted Diagnostic Services
          </p>
        </div>

        <div className="flex gap-3">

          <a
            href="tel:9819013891"
            className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-xl"
          >
            📞
          </a>

          <a
            href="https://wa.me/919819013891"
            className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-xl"
          >
            💬
          </a>

        </div>

      </div>

      {/* HERO */}

      <div className="mt-6 rounded-[30px] overflow-hidden bg-gradient-to-r from-[#1e1b8f] via-[#2563eb] to-[#ec4899] p-7 text-white shadow-xl">

        <div className="bg-white/20 inline-block px-4 py-2 rounded-full text-sm">
          Trusted by Millions
        </div>

        <h2 className="text-4xl font-extrabold leading-tight mt-5">
          Trusted Tests.
          <br />
          Better Health.
        </h2>

        <p className="mt-4 text-white/90 text-sm leading-7">
          Home Collection • Accurate Reports • Fast Service
        </p>

        {/* BUTTONS */}

        <div className="flex gap-3 mt-7 flex-wrap">

          <a
            href="tel:9819013891"
            className="bg-white text-blue-700 px-5 py-3 rounded-2xl font-bold shadow"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919819013891"
            className="bg-[#22c55e] text-white px-5 py-3 rounded-2xl font-bold shadow"
          >
            💬 WhatsApp
          </a>

          <Link
            to="/enquiry"
            className="bg-pink-500 text-white px-5 py-3 rounded-2xl font-bold shadow"
          >
            📝 Enquiry
          </Link>

          <Link
            to="/address"
            className="bg-white/20 text-white px-5 py-3 rounded-2xl font-bold shadow"
          >
            📍 Address
          </Link>

        </div>

      </div>

      {/* SEARCH */}

      <div className="bg-white rounded-2xl p-4 mt-5 shadow flex items-center gap-3">

        <span className="text-lg">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search tests..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none bg-transparent"
        />

      </div>

      {/* TEST CARDS */}

      <div className="mt-5 space-y-5">

        {filteredTests.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[28px] overflow-hidden shadow-md"
          >

            {/* IMAGE */}

            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[240px] object-cover hover:scale-[1.02] transition-all duration-300"
              />
            </a>

            {/* CONTENT */}

            <div className="p-5">

              <h3 className="text-2xl font-bold text-gray-800">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-2 leading-7">
                Download brochure and view complete package details.
              </p>

              {/* ACTION BUTTONS */}

              <div className="flex gap-4 mt-5">

                <a
                  href={item.pdf}
                  download
                  className="flex-1 bg-blue-600 text-white py-3 rounded-2xl text-center font-semibold"
                >
                  ⬇ Download
                </a>

                <Link
                  to="/enquiry"
                  className="flex-1 border border-pink-400 text-pink-500 py-3 rounded-2xl text-center font-semibold"
                >
                  💬 Enquire
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* FEATURES */}

      <div className="grid grid-cols-2 gap-4 mt-8 mb-10">

        <div className="bg-white rounded-3xl p-5 text-center shadow">

          <div className="text-3xl">
            📄
          </div>

          <h3 className="font-bold mt-3">
            Accurate Reports
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Reliable diagnostic reports
          </p>

        </div>

        <div className="bg-white rounded-3xl p-5 text-center shadow">

          <div className="text-3xl">
            🏠
          </div>

          <h3 className="font-bold mt-3">
            Home Collection
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Sample collection at doorstep
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;