import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, User, Phone, FileText, ArrowLeft } from "lucide-react";

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
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    const text =
      `*THYROCARE MULUND WEST - GENERAL ENQUIRY*\n\n` +
      `*Patient Name:* ${form.name}\n` +
      `*Mobile Number:* ${form.phone}\n` +
      `*Query/Message:* ${form.message}\n\n` +
      `_Please get in touch with me. Thank you!_`;

    const url = `https://wa.me/919819013891?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center px-4 py-8 no-print">
      <div className="bg-white p-8 sm:p-10 rounded-[36px] shadow-xl border border-gray-150/70 w-full max-w-md relative overflow-hidden animate-fade-in-up">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="images/logo.jpg"
            alt="Thyrocare Mulund West"
            className="h-14 w-auto rounded-xl object-contain shadow-md mb-3"
          />
          <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
            <p className="text-[9px] font-black text-brand-emerald uppercase tracking-widest">
              Mulund West Branch
            </p>
          </div>
          <p className="text-xs font-bold text-gray-500 mt-2.5">
            General Booking &amp; Support Enquiry
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center">
              <User className="w-3.5 h-3.5 mr-1 text-brand-emerald" />
              Your Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1 text-brand-emerald" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center">
              <FileText className="w-3.5 h-3.5 mr-1 text-brand-emerald" />
              Your Query / Message
            </label>
            <textarea
              name="message"
              placeholder="Describe what tests or profiles you would like to book..."
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
            />
          </div>

          {/* Action Submit */}
          <button
            onClick={sendWhatsApp}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99] mt-6"
          >
            <MessageSquare className="w-4.5 h-4.5" />
            <span>Send Enquiry to WhatsApp</span>
          </button>

          {/* Back button */}
          <div className="pt-4 text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-1 text-xs font-bold text-gray-400 hover:text-brand-emerald transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to home</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Enquiry;