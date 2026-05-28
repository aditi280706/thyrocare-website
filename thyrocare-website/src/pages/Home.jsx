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

      {/* BUSINESS CARD */}

      <div className="bg-white rounded-[32px] p-5 shadow-lg mb-6">

        <div className="flex gap-4 items-center">

          <img
         src="/images/logo.jpg"
         alt="Thyrocare"
         className="w-28 h-28 object-contain rounded-2xl border p-2 bg-white"
         />

          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Thyrocare
            </h1>

            <div className="w-20 h-[2px] bg-pink-300 mt-2 mb-3 rounded-full"></div>

            <p className="text-xl text-gray-700 font-medium">
              Mr. Dinesh Prajapati
            </p>

          </div>

        </div>

        {/* SAVE CONTACT */}

        <button
          className="mt-6 w-full bg-[#1f1f1f] text-white py-4 rounded-2xl flex items-center justify-center text-lg font-semibold"
        >
          📥 Add to Phone Book
        </button>

        {/* CONTACTS */}

        <div className="mt-8 space-y-5">

          <a
            href="tel:9819013891"
            className="flex items-center gap-4 border border-pink-200 rounded-full px-4 py-4 bg-white"
          >
            <div className="w-14 h-14 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center text-2xl">
              📞
            </div>

            <div className="text-gray-700 text-lg">
              9819013891 / 9867119941
            </div>
          </a>

          <a
            href="mailto:prajapatid158@gmail.com"
            className="flex items-center gap-4 border border-pink-200 rounded-full px-4 py-4 bg-white"
          >
            <div className="w-14 h-14 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center text-2xl">
              ✉️
            </div>

            <div className="text-gray-700 text-[14px] break-all">
              prajapatid158@gmail.com
            </div>
          </a>

          <a
            href="https://wa.me/919819013891"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-pink-200 rounded-full px-4 py-4 bg-white"
          >
            <div className="w-14 h-14 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center text-2xl">
              💬
            </div>

            <div className="text-gray-700 text-lg">
              WhatsApp Chat
            </div>
          </a>

          <a
            href="https://share.google/31nwM6LtXCiDHpx68"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 border border-pink-200 rounded-[30px] px-4 py-5 bg-white"
          >
            <div className="w-14 h-14 rounded-full bg-[#1f1f1f] text-white flex items-center justify-center text-2xl shrink-0">
              📍
            </div>

            <div className="text-gray-700 leading-8 text-[15px]">
              1A, Om Gajanan CHS,<br />
              JN Road, Near Aparna Hospital<br />
              & Pratap Palace,<br />
              Mulund West, Mumbai - 400080
            </div>

          </a>

        </div>

      </div>

      {/* HERO */}

      <div className="rounded-[30px] overflow-hidden bg-gradient-to-r from-[#1e1b8f] via-[#2563eb] to-[#ec4899] p-7 text-white shadow-xl">

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

      {/* TEST LIST */}

      <div className="mt-5 space-y-5">

        {filteredTests.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[28px] overflow-hidden shadow-md"
          >

            {/* CLICK IMAGE */}

            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-all duration-300"
              />
            </a>

            <div className="p-5">

              <h3 className="text-2xl font-bold text-gray-800">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-2 leading-7">
                Download brochure and view complete package details.
              </p>

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