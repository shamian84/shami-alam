import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  CheckCircle2,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "917008189412";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const email = "shamialam4823@example.com";

  // UX Feature: Max character limit for WhatsApp readability
  const MAX_CHARS = 500;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) return;
    setForm({ ...form, [name]: value });
  };

  const buildWhatsAppMessage = () => {
    const type = form.type ? `\n📌 *Project Type:* ${form.type}` : "";
    const emailStr = form.email ? `(${form.email})` : "";
    const msg = form.message ? `\n\n💬 *Message:*\n${form.message}` : "";

    return encodeURIComponent(
      `👋 *Hi Shami!*\n\nI'm *${form.name}* ${emailStr}.${type}${msg}\n\nI found you through your portfolio website.`,
    );
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!form.name || !form.message) return; // Prevent empty sends

    const encoded = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    
    // Clear form after sending
    setForm({
      name: "",
      email: "",
      type: "",
      message: "",
    });
  };

  // Form validity check for the button disabled state
  const isFormValid =
    form.name.trim().length > 0 && form.message.trim().length > 0;

  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden text-white"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Info ── */}
          <div>
            {/* Added: Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
              Let's Build
              <br />
              Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Great.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
              Have a project in mind? Skip the boring emails. Fill out the
              details and let's jump straight into a WhatsApp chat to discuss
              your vision.
            </p>

            {/* Email Contact Card */}
            <button
              onClick={handleCopy}
              className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] backdrop-blur-md rounded-2xl px-5 py-4 w-full text-left transition-all duration-300 mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail
                  size={18}
                  className="text-gray-300 group-hover:text-white transition-colors"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                  Email Me
                </p>
                <p className="text-white font-medium text-[15px]">{email}</p>
              </div>
              <div className="text-xs text-gray-500 group-hover:text-white transition-colors flex items-center gap-1.5 bg-white/[0.05] px-3 py-1.5 rounded-full">
                {copied ? (
                  <CheckCircle2 size={14} className="text-green-400" />
                ) : (
                  "Copy"
                )}
              </div>
            </button>

            {/* Phone Contact Card */}
            <a
              href="tel:+917008189412"
              className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04] backdrop-blur-md rounded-2xl px-5 py-4 w-full transition-all duration-300 mb-10"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone
                  size={18}
                  className="text-gray-300 group-hover:text-white transition-colors"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                  Call Me
                </p>
                <p className="text-white font-medium text-[15px]">
                  +91 70081 89412
                </p>
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1.5">
                <Clock size={14} /> IST Timezone
              </div>
            </a>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/shamian84", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shami-alam/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/shami_9.4/", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.1] hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Smart Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/[0.01] border border-white/[0.05] backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 shadow-2xl relative"
          >
            {/* Added: Small decorative element */}
            <div className="absolute top-8 right-8 text-gray-600/50">
              <Sparkles size={24} />
            </div>

            <form
              onSubmit={handleSendWhatsApp}
              className="space-y-6 relative z-10"
            >
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Project Details
                </h3>
                <p className="text-sm text-gray-400">
                  Fill this out to generate a dynamic message.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 relative group">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 ml-1">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all text-sm"
                  />
                </div>
                <div className="space-y-2 relative group">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 ml-1">
                    Email (Optional)
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@example.com"
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 ml-1">
                  Project Type
                </label>
                <div className="relative">
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-900 text-gray-400">
                      Select an area of interest...
                    </option>
                    <option className="bg-gray-900">Web Development</option>
                    <option className="bg-gray-900">Mobile App</option>
                    <option className="bg-gray-900">UI/UX Design</option>
                    <option className="bg-gray-900">API & Backend</option>
                    <option className="bg-gray-900">DevOps & Cloud</option>
                    <option className="bg-gray-900">Other</option>
                  </select>
                  {/* Custom dropdown arrow to replace default */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    Message *
                  </label>
                  {/* Added: Character Counter */}
                  <span
                    className={`text-[10px] font-medium ${form.message.length >= MAX_CHARS ? "text-red-400" : "text-gray-500"}`}
                  >
                    {form.message.length} / {MAX_CHARS}
                  </span>
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your goals, timeline, and budget..."
                  required
                  className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all resize-none text-sm"
                />
              </div>

              {/* Added: Single, high-impact CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: isFormValid
                      ? "linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                      : "#2A2A2A",
                    boxShadow: isFormValid
                      ? "0 10px 30px -10px rgba(37,211,102,0.5)"
                      : "none",
                  }}
                >
                  <MessageCircle
                    size={20}
                    className={isFormValid ? "group-hover:animate-pulse" : ""}
                  />
                  <span className="tracking-wide">Continue to WhatsApp</span>
                  <ArrowRight
                    size={18}
                    className={`transition-transform ${isFormValid ? "group-hover:translate-x-1" : ""}`}
                  />
                </button>
                <p className="text-[11px] text-gray-500 text-center mt-4 flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={12} className="text-green-500" />
                  Your information is never stored or sent to any server.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
