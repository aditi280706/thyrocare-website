export default function Address() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 py-6">

      {/* HEADER */}

      <div className="bg-gradient-to-r from-[#1e1b8f] via-[#2563eb] to-[#ec4899] rounded-[30px] p-7 text-white shadow-xl">

        <h1 className="text-4xl font-extrabold">
          Visit Our Center
        </h1>

        <p className="mt-3 text-white/90 leading-7">
          Thyrocare Diagnostic Services
        </p>

      </div>

      {/* ADDRESS CARD */}

      <div className="bg-white rounded-[28px] shadow-md p-6 mt-6">

        <div className="text-5xl">
          📍
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Address
        </h2>

        <p className="text-gray-600 leading-8 mt-4 text-lg">
          1A, Om Gajanan CHS,
          <br />
          JN Road,
          <br />
          Near Aparna Hospital & Pratap Palace,
          <br />
          Mulund West,
          <br />
          Mumbai - 400080
        </p>

        {/* BUTTONS */}

        <div className="flex flex-col gap-4 mt-8">

          <a
            href="https://share.google/31nwM6LtXCiDHpx68"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-4 rounded-2xl text-center font-bold text-lg"
          >
            📍 Open in Google Maps
          </a>

          <a
            href="tel:9819013891"
            className="bg-green-500 text-white py-4 rounded-2xl text-center font-bold text-lg"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919819013891"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white py-4 rounded-2xl text-center font-bold text-lg"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}