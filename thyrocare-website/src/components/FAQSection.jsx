import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a blood test?",
      answer: "Booking a test is simple and fast! You can click the 'Book Now' button on any package, which scrolls you to our Lead Booking form, call us directly at 9819013891, or send us a message on WhatsApp. Our team will immediately coordinate to confirm your slot."
    },
    {
      question: "Is home sample collection available?",
      answer: "Yes, free home sample collection is available for all of Mulund West, Mulund East, Nahur, Bhandup, and surrounding zones. Our certified health technician will visit your home at your scheduled time to collect samples under strict hygienic guidelines."
    },
    {
      question: "How long do reports take?",
      answer: "Standard diagnostic test reports (CBC, Thyroid, Lipids, Diabetes) are processed and delivered digitally within 24 to 48 hours of sample collection. Some advanced or specialized testing panels may take slightly longer depending on processing protocols."
    },
    {
      question: "Are reports available online?",
      answer: "Yes, once your samples are processed, secure PDF reports are sent directly to your registered WhatsApp number and email address. You can also download them from our online report download section using your mobile number and Booking ID."
    },
    {
      question: "Do I need fasting?",
      answer: "Fasting requirements depend on the tests booked. For comprehensive profiles like Aarogyam B Pro, C Pro, D Pro, Lipids, or Fasting Insulin, a strict 10-12 hours overnight fasting is required (no food, tea, coffee, or milk; plain water is permitted). For Vitamin panels, Hemoglobin Electrophoresis, or HbA1c, fasting is not mandatory."
    },
    {
      question: "Can I book through WhatsApp?",
      answer: "Absolutely! You can click the WhatsApp floating button or navigation buttons. It will open a chat pre-populated with your request details. Simply send us your name, selected test/package, and preferred address, and we'll confirm your slot."
    },
    {
      question: "Can I download reports online?",
      answer: "Yes! Use our 'Report Download Section' on the homepage. Just enter your registered mobile number and Booking ID to securely retrieve and download your official Thyrocare clinical report."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 no-print">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-emerald-50 border border-emerald-250 text-brand-emerald text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            Help Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-charcoal mt-3 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-550 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-medium">
            Find answers to common questions about home collection, fasting instructions, and reports.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-brand-emerald/40 shadow-md" : "border-gray-200/60 hover:bg-gray-50/50"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-brand-charcoal pr-4 flex items-center">
                    <HelpCircle className="w-5 h-5 text-brand-emerald mr-3 shrink-0" />
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200/50 flex items-center justify-center shrink-0 text-gray-500 shadow-sm transition-colors">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-emerald" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-gray-605 text-xs sm:text-sm leading-relaxed font-semibold bg-gray-50/40">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
