import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  const tests = [
    {
      name: "Aarogyam B Pro",
      desc: "Download brochure and view complete package details.",
      image: "/images/test1.jpg",
      pdf: "/brochures/aarogyam-b-pro.pdf",
    },
    {
      name: "Aarogyam C Pro",
      desc: "Download brochure and view complete package details.",
      image: "/images/test2.jpg",
      pdf: "/brochures/aarogyam-c-pro.pdf",
    },
    {
      name: "Aarogyam D Pro",
      desc: "Download brochure and view complete package details.",
      image: "/images/test3.jpg",
      pdf: "/brochures/aarogyam-d-pro.pdf",
    },
    {
      name: "Thyroid Profile",
      desc: "Complete thyroid hormone testing package.",
      image: "/images/test4.jpg",
      pdf: "/brochures/thyroid-profile.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f9]">

      {/* TOP BAR */}

      <div className="bg-white px-5 pt-5 pb-4 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-[34px] font-extrabold leading-none text-[#17398d]">
              Thyro<span className="text-red-500">care</span>
            </h1>

            <p className="text-gray-500 text-sm mt-2">
              Trusted Diagnostic Services
            </p>

          </div>

          <div className="flex gap-3">

            <a
              href="tel:+919819013891"
              className="w-14 h-14 rounded-full bg-[#eef3ff] flex items-center justify-center text-2xl shadow-sm"
            >
              📞
            </a>

            <a
              href="https://wa.me/919819013891"
              className="w-14 h-14 rounded-full bg-[#ecfff1] flex items-center justify-center text-2xl shadow-sm"
            >
              💬
            </a>

          </div>

        </div>

      </div>

      {/* HERO */}

      <div className="px-4 mt-5">

        <div className="rounded-[30px] overflow-hidden bg-gradient-to-r from-[#1b1c85] to-[#2164ff] p-7 text-white shadow-xl">

          <h2 className="text-[28px] leading-[38px] font-extrabold">
            Trusted Tests.
            <br />
            Better Health.
          </h2>

          <p className="text-white/90 mt-4 leading-7">
            Home Collection • Accurate Reports • Fast Service
          </p>

          <div className="flex gap-3 mt-7">

            <a
              href="tel:+919819013891"
              className="bg-white text-[#2563eb] px-5 py-3 rounded-2xl font-bold text-sm shadow-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919819013891"
              className="bg-[#22c55e] text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-lg"
            >
              WhatsApp
            </a>

            <button className="bg-[#ff3b82] text-white px-5 py-3 rounded-2xl font-bold text-sm shadow-lg">
              Enquiry
            </button>

          </div>

        </div>

      </div>

      {/* SEARCH */}

      <div className="px-4 mt-5">

        <div className="bg-white rounded-2xl px-4 py-4 flex items-center gap-3 shadow-sm">

          <span className="text-gray-400 text-lg">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search tests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-[15px]"
          />

        </div>

      </div>

      {/* TEST LIST */}

      <div className="px-3 mt-5 pb-10 space-y-5">

        {tests
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-md"
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[210px] object-cover"
              />

              {/* CONTENT */}

              <div className="p-5">

                <h3 className="text-[18px] font-bold text-[#1f2937]">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm leading-6 mt-2">
                  {item.desc}
                </p>

                {/* BUTTONS */}

                <div className="flex gap-3 mt-6">

                  <a
                    href={item.pdf}
                    download
                    className="flex-1 bg-[#2563eb] text-white text-center py-3 rounded-2xl font-semibold shadow-lg"
                  >
                    ⬇ Download
                  </a>

                  <a
                    href="https://wa.me/919819013891"
                    className="flex-1 border border-pink-400 text-pink-500 text-center py-3 rounded-2xl font-semibold"
                  >
                    Enquire
                  </a>

                </div>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}

export default Home;