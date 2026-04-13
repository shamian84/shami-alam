import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "I don't have everything figured out yet. Can we still talk?",
    a: "Absolutely! Just bring your vision. You don't need perfect wireframes or a technical brief. We'll start with a friendly chat to understand your goals, and I'll help guide you through the rest.",
  },
  {
    q: "How does your pricing work?",
    a: "I believe in fair and transparent pricing. Since every project is unique, I don't use cookie-cutter packages. After our first call, I'll send you a custom proposal tailored to your specific needs and budget.",
  },
  {
    q: "What if I want to change things during the project?",
    a: "You absolutely can. I want you to love the final result! We'll have regular check-ins where you can share feedback, and my process includes dedicated revision rounds to make sure everything looks and feels just right.",
  },
  {
    q: "How long will it take to build my website?",
    a: "Most custom websites take about 2 to 6 weeks, depending on the complexity. I'll give you a clear, realistic timeline before we write a single line of code, so you know exactly when to expect your new site.",
  },
  {
    q: "Do you offer support after the website goes live?",
    a: "Yes! I don't just launch your site and disappear. I'll make sure everything is running smoothly, show you how to manage it, and I'm always just a message away if you need updates or new features later on.",
  },
  {
    q: "I'm located in a different time zone. Is that a problem?",
    a: "Not at all. I work with clients globally. We can easily coordinate across time zones using tools like WhatsApp, Notion, or email, and I'm always flexible with meeting times to suit your schedule.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3 tracking-widest text-sm text-gray-400 uppercase">
            Got Questions?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Common{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to know about working with me.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.03] border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                    : "bg-white/[0.01] border-white/[0.06] hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span
                    className={`font-display text-base md:text-[1.1rem] transition-colors ${isOpen ? "text-white font-medium" : "text-gray-300"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-white text-black" : "bg-white/5 border border-white/10 text-gray-400"}`}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed text-[0.95rem]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
