import { useState, useMemo } from "react";
import { Grid, List, Search, Phone, MessageSquare, Mail, MapPin, Download, ArrowRight, ShieldCheck } from "lucide-react";
import { contactsData } from "../data/contactsData";
import { downloadVCF } from "../utils/vcfHelper";

export default function ContactDirectory({ onSelectProfile }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'

  const filteredContacts = useMemo(() => {
    return contactsData.filter((contact) => {
      const q = searchQuery.toLowerCase();
      return (
        contact.name.toLowerCase().includes(q) ||
        contact.designation.toLowerCase().includes(q) ||
        contact.location.toLowerCase().includes(q) ||
        contact.phone.includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <section id="directory" className="py-16 bg-gray-50/50 border-y border-gray-200/50 relative no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="bg-emerald-50 border border-emerald-200/50 text-brand-emerald text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            Staff &amp; Franchise Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-2 flex items-center justify-center gap-2">
            📒 Thyrocare Contact Directory
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Find and connect with Thyrocare representatives, collection center managers, and certified home phlebotomists.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="glass-panel p-4 rounded-3xl shadow-md border border-white mb-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, designation, phone, or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-emerald-100/50 transition-all placeholder:text-gray-400 text-brand-charcoal"
            />
          </div>

          {/* Grid/List Toggle */}
          <div className="flex items-center space-x-1.5 bg-gray-100/80 p-1 rounded-2xl border border-gray-200/20 shrink-0">
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 rounded-xl transition-all ${
                viewType === "grid" ? "bg-white text-brand-emerald shadow-sm" : "text-gray-400 hover:text-brand-charcoal"
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-2 rounded-xl transition-all ${
                viewType === "list" ? "bg-white text-brand-emerald shadow-sm" : "text-gray-400 hover:text-brand-charcoal"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Directory Listings */}
        {filteredContacts.length === 0 ? (
          <div className="text-center py-12 max-w-md mx-auto bg-white border border-gray-200/50 rounded-3xl shadow-sm">
            <p className="text-gray-400 text-2xl mb-2">🔍</p>
            <h4 className="text-brand-charcoal font-bold text-base">No Contacts Found</h4>
            <p className="text-gray-400 text-xs mt-1">Try refining your query or search terms.</p>
          </div>
        ) : viewType === "grid" ? (
          /* Grid Card View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-[32px] border border-gray-150/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Visual Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-emerald/10 group-hover:bg-brand-emerald transition-colors" />

                <div>
                  {/* Bio Info Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    {contact.avatar ? (
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-16 h-16 rounded-2xl object-cover border border-gray-100 bg-gray-50 shrink-0 shadow-sm"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-heading font-black text-lg shrink-0 shadow-sm border border-brand-emerald/20">
                        {contact.name.split(" ").filter(Boolean).map(n => n[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="font-heading font-black text-base text-brand-charcoal tracking-tight truncate flex items-center gap-1 leading-tight">
                        {contact.name}
                      </h4>
                      <p className="text-[11px] font-extrabold text-brand-emerald mt-1 tracking-wide uppercase">
                        {contact.designation}
                      </p>
                      <p className="text-[11px] font-bold text-gray-450 mt-0.5 flex items-center">
                        <MapPin className="w-3 h-3 mr-1 shrink-0 text-brand-gold" />
                        {contact.location}
                      </p>
                    </div>
                  </div>

                  {/* Core Contact info detail list */}
                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-5">
                    <div className="flex items-center text-xs text-brand-charcoal/80 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-brand-emerald mr-2 shrink-0" />
                      <span>{contact.phone}</span>
                    </div>
                    {contact.email && (
                      <div className="flex items-center text-xs text-brand-charcoal/80 font-semibold truncate">
                        <Mail className="w-3.5 h-3.5 text-brand-emerald mr-2 shrink-0" />
                        <span className="truncate">{contact.email}</span>
                      </div>
                    )}
                    {contact.address && (
                      <div className="flex items-start text-xs text-brand-charcoal/80 font-semibold mt-2 pt-2 border-t border-gray-100">
                        <MapPin className="w-3.5 h-3.5 text-brand-emerald mr-2 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{contact.address}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA Actions buttons */}
                <div className="space-y-2.5 pt-3 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center justify-center space-x-1 border border-gray-200 hover:border-brand-emerald bg-white text-xs font-extrabold text-brand-charcoal hover:text-brand-emerald py-2.5 rounded-xl transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/91${contact.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold py-2.5 rounded-xl transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => downloadVCF(contact)}
                      className="flex items-center justify-center space-x-1 border border-gray-200 bg-gray-55 hover:bg-gray-100 text-xs font-extrabold text-brand-charcoal py-2.5 rounded-xl transition-all"
                      title="Download contact card (VCF)"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Save Card</span>
                    </button>
                    {contact.mapLink ? (
                      <a
                        href={contact.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1 bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-extrabold py-2.5 rounded-xl transition-all"
                      >
                        <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Google Maps</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => onSelectProfile(contact)}
                        className="flex items-center justify-center space-x-1 bg-brand-charcoal hover:bg-brand-emerald text-white text-xs font-extrabold py-2.5 rounded-xl transition-all"
                      >
                        <span>View Profile</span>
                        <ArrowRight className="w-3 h-3 ml-0.5" />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* List Row View */
          <div className="max-w-5xl mx-auto space-y-3">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl border border-gray-150/60 p-4 shadow-sm hover:shadow-md hover:border-brand-emerald/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                {/* Details (Left) */}
                <div className="flex items-center space-x-4 min-w-0">
                  {contact.avatar ? (
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-xl object-cover border border-gray-150 bg-gray-50 shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-heading font-black text-sm shrink-0 border border-brand-emerald/20">
                      {contact.name.split(" ").filter(Boolean).map(n => n[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h4 className="font-heading font-black text-sm sm:text-base text-brand-charcoal tracking-tight truncate leading-tight">
                      {contact.name}
                    </h4>
                    <p className="text-[11px] font-extrabold text-brand-emerald uppercase tracking-wider mt-0.5">
                      {contact.designation} &bull; <span className="text-gray-400 capitalize">{contact.location}</span>
                    </p>
                  </div>
                </div>

                {/* Actions (Right) */}
                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto md:shrink-0 justify-end">
                  <a
                    href={`tel:${contact.phone}`}
                    className="p-2 border border-gray-200 hover:border-brand-emerald text-brand-charcoal hover:text-brand-emerald bg-white rounded-xl transition-all"
                    title="Call representative"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/91${contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all"
                    title="WhatsApp message"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => downloadVCF(contact)}
                    className="flex items-center space-x-1.5 border border-gray-200 bg-white text-xs font-bold text-brand-charcoal px-3 py-2 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Save vCard</span>
                  </button>
                  {contact.mapLink ? (
                    <a
                      href={contact.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 bg-brand-emerald hover:bg-brand-emerald-dark text-white text-xs font-extrabold px-4.5 py-2.5 rounded-xl transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Google Maps</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProfile(contact)}
                      className="flex items-center space-x-1 bg-brand-charcoal hover:bg-brand-emerald text-white text-xs font-extrabold px-4.5 py-2 rounded-xl transition-all"
                    >
                      <span>Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
