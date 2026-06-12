import { useState, useMemo, useEffect } from "react";
import { 
  Phone, MessageSquare, FileText, MapPin, ShieldCheck, Clock, Award, 
  Sparkles, Calendar, Search, ArrowRight, CheckCircle2, ChevronRight, 
  Briefcase, Heart, Star, CheckSquare, RefreshCw, Eye, Mail, Download
} from "lucide-react";
import { Link } from "react-router-dom";

// Data & Helpers
import { contactsData } from "../data/contactsData";
import { packagesData } from "../data/packagesData";
import { downloadVCF } from "../utils/vcfHelper";

// Rebuilt Modular Components
import Navbar from "../components/Navbar";
import ContactDirectory from "../components/ContactDirectory";
import ProfileDetail from "../components/ProfileDetail";
import BrochureSystem from "../components/BrochureSystem";
import ReviewsCarousel from "../components/ReviewsCarousel";
import FAQSection from "../components/FAQSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [packageCategory, setPackageCategory] = useState("All");
  const [activeProfile, setActiveProfile] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [brochurePackage, setBrochurePackage] = useState(null);

  // Search & Tag lists
  const popularSearches = [
    "CBC", "Vitamin D", "Vitamin B12", "Thyroid Profile", 
    "HbA1c", "Lipid Profile", "LFT", "KFT", "Dengue", 
    "Malaria", "Iron Studies"
  ];



  // Quick Enquiry Form (Embedded in home)
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", packageId: "", address: "", date: "" });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Filter package cards
  const categories = ["All", "Full Body Checkups", "Vitals & Diabetes", "Cancer Markers", "Vitamins & Minerals"];

  const filteredPackages = useMemo(() => {
    return packagesData.filter((pkg) => {
      const matchesCategory = packageCategory === "All" || pkg.categories.includes(packageCategory);
      const matchesSearch =
        searchQuery === "" ||
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [packageCategory, searchQuery]);

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleOpenBrochure = (pkg = null) => {
    setBrochurePackage(pkg);
    setIsBrochureOpen(true);
  };

  const handleSelectProfile = (contact) => {
    setActiveProfile(contact);
    setIsProfileOpen(true);
  };



  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.packageId || !bookingForm.address || !bookingForm.date) {
      alert("Please fill out all booking fields.");
      return;
    }
    const selectedPkg = packagesData.find(p => p.id === bookingForm.packageId);
    const pkgName = selectedPkg ? `${selectedPkg.name} (₹${selectedPkg.offerPrice})` : "";
    
    const text = `*THYROCARE MULUND WEST - HOME COLLECTION BOOKING*\n\n` +
      `*Patient Name:* ${bookingForm.name}\n` +
      `*Mobile Number:* ${bookingForm.phone}\n` +
      `*Selected Package:* ${pkgName}\n` +
      `*Address:* ${bookingForm.address}\n` +
      `*Preferred Date:* ${bookingForm.date}\n\n` +
      `_Please confirm my home collection request._`;

    const url = `https://wa.me/919819013891?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col antialiased">
      {/* Premium Navigation Header */}
      <Navbar 
        onOpenBrochure={() => handleOpenBrochure()} 
        onScrollTo={handleScrollTo} 
      />

      {/* Main Container */}
      <main className="flex-grow pt-24">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pb-16 pt-10 md:py-24 bg-gradient-to-br from-teal-50/70 via-white to-amber-50/40 overflow-hidden no-print">
          {/* Decorative Blur Spheres */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-10 -right-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />            <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
              {/* Centered Hero Content */}
              <div className="space-y-6 flex flex-col items-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-[11px] font-black text-brand-emerald tracking-wide uppercase animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                  <span>Authorized Thyrocare Partner &bull; Mulund West</span>
                  <span className="bg-brand-gold text-brand-charcoal px-2.5 py-0.5 rounded-full font-black text-[9px] normal-case tracking-normal">Upto 40% Off</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-brand-charcoal tracking-tight leading-tight">
                  Book Thyrocare <br />
                  <span className="text-brand-emerald">Blood Tests From Home</span>
                </h1>
                
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                  Trusted diagnostic services, NABL-accredited test parameters, safe home sample collections by expert phlebotomists, and secure digital reports delivered directly to your WhatsApp.
                </p>

                {/* Main CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => handleScrollTo("#booking")}
                    className="flex items-center space-x-2 bg-brand-emerald hover:bg-brand-emerald-dark text-white px-6 py-4.5 rounded-2xl text-sm font-extrabold transition-all shadow-lg shadow-brand-emerald/20 hover:shadow-brand-emerald/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Home Test</span>
                  </button>
                  <a
                    href="tel:9819013891"
                    className="flex items-center space-x-2 border border-gray-200 bg-white hover:bg-gray-50 text-brand-charcoal px-6 py-4.5 rounded-2xl text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Phone className="w-4 h-4 text-brand-emerald" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919819013891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4.5 rounded-2xl text-sm font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => handleOpenBrochure()}
                    className="flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-emerald text-white px-6 py-4.5 rounded-2xl text-sm font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FileText className="w-4 h-4 text-brand-gold" />
                    <span>View Brochure</span>
                  </button>
                </div>

                {/* Trust Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-6 border-t border-gray-150 max-w-lg mx-auto w-full">
                  {[
                    { icon: ShieldCheck, text: "NABL Accredited" },
                    { icon: MapPin, text: "Home Collection" },
                    { icon: Clock, text: "Digital Reports" },
                    { icon: Award, text: "Trusted By Millions" },
                    { icon: CheckCircle2, text: "Accurate Testing" },
                    { icon: RefreshCw, text: "Fast Reports" },
                  ].map((badge, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2 text-brand-charcoal/85">
                      <badge.icon className="w-4 h-4 text-brand-emerald shrink-0" />
                      <span className="text-[11px] font-black uppercase tracking-wider">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>

        {/* CONTACT DIRECTORY SECTION */}
        <ContactDirectory onSelectProfile={handleSelectProfile} />

        {/* TEST SEARCH SECTION */}
        <section className="py-16 bg-white border-b border-gray-100 no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="bg-amber-50 border border-amber-250 text-brand-gold text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                Instant Search Index
              </span>
              <h2 className="text-3xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-2">
                Pathology Test Finder
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto font-semibold">
                Type your desired test or select popular health parameters to filter our database.
              </p>
            </div>

            {/* Big Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blood test, package, or profile..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-brand-charcoal placeholder-gray-400 font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/50 transition-all text-sm"
              />
            </div>

            {/* Popular Searches */}
            <div className="max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-2">
              <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider mr-1">Popular:</span>
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    handleScrollTo("#packages");
                  }}
                  className="bg-gray-50 hover:bg-brand-emerald hover:text-white border border-gray-150 text-gray-600 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTH PACKAGES SECTION */}
        <section id="packages" className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="bg-emerald-50 border border-emerald-250 text-brand-emerald text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                Diagnostic Catalog
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-3">
                Preventive &amp; Clinical Health Packages
              </h2>
              <p className="text-gray-550 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
                Choose from comprehensive full-body Aarogyam profiles, specialized endocrine panels, cardiac risk screenings, and vitamin checkups.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto no-print">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPackageCategory(cat)}
                  className={`px-4.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all border ${
                    packageCategory === cat
                      ? "bg-brand-emerald border-brand-emerald text-white shadow-lg"
                      : "bg-white border-gray-200/80 hover:bg-gray-50 text-gray-550 hover:text-brand-charcoal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => {
                const discount = Math.round(((pkg.originalPrice - pkg.offerPrice) / pkg.originalPrice) * 100);
                return (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-[36px] border border-gray-150/70 shadow-xl shadow-gray-100/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden relative group"
                  >
                    {/* Badge */}
                    <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-1.5">
                      <span className="bg-brand-charcoal text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                        {pkg.badge}
                      </span>
                      {discount > 0 && (
                        <span className="bg-brand-emerald text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    <div>
                      {/* Image container */}
                      <div className="h-48 relative overflow-hidden bg-gray-50">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-heading font-black text-xl text-brand-charcoal group-hover:text-brand-emerald transition-colors tracking-tight leading-snug">
                          {pkg.name}
                        </h3>
                        <span className="inline-block bg-emerald-50 text-brand-emerald text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full mt-2 mb-3 border border-emerald-100/30">
                          Includes {pkg.testCount} {pkg.testCount === 1 ? "Parameter" : "Parameters"}
                        </span>
                        <p className="text-xs text-gray-500 font-semibold leading-relaxed mb-4">
                          {pkg.summary}
                        </p>

                        {/* Highlights list */}
                        <div className="space-y-2 bg-gray-50/50 border border-gray-150/50 p-4 rounded-2xl">
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Key inclusions</p>
                          {pkg.highlights.slice(0, 3).map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start text-xs text-gray-600 font-semibold">
                              <span className="text-brand-emerald mr-1.5 shrink-0">&bull;</span>
                              <span className="leading-tight">{hl}</span>
                            </div>
                          ))}
                          {pkg.highlights.length > 3 && (
                            <p className="text-[10px] text-brand-emerald font-bold mt-1">
                              + {pkg.highlights.length - 3} more sub-parameters
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price and CTAs */}
                    <div className="p-6 bg-gray-50/50 border-t border-gray-150/60 flex flex-col gap-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-2xl font-black text-brand-charcoal">₹{pkg.offerPrice}</span>
                          <span className="text-xs text-gray-400 line-through ml-2 font-bold">MRP ₹{pkg.originalPrice}</span>
                        </div>
                        <button
                          onClick={() => handleOpenBrochure(pkg)}
                          className="flex items-center space-x-1 border border-gray-200 bg-white hover:bg-gray-50 text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-xl shadow-sm text-brand-charcoal transition-all"
                        >
                          <Eye className="w-3.5 h-3.5 text-brand-emerald" />
                          <span>Brochure</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-1.5 no-print">
                        <Link
                          to="/enquiry"
                          className="flex items-center justify-center space-x-1 border border-gray-250 bg-white hover:bg-gray-100 text-brand-charcoal text-xs font-bold py-3.5 rounded-2xl transition-all"
                        >
                          <span>Enquire</span>
                        </Link>
                        <button
                          onClick={() => {
                            setBookingForm((prev) => ({ ...prev, packageId: pkg.id }));
                            handleScrollTo("#booking");
                          }}
                          className="flex items-center justify-center space-x-1 bg-brand-charcoal hover:bg-brand-emerald text-white text-xs font-extrabold py-3.5 rounded-2xl transition-all shadow-md active:scale-95 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book Now</span>
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOME SAMPLE COLLECTION TIMELINE */}
        <section className="py-20 bg-white border-y border-gray-100 no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="bg-emerald-50 border border-emerald-250 text-brand-emerald text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                How it works
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-2">
                We Come To You
              </h2>
              <p className="text-gray-550 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
                Our seamless, hygienic home sample collection timeline ensures your diagnostic journey is safe and stress-free.
              </p>
            </div>

            {/* Timeline Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
              {[
                { step: "1", title: "Book Appointment", desc: "Select test/package and fill details online or WhatsApp." },
                { step: "2", title: "Schedule Confirmation", desc: "Our coordinator contacts you to confirm the time slot." },
                { step: "3", title: "Home Visit", desc: "Certified, fully-equipped phlebotomist visits your doorstep." },
                { step: "4", title: "Sample Collection", desc: "Hygienic blood draw or sample receipt following lab guidelines." },
                { step: "5", title: "Laboratory Processing", desc: "Safe sample transfer and processing in NABL accredited labs." },
                { step: "6", title: "Digital Report Delivery", desc: "Get secure PDF reports on your WhatsApp/Email in 24 hours." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-150 p-5 rounded-3xl flex flex-col justify-between group hover:border-brand-emerald/40 hover:-translate-y-1 transition-all duration-300 relative">
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-heading font-black text-sm mb-4">
                      {item.step}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-brand-charcoal mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {idx < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 z-10 text-gray-300">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE THYROCARE */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="bg-amber-50 border border-amber-250 text-brand-gold text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-2">
                Why Choose Thyrocare Mulund West
              </h2>
              <p className="text-gray-550 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
                We combine industry-leading diagnostic technology with custom home collection protocols to deliver premium healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: ShieldCheck, title: "NABL Accredited Testing", desc: "100% reliable test results verified by certified pathologists." },
                { icon: MapPin, title: "Home Sample Collection", desc: "Hygienic draws by trained technicians right at your doorstep." },
                { icon: Award, title: "Trusted Diagnostic Brand", desc: "Thyrocare is a pioneer in wellness checkups and clinical assays." },
                { icon: Clock, title: "Digital Reports", desc: "PDF reports delivered safely to your WhatsApp/Email in 24 hours." },
                { icon: Sparkles, title: "Affordable Packages", desc: "Access comprehensive checkup panels with up to 40% discount." },
                { icon: Heart, title: "Expert Phlebotomists", desc: "Safe draws, pediatric collections, and cold-chain transport." },
                { icon: CheckSquare, title: "Advanced Technology", desc: "Fully automated tracks, advanced diagnostic software systems." },
                { icon: Briefcase, title: "Nationwide Network", desc: "Centralized processing, absolute QA metrics, and NABL standards." },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-55 border border-gray-150 p-6 rounded-3xl hover:shadow-lg hover:border-brand-emerald/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-black text-sm text-brand-charcoal mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST & STATISTICS COUNTERS */}
        <section className="py-16 bg-brand-charcoal text-white no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
              {[
                { value: "50M+", label: "Tests Processed" },
                { value: "99%", label: "Collection Success Rate" },
                { value: "24-48 Hrs", label: "Report Delivery" },
                { value: "100%", label: "Digital Reports" },
                { value: "Millions+", label: "Satisfied Customers" }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-heading font-black text-2xl sm:text-4xl text-brand-gold">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS CAROUSEL */}
        <ReviewsCarousel />

        {/* LEAD BOOKING FORM SECTION */}
        <section id="booking" className="py-20 bg-white no-print">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-8 sm:p-12 rounded-[40px] border border-gray-150/60 shadow-xl shadow-gray-100/30">
              
              {!bookingSubmitted ? (
                <>
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="bg-emerald-50 text-brand-emerald text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                      Free Home Collection
                    </span>
                    <h2 className="text-3xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-2">
                      Schedule Home Sample Collection
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold">
                      Fill out your details below. Our phlebotomist will visit your home at the scheduled time to collect samples safely.
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-450 uppercase tracking-widest mb-1.5">Patient Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter patient full name"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-450 uppercase tracking-widest mb-1.5">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          maxLength="10"
                          placeholder="Enter 10-digit mobile number"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm(p => ({ ...p, phone: e.target.value }))}
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Package Select */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-450 uppercase tracking-widest mb-1.5">Select Test / Package</label>
                        <select
                          required
                          value={bookingForm.packageId}
                          onChange={(e) => setBookingForm(p => ({ ...p, packageId: e.target.value }))}
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
                        >
                          <option value="">-- Select Package --</option>
                          {packagesData.map(p => (
                            <option key={p.id} value={p.id}>
                              {p.name} - ₹{p.offerPrice} ({p.testCount} tests)
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-450 uppercase tracking-widest mb-1.5">Preferred Date</label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm(p => ({ ...p, date: e.target.value }))}
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-450 uppercase tracking-widest mb-1.5">Home Collection Address</label>
                      <textarea
                        required
                        rows="3"
                        placeholder="Enter flat number, building name, street address, and pincode in Mumbai"
                        value={bookingForm.address}
                        onChange={(e) => setBookingForm(p => ({ ...p, address: e.target.value }))}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-100/30 text-brand-charcoal"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99]"
                    >
                      <MessageSquare className="w-4.5 h-4.5" />
                      <span>Confirm Booking &amp; Send details via WhatsApp</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 animate-fade-in-up">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-brand-charcoal mb-2">Booking Inquiry Transmitted!</h3>
                  <p className="text-xs text-gray-500 font-semibold mb-6 max-w-sm mx-auto">
                    We have redirected your details to our WhatsApp service. If the window did not open, click the button below to complete.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => {
                        setBookingSubmitted(false);
                        setBookingForm({ name: "", phone: "", packageId: "", address: "", date: "" });
                      }}
                      className="px-6 py-3.5 border border-gray-250 bg-white text-brand-charcoal font-bold rounded-xl text-xs"
                    >
                      Book Another Test
                    </button>
                    <a
                      href={`https://wa.me/919819013891?text=${encodeURIComponent(
                        `Hello, I would like to confirm my booking request under name ${bookingForm.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQSection />

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Details */}
              <div className="lg:col-span-6 space-y-6">
                <span className="bg-emerald-50 border border-emerald-250 text-brand-emerald text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
                  Visit or Connect
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-charcoal tracking-tight">
                  Thyrocare Mulund West
                </h2>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Collection Center Address</span>
                      <p className="text-sm font-semibold text-gray-600 leading-relaxed mt-1">
                        1A, Om Gajanan CHS, JN Road, Near Aparna Hospital &amp; Pratap Palace, Mulund West, Mumbai – 400080
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Direct Phone Line</span>
                      <p className="text-sm font-extrabold text-brand-charcoal mt-1">
                        +91 98190 13891 / +91 98671 19941
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Email support</span>
                      <p className="text-sm font-extrabold text-brand-charcoal mt-1">
                        prajapatid158@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3 no-print">
                  <a
                    href="tel:9819013891"
                    className="flex items-center space-x-1.5 bg-brand-emerald hover:bg-brand-emerald-dark text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919819013891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://share.google/EYQyUMQ9IoZGrqsJ2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 border border-gray-250 bg-white text-brand-charcoal px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-brand-emerald" />
                    <span>Get Directions</span>
                  </a>
                  <button
                    onClick={() => downloadVCF(contactsData[0])}
                    className="flex items-center space-x-1.5 border border-gray-250 bg-white text-brand-charcoal px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-brand-gold" />
                    <span>Save Contact</span>
                  </button>
                </div>
              </div>

              {/* Right Column Map Placeholder */}
              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg h-80 bg-gray-50">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.618641972844!2d72.95292671490288!3d19.168172987034934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b907be148f07%3A0xe54d9b23c52a0a2a!2sOm%20Gajanan%20CHS%2C%20JN%20Rd%2C%20Mulund%20West%2C%2520Mumbai%2C%2520Maharashtra%2520400080!5e0!3m2!1sen!2sin!4v1655027581109!5m2!1sen!2sin"
                  className="w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FLOATING ACTION SPEED DIAL - Locked bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 no-print">
        <a
          href="https://share.google/EYQyUMQ9IoZGrqsJ2"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white text-brand-emerald border border-gray-200 shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
          title="Get Directions"
        >
          <MapPin className="w-5 h-5" />
        </a>
        <button
          onClick={() => handleOpenBrochure()}
          className="w-12 h-12 rounded-full bg-white text-brand-gold border border-gray-200 shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
          title="View Catalog Brochure"
        >
          <FileText className="w-5 h-5" />
        </button>
        <a
          href="https://wa.me/919819013891"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
          title="WhatsApp Booking"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-white text-emerald-500" />
        </a>
        <a
          href="tel:9819013891"
          className="w-12 h-12 rounded-full bg-brand-emerald text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
          title="Call Center"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* MODALS */}

      {/* Profile Detail Modal */}
      <ProfileDetail
        isOpen={isProfileOpen}
        onClose={() => {
          setIsProfileOpen(false);
          setActiveProfile(null);
        }}
        contact={activeProfile}
      />

      {/* Brochure Viewer Modal */}
      <BrochureSystem
        isOpen={isBrochureOpen}
        onClose={() => {
          setIsBrochureOpen(false);
          setBrochurePackage(null);
        }}
        selectedPackage={brochurePackage}
      />

      {/* FOOTER */}
      <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800 text-center md:text-left">
            
            {/* Column 1 - Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald flex items-center justify-center">
                  <Heart className="w-4.5 h-4.5 text-white fill-white" />
                </div>
                <span className="font-heading font-black text-lg text-white">Thyrocare</span>
              </div>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                Authorized Thyrocare collection center serving Mulund West and Mumbai with NABL accredited pathology tests and free home draws.
              </p>
            </div>

            {/* Column 2 - Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-brand-gold uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-400">
                <li><button onClick={() => handleScrollTo("#home")} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => handleScrollTo("#packages")} className="hover:text-white transition-colors">Health Packages</button></li>
                <li><button onClick={() => handleScrollTo("#directory")} className="hover:text-white transition-colors">Staff Directory</button></li>

              </ul>
            </div>

            {/* Column 3 - Policies */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-brand-gold uppercase tracking-widest">Legal Policies</h4>
              <ul className="space-y-2 text-xs font-semibold text-gray-400">
                <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Terms &amp; Conditions</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Quality Certifications</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">NABL Accreditation</span></li>
              </ul>
            </div>

            {/* Column 4 - Social Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-brand-gold uppercase tracking-widest">Connect</h4>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                1A, Om Gajanan CHS, JN Road, Mulund West, Mumbai - 400080
              </p>
              <div className="flex justify-center md:justify-start items-center space-x-3 pt-2 text-xs font-bold text-gray-400">
                <a href="https://github.com/aditi280706/thyrocare-website" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                <span>&bull;</span>
                <a href="https://share.google/EYQyUMQ9IoZGrqsJ2" target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Maps</a>
              </div>
            </div>

          </div>

          {/* Footer Footnote */}
          <div className="pt-8 text-center text-[10px] text-gray-500 font-bold uppercase tracking-wider space-y-1">
            <p>Authorized Thyrocare Collection Center – Mulund West</p>
            <p className="opacity-80">&copy; {new Date().getFullYear()} Thyrocare Mulund West. Diagnostics You Can Trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}