import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '917008189412';

const quickMessages = [
  "👋 Hi Shami! I'd like to discuss a project with you.",
  "🚀 I need a web application built. Are you available?",
  "💼 Interested in hiring you for a freelance project.",
  "❓ Can we have a quick call to discuss my requirements?",
];

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show speech bubble hint after 4 seconds
    const t = setTimeout(() => setShowBubble(true), 4000);
    const t2 = setTimeout(() => setShowBubble(false), 9000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const sendMessage = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  const handleCustomSend = () => {
    if (customMsg.trim()) {
      sendMessage(customMsg.trim());
      setCustomMsg('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.6), 0 0 40px rgba(37,211,102,0.1)' }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-display font-bold flex-shrink-0">
                SA
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Shami Alam</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                  <span className="text-white/80 text-xs">Typically replies quickly</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#0d1117] p-4 space-y-3">
              {/* Info bubble */}
              <div className="bg-[#1a1f2e] rounded-2xl rounded-tl-sm p-3 text-sm text-gray-300 max-w-[85%] border border-white/[0.05]">
                👋 Hi there! I'm <strong className="text-white">Shami Alam</strong>, a Full Stack Developer based in Mumbai.
                <br /><br />How can I help you today?
                <div className="text-[10px] text-gray-500 mt-1 text-right">Shami · Just now</div>
              </div>

              {/* Quick messages */}
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-4 mb-2">Quick Messages</p>
              <div className="space-y-2">
                {quickMessages.map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(msg)}
                    className="w-full text-left text-sm text-gray-300 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-[#25d366]/30 rounded-xl px-3 py-2.5 transition-all"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              {/* Custom message input */}
              <div className="flex items-center gap-2 mt-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-3 py-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCustomSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-gray-600 outline-none"
                />
                <button
                  onClick={handleCustomSend}
                  disabled={!customMsg.trim()}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                  style={{ background: customMsg.trim() ? '#25d366' : 'rgba(255,255,255,0.08)' }}
                >
                  <Send size={13} className="text-white" />
                </button>
              </div>

              <p className="text-[10px] text-gray-600 text-center mt-2">
                Powered by WhatsApp · No account needed to message
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-[#25d366] text-white text-xs font-medium px-3 py-2 rounded-full shadow-lg whitespace-nowrap"
            style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
          >
            💬 Chat with me on WhatsApp!
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all"
        style={{
          background: isOpen ? '#ef4444' : 'linear-gradient(135deg, #25d366, #128c7e)',
          boxShadow: isOpen ? '0 8px 30px rgba(239,68,68,0.4)' : '0 8px 30px rgba(37,211,102,0.5)',
        }}
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.div>
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: '#25d366' }} />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
