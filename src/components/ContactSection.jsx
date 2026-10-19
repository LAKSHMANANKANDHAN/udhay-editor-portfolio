import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEngine';
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Professional Video Editing',
    description: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please tell me a little about your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();

    if (!validate()) return;

    sound.playWebShoot();

    // Trigger victory confetti in superhero neon red and silver
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FF153C', '#8B0015', '#FFFFFF', '#A1A1AA'],
    });

    setFormSubmitted(true);

    // Prepare direct email dispatch mailto link
    const subject = encodeURIComponent(`Project Enquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Description:\n${formData.description}`
    );
    const mailtoUrl = `mailto:thivagarj74@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;
  };

  const directContacts = [
    {
      title: 'INSTAGRAM',
      subtitle: '@dj_editzx',
      buttonText: 'MESSAGE ON INSTAGRAM',
      url: 'https://www.instagram.com/dj_editzx/',
      icon: Instagram,
      color: '#E1306C',
    },
    {
      title: 'WHATSAPP',
      subtitle: '+91 8610658691',
      buttonText: 'CHAT ON WHATSAPP',
      url: `https://wa.me/918610658691?text=${encodeURIComponent(
        'Hi Udhaya Kumar, I saw your portfolio and would like to discuss an editing project.'
      )}`,
      icon: MessageCircle,
      color: '#25D366',
    },
    {
      title: 'CALL DIRECT',
      subtitle: '+91 8610658691',
      buttonText: 'CALL NOW',
      url: 'tel:+918610658691',
      icon: Phone,
      color: '#FF153C',
    },
    {
      title: 'EMAIL DISPATCH',
      subtitle: 'thivagarj74@gmail.com',
      buttonText: 'SEND AN EMAIL',
      url: 'mailto:thivagarj74@gmail.com',
      icon: Mail,
      color: '#EA4335',
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#050507] overflow-hidden">
      {/* Background Subtle Silhouette & Multiverse Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF153C]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-superhero-grid opacity-25 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111118] border border-[rgba(255,21,60,0.3)] shadow-[0_0_15px_rgba(255,21,60,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF153C]" />
            <span className="font-tech text-xs tracking-[0.25em] text-silver-light font-semibold uppercase">
              FINAL CINEMATIC SCENE
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight text-neon-glow">
            LET'S CREATE SOMETHING LEGENDARY.
          </h2>

          <p className="font-heading text-base sm:text-lg text-silver-muted max-w-2xl font-medium">
            Have a vision? Let's turn it into an unforgettable visual experience.
          </p>
        </div>

        {/* 4 Direct Contact Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {directContacts.map((contact) => {
            const IconComp = contact.icon;
            return (
              <a
                key={contact.title}
                href={contact.url}
                target={contact.url.startsWith('http') ? '_blank' : '_self'}
                rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  sound.playWebShoot();
                  const rect = e.currentTarget.getBoundingClientRect();
                  window.dispatchEvent(
                    new CustomEvent('shoot-web', {
                      detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
                    })
                  );
                }}
                onMouseEnter={() => sound.playHover()}
                className="group relative p-6 rounded-2xl bg-[#0c0c14] border border-[rgba(255,21,60,0.2)] hover:border-[#FF153C] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,21,60,0.35)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#141422] border border-[rgba(255,21,60,0.3)] flex items-center justify-center text-white group-hover:bg-[#FF153C] transition-all shadow-[0_0_15px_rgba(255,21,60,0.2)]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-silver-muted group-hover:text-[#FF153C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="space-y-1 mb-4">
                  <span className="font-tech text-xs tracking-wider text-[#FF153C] uppercase font-bold">
                    {contact.title}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold text-white truncate">
                    {contact.subtitle}
                  </h3>
                </div>

                <span className="w-full py-2.5 px-3 rounded-lg bg-[#141420] group-hover:bg-[#FF153C] text-silver-light group-hover:text-white font-tech text-xs font-bold tracking-wider uppercase text-center transition-all border border-[rgba(255,255,255,0.06)]">
                  {contact.buttonText}
                </span>
              </a>
            );
          })}
        </div>

        {/* Interactive Contact Form Box */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-[#0c0c14] border border-[rgba(255,21,60,0.3)] p-6 sm:p-10 shadow-[0_0_40px_rgba(255,21,60,0.18)]">
          
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[rgba(255,255,255,0.08)]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(255,21,60,0.15)] flex items-center justify-center text-[#FF153C]">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                PROJECT ENQUIRY FORM
              </h3>
              <p className="font-tech text-xs text-silver-muted uppercase tracking-wider">
                Direct Dispatch to Udhaya Kumar.DJ
              </p>
            </div>
          </div>

          {formSubmitted ? (
            <div className="p-8 text-center space-y-4 bg-[#11111a] rounded-xl border border-[#FF153C]">
              <CheckCircle2 className="w-12 h-12 text-[#FF153C] mx-auto animate-bounce" />
              <h4 className="font-display text-xl font-bold text-white">
                ENQUIRY DISPATCHED!
              </h4>
              <p className="text-xs text-silver-muted max-w-md mx-auto leading-relaxed">
                Your email client was opened with your message. You can also chat directly on WhatsApp for immediate confirmation.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`https://wa.me/918610658691?text=${encodeURIComponent(
                    `Hi Udhaya, I submitted an enquiry for ${formData.service}. Let's discuss!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-tech text-xs font-bold tracking-wider uppercase flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#191924] text-silver-light font-tech text-xs font-bold uppercase"
                >
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-tech text-xs font-bold tracking-wider text-silver-light uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[rgba(255,21,60,0.2)] focus:border-[#FF153C] text-sm text-white placeholder-silver-muted/40 focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-[#FF153C] font-tech">{errors.name}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block font-tech text-xs font-bold tracking-wider text-silver-light uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[rgba(255,21,60,0.2)] focus:border-[#FF153C] text-sm text-white placeholder-silver-muted/40 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-[#FF153C] font-tech">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div className="space-y-1.5">
                <label className="block font-tech text-xs font-bold tracking-wider text-silver-light uppercase">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[rgba(255,21,60,0.2)] focus:border-[#FF153C] text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Professional Video Editing">01 — Professional Video Editing</option>
                  <option value="4K Video Enhancement">02 — 4K Video Enhancement</option>
                  <option value="Premium Colour Correction">03 — Premium Colour Correction</option>
                  <option value="Video Encoding & Delivery">04 — Video Encoding & Delivery</option>
                  <option value="Poster & Graphics Design">05 — Poster & Graphics Design</option>
                  <option value="Full Cinematic Package">06 — Full Cinematic Showreel Package</option>
                </select>
              </div>

              {/* Project Description */}
              <div className="space-y-1.5">
                <label className="block font-tech text-xs font-bold tracking-wider text-silver-light uppercase">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Share details about your footage, expected turnaround, reference links, and creative goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-[rgba(255,21,60,0.2)] focus:border-[#FF153C] text-sm text-white placeholder-silver-muted/40 focus:outline-none transition-colors"
                />
                {errors.description && (
                  <span className="text-[11px] text-[#FF153C] font-tech">
                    {errors.description}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF153C] via-[#d60e32] to-[#8B0015] text-white font-display text-sm font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(255,21,60,0.6)] hover:shadow-[0_0_35px_rgba(255,21,60,0.9)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.2)]"
              >
                <span>SUBMIT ENQUIRY</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-tech text-silver-muted pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF153C]" />
                <span>Your contact details are kept strictly private & confidential.</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
