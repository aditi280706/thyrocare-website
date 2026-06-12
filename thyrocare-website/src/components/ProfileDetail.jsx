import { useState } from "react";
import { X, Phone, MessageSquare, Mail, MapPin, Download, Share2, Award, Heart, Check } from "lucide-react";
import { downloadVCF } from "../utils/vcfHelper";

export default function ProfileDetail({ isOpen, onClose, contact }) {
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen || !contact) return null;

  const handleShareProfile = () => {
    const profileUrl = `${window.location.origin}/#profile-${contact.id}`;
    if (navigator.share) {
      navigator.share({
        title: `${contact.name} - Thyrocare Mulund West`,
        text: `Connect with ${contact.name} (${contact.designation}) at Thyrocare Mulund West.`,
        url: profileUrl,
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(profileUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4 no-print animate-fade-in-up">
      <div className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col max-h-[90vh]">
        
        {/* Header Hero Banner (Colored) */}
        <div className="bg-gradient-to-r from-brand-emerald to-brand-emerald-dark text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all"
            aria-label="Close profile"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="bg-brand-gold text-brand-charcoal text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-inner inline-block mb-3.5">
            Verified Professional
          </span>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {contact.avatar ? (
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-24 h-24 rounded-3xl object-cover border-2 border-white/30 bg-white/10 shadow-md shrink-0"
              />
            ) : (
              <div className="w-24 h-24 rounded-3xl bg-white/10 border-2 border-white/20 text-white flex items-center justify-center font-heading font-black text-2xl shrink-0 shadow-md">
                {contact.name.split(" ").filter(Boolean).map(n => n[0]).join("").slice(0, 2)}
              </div>
            )}
            <div className="text-center sm:text-left min-w-0">
              <h3 className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                {contact.name}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm font-extrabold uppercase tracking-widest mt-1.5">
                {contact.designation}
              </p>
              <p className="text-white/70 text-xs mt-1 font-bold flex items-center justify-center sm:justify-start">
                <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-brand-gold" />
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          {/* About / Bio */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
              <Award className="w-3.5 h-3.5 text-brand-emerald mr-1.5" />
              Professional Biography
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              {contact.bio || `${contact.name} is a dedicated member of the Thyrocare Mulund West clinical diagnostics team, ensuring rapid report turnarounds and high-quality diagnostics services.`}
            </p>
          </div>

          {/* Quick Contact parameters */}
          <div className="space-y-4 border-t border-gray-100 pt-5">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center mb-1">
              <Heart className="w-3.5 h-3.5 text-brand-emerald mr-1.5" />
              Direct Communication channels
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone */}
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-3 border border-gray-150 p-4.5 rounded-2xl bg-gray-50 hover:bg-gray-100/50 hover:border-brand-emerald/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-gray-400 uppercase block tracking-wider">Voice Call</span>
                  <span className="text-sm font-extrabold text-brand-charcoal truncate block">{contact.phone}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/91${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 border border-gray-150 p-4.5 rounded-2xl bg-gray-50 hover:bg-gray-100/50 hover:border-brand-emerald/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-gray-400 uppercase block tracking-wider">WhatsApp chat</span>
                  <span className="text-sm font-extrabold text-brand-charcoal truncate block">Instant Message</span>
                </div>
              </a>

              {/* Email */}
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-3 border border-gray-150 p-4.5 rounded-2xl bg-gray-50 hover:bg-gray-100/50 hover:border-brand-emerald/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block tracking-wider">Email Address</span>
                    <span className="text-sm font-extrabold text-brand-charcoal truncate block">{contact.email}</span>
                  </div>
                </a>
              )}

              {/* Lab Address */}
              <div className="flex items-center space-x-3 border border-gray-150 p-4.5 rounded-2xl bg-gray-50 col-span-1 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-gray-400 uppercase block tracking-wider">Office Address</span>
                  <span className="text-xs font-semibold text-brand-charcoal leading-relaxed block">
                    1A, Om Gajanan CHS, JN Road, Mulund West, Mumbai - 400080
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
          <button
            onClick={() => downloadVCF(contact)}
            className="flex items-center justify-center space-x-2 bg-brand-charcoal hover:bg-brand-emerald text-white px-6 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download VCF Contact Card</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareProfile}
              className="flex items-center justify-center space-x-2 border border-gray-300 bg-white text-brand-charcoal hover:bg-gray-100 px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-sm transition-all relative"
            >
              {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-brand-emerald" />}
              <span>Share Profile</span>
              {isCopied && (
                <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 bg-emerald-600 text-white text-[10px] px-2.5 py-1 rounded font-bold whitespace-nowrap shadow-md">
                  Profile Link Copied!
                </span>
              )}
            </button>
            <button
              onClick={onClose}
              className="flex-grow sm:flex-grow-0 border border-gray-250 bg-white text-gray-500 hover:text-brand-charcoal px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
