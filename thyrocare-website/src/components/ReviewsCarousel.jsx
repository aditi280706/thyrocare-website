import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function ReviewsCarousel() {
  const reviews = [
    {
      id: 1,
      name: "Sneha Patil",
      rating: 5,
      review: "Highly professional home sample collection! The phlebotomist was very hygienic, wore a mask, and took the draw in a single painless prick. Got reports on my WhatsApp within 24 hours.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      id: 2,
      name: "Amit Shah",
      rating: 5,
      review: "Clean and well-organized center located in Mulund West. The franchise manager Dinesh was very polite, and the Aarogyam health package prices are almost half of other diagnostic centers.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      id: 3,
      name: "Meera Deshmukh",
      rating: 5,
      review: "Booked the Women's Wellness Package for my mother. Free home sample collection in Mulund was super convenient, and the PDF reports were very easy to download from their portal.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      id: 4,
      name: "Rahul Kulkarni",
      rating: 5,
      review: "Extremely fast service! I sent my booking request on WhatsApp, got immediate confirmation, and the technician visited the next morning at 8:00 AM. Reports came the same evening.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden no-print">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-amber-50 border border-amber-200/50 text-brand-gold text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            Patient Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-charcoal tracking-tight mt-3 mb-2">
            Trusted By Mulund Residents
          </h2>
          <p className="text-gray-550 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            Read stories and feedback from patients who booked blood tests and full body checkups at our Mulund West center.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-2xl mx-auto relative h-[280px] sm:h-[220px]">
          {reviews.map((rev, index) => {
            const isSelected = index === activeIndex;
            return (
              <div
                key={rev.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  isSelected
                    ? "opacity-100 scale-100 pointer-events-auto z-10"
                    : "opacity-0 scale-95 pointer-events-none z-0"
                }`}
              >
                <div className="glass-panel p-6 sm:p-8 rounded-[32px] border border-white/60 shadow-xl shadow-gray-100/30 flex flex-col justify-between h-full">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-4 text-brand-gold">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-brand-gold shrink-0" />
                      ))}
                    </div>
                    {/* Review text */}
                    <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed font-semibold">
                      "{rev.review}"
                    </p>
                  </div>

                  {/* Profile info footer */}
                  <div className="flex items-center space-x-3.5 mt-4 pt-4 border-t border-gray-150/40">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-xl object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-brand-charcoal">
                        {rev.name}
                      </h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                        Verified Google Local Guide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center space-x-2.5 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-brand-emerald" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
