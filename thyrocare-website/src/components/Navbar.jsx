import { useState, useEffect } from "react";
import { Phone, MessageSquare, FileText, Menu, X } from "lucide-react";

export default function Navbar({ onOpenBrochure, onScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Packages", href: "#packages" },
    { name: "Directory", href: "#directory" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    onScrollTo(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 no-print ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <div
            onClick={() => handleNavClick("#home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <img
              src="images/logo.jpg"
              alt="Thyrocare Mulund West Logo"
              className="h-10 sm:h-12 w-auto rounded-lg object-contain shadow-sm"
            />
            <div className="border-l border-gray-300 pl-2 ml-1">
              <p className="text-[9px] font-black text-brand-emerald uppercase tracking-widest">
                Mulund
              </p>
              <p className="text-[9px] font-black text-brand-charcoal uppercase tracking-widest leading-none mt-0.5">
                West
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-brand-charcoal/80 hover:text-brand-emerald transition-colors focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:9819013891"
              className="flex items-center space-x-1.5 border border-gray-200 hover:border-brand-emerald bg-white hover:bg-gray-50 text-brand-charcoal hover:text-brand-emerald px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919819013891"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onOpenBrochure}
              className="flex items-center space-x-1.5 bg-brand-charcoal hover:bg-brand-emerald text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Brochure</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal/80 hover:text-brand-emerald bg-gray-50 hover:bg-gray-100 p-2.5 rounded-xl border border-gray-200/50 transition-all focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-white border-l border-gray-200/60 shadow-2xl p-6 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
            <div className="flex items-center space-x-2">
              <img
                src="images/logo.jpg"
                alt="Thyrocare Logo"
                className="h-8 w-auto rounded-md object-contain"
              />
              <div className="border-l border-gray-300 pl-2">
                <p className="text-[9px] font-black text-brand-emerald uppercase tracking-wider leading-none">
                  Mulund West
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-brand-charcoal bg-gray-50 p-2 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-semibold text-brand-charcoal/80 hover:text-brand-emerald py-1 px-2 rounded-lg hover:bg-gray-50 transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Drawer CTAs */}
        <div className="space-y-3 pt-6 border-t border-gray-100">
          <a
            href="tel:9819013891"
            className="flex items-center justify-center space-x-2 w-full border border-gray-200 text-brand-charcoal bg-white py-3.5 rounded-xl text-sm font-bold shadow-sm transition-all"
          >
            <Phone className="w-4 h-4 text-brand-emerald" />
            <span>Call +91 9819013891</span>
          </a>
          <a
            href="https://wa.me/919819013891"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full bg-emerald-500 text-white py-3.5 rounded-xl text-sm font-bold shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Booking</span>
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBrochure();
            }}
            className="flex items-center justify-center space-x-2 w-full bg-brand-charcoal text-white py-3.5 rounded-xl text-sm font-bold shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>View Catalog Brochure</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
