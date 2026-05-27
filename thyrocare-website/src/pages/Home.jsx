import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Phone,
  MessageCircle,
  Search,
  Download,
  HeartPulse,
  Shield,
  Droplets,
  Activity,
  TestTube2,
  UserRound,
} from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");

  const tests = [
    {
      name: "Aarogyam B Pro",
      desc: "Comprehensive wellness blood test",
      file: "/brochures/aarogyam-b-pro.pdf",
      icon: <TestTube2 className="text-violet-500" size={24} />,
    },

    {
      name: "Aarogyam C Pro",
      desc: "Advanced cardiac risk assessment",
      file: "/brochures/aarogyam-c-pro.pdf",
      icon: <HeartPulse className="text-green-500" size={24} />,
    },

    {
      name: "Aarogyam D Pro",
      desc: "Complete diabetes screening profile",
      file: "/brochures/aarogyam-d-pro.pdf",
      icon: <Shield className="text-blue-500" size={24} />,
    },

    {
      name: "Aarogyam D Plus",
      desc: "Diabetes & heart risk profile",
      file: "/brochures/aarogyam-d-plus.pdf",
      icon: <Droplets className="text-orange-500" size={24} />,
    },

    {
      name: "Aarogyam Stree Profile",
      desc: "Essential health check for women",
      file: "/brochures/aarogyam-stree-profile.pdf",
      icon: <Activity className="text-pink-500" size={24} />,
    },

    {
      name: "Aarogyam Purush Profile",
      desc: "Complete health check for men",
      file: "/brochures/aarogyam-purush-profile.pdf",
      icon: <UserRound className="text-purple-500" size={24} />,
    },

    {
      name: "Thyroid Basic Profile",
      desc: "Basic thyroid screening package",
      file: "/brochures/thyroid-basic-profile.pdf",
      icon: <Shield className="text-cyan-500" size={24} />,
    },

    {
      name: "Vitamin D Profile",
      desc: "Vitamin D deficiency screening",
      file: "/brochures/vitamin-d-profile.pdf",
      icon: <Droplets className="text-yellow-500" size={24} />,
    },

    {
      name: "Vitamin B12 Profile",
      desc: "Vitamin B12 health assessment",
      file: "/brochures/vitamin-b12-profile.pdf",
      icon: <Activity className="text-red-500" size={24} />,
    },

    {
      name: "Lipid Profile",
      desc: "Cholesterol and heart health test",
      file: "/brochures/lipid-profile.pdf",
      icon: <HeartPulse className="text-indigo-500" size={24} />,
    },

    {
      name: "HbA1c",
      desc: "Diabetes blood sugar monitoring",
      file: "/brochures/hba1c.pdf",
      icon: <TestTube2 className="text-emerald-500" size={24} />,
    },
  ];

  const filtered = tests.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f6fb]">

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 z-50">

        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Thyro<span className="text-red-500">care</span>
          </h1>

          <p className="text-xs text-gray-500">
            Tests you can trust
          </p>
        </div>

        <div className="flex items-center gap-2">

          <a
            href="tel:+919819013891"
            className="bg-blue-100 p-2.5 rounded-full"
          >
            <Phone className="text-blue-700" size={18} />
          </a>

          <a
            href="https://wa.me/919819013891"
            className="bg-green-100 p-2.5 rounded-full"
          >
            <MessageCircle className="text-green-600" size={18} />
          </a>

        </div>

      </div>

      {/* HERO */}
      <div className="mx-4 mt-4 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 to-blue-600 text-white p-5">

        <div className="bg-white/20 inline-block px-3 py-1 rounded-full text-xs mb-3">
          Trusted by Millions
        </div>

        <h1 className="text-3xl font-bold leading-tight">
          Trusted Tests.
          <br />
          Better <span className="text-pink-400">Health.</span>
        </h1>

        <p className="mt-3 text-sm text-gray-200">
          Accurate Reports • Home Collection • Fast Results
        </p>

        <div className="mt-5 flex gap-2 flex-wrap">

          <a
            href="tel:+919819013891"
            className="bg-white text-blue-700 px-4 py-2.5 rounded-xl font-semibold flex items-center gap-2 text-sm"
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href="https://wa.me/919819013891"
            className="bg-green-500 px-4 py-2.5 rounded-xl font-semibold flex items-center gap-2 text-sm"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <Link
            to="/enquiry"
            className="bg-pink-500 px-4 py-2.5 rounded-xl font-semibold text-sm"
          >
            Enquiry
          </Link>

        </div>

      </div>

      {/* SEARCH */}
      <div className="p-4">

        <div className="bg-white rounded-2xl px-4 py-3 flex items-center shadow-sm">

          <Search className="text-gray-400 mr-3" size={18} />

          <input
            type="text"
            placeholder="Search tests..."
            className="outline-none flex-1 bg-transparent text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* TEST LIST */}
      <div className="px-4 pb-8 space-y-3">

        {filtered.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-3 shadow-sm flex items-center justify-between gap-3"
          >

            <div className="flex items-center gap-3">

              <div className="bg-gray-100 p-3 rounded-xl">
                {t.icon}
              </div>

              <div>
                <h2 className="font-bold text-base text-gray-800">
                  {t.name}
                </h2>

                <p className="text-xs text-gray-500 max-w-[140px]">
                  {t.desc}
                </p>
              </div>

            </div>

            <div className="flex flex-col gap-2 items-end">

              <a
                href={t.file}
                download
                className="border border-violet-400 text-violet-600 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1"
              >
                <Download size={14} />
                Download
              </a>

              <Link
                to="/enquiry"
                className="border border-pink-400 text-pink-500 px-3 py-1.5 rounded-lg text-xs font-semibold"
              >
                Enquire
              </Link>

            </div>

          </div>
        ))}

      </div>

      {/* FEATURES */}
      <div className="bg-white rounded-t-3xl p-5 grid grid-cols-2 gap-4 text-center">

        <div>
          <h3 className="font-semibold text-sm">
            Accurate Reports
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            100% reliable results
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            Home Collection
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Sample collection at home
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            Fast Reports
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Reports on time
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            Expert Support
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            We are here to help
          </p>
        </div>

      </div>

    </div>
  );
}