/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, Mail, Phone, Home, Building2, Wrench, 
  CheckCircle2, ShieldCheck, Headset, ArrowRight, 
  Plus, Quote, Star, Clock, Facebook, Instagram, 
  Menu, X, ChevronDown, Minus
} from 'lucide-react';

const TopBar = () => (
  <div className="bg-navy text-white py-2 px-6 md:px-20 hidden md:flex justify-between items-center text-xs font-medium border-b border-white/10">
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <MapPin className="text-primary w-4 h-4" />
        <span>123 Industrial Way, New York, NY</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="text-primary w-4 h-4" />
        <span>info@premiumroofing.com</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Phone className="text-primary w-4 h-4" />
      <span>Emergency: (555) 0123-4567</span>
    </div>
  </div>
);

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-1">
          <Home className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h2 className="font-display font-black text-xl sm:text-2xl tracking-tighter text-navy uppercase">
          Premium<span className="text-primary">Roofing</span>
        </h2>
      </div>
      <div className="hidden lg:flex items-center gap-8 font-display font-bold text-sm uppercase tracking-wider text-navy">
        <a className="hover:text-primary transition-colors" href="#">Home</a>
        <a className="hover:text-primary transition-colors" href="#">Services</a>
        <a className="hover:text-primary transition-colors" href="#">Projects</a>
        <a className="hover:text-primary transition-colors" href="#">About</a>
        <a className="hover:text-primary transition-colors" href="#">Blog</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-3 text-navy">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-primary" />
        </div>
        <button onClick={onOpenModal} className="hidden sm:block bg-primary text-white font-display font-bold px-4 py-2 sm:px-6 sm:py-3 uppercase text-[10px] sm:text-xs tracking-widest hover:bg-navy transition-all">
          Get a Quote
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="relative min-h-screen lg:min-h-[700px] flex items-center diagonal-hero overflow-hidden bg-navy">
    <div 
      className="absolute inset-0 opacity-40 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop')" }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full grid lg:grid-cols-2 gap-12 items-center pt-24 pb-32 lg:py-32">
      <div className="text-white space-y-6">
        <div className="inline-block bg-primary px-4 py-1 font-display font-bold text-xs uppercase tracking-[0.2em]">
          Established 1998
        </div>
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl uppercase leading-none">
          Unmatched <br/><span className="text-primary">Roofing</span> Excellence
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-lg font-light leading-relaxed">
          Providing durable, industrial-grade roofing solutions for residential and commercial properties. We build protection that lasts a lifetime.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={onOpenModal} className="bg-primary px-6 py-3 sm:px-8 sm:py-4 font-display font-bold uppercase tracking-widest text-xs sm:text-sm hover:translate-x-1 transition-transform">
            Book Consultation
          </button>
          <button className="border-2 border-white px-6 py-3 sm:px-8 sm:py-4 font-display font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-navy transition-all">
            View Our Work
          </button>
        </div>
      </div>
      
      <div className="lg:ml-auto w-full max-w-md relative mt-8 lg:mt-0">
        <div className="bg-primary text-white p-3 sm:p-4 font-display font-black uppercase tracking-tighter text-lg sm:text-xl -mb-1 transform -skew-x-12 origin-left relative z-10 inline-block px-6 sm:px-8 ml-2 sm:ml-0">
          Quick Booking
        </div>
        <div className="bg-white p-6 sm:p-8 shadow-2xl relative z-0">
          <form className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Full Name</label>
              <input className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm" placeholder="John Doe" type="text"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Phone</label>
                <input className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm" placeholder="(555) 000-0000" type="tel"/>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Service</label>
                <select className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm">
                  <option>Repair</option>
                  <option>New Install</option>
                  <option>Inspection</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Message</label>
              <textarea className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm h-24" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-navy text-white font-display font-black uppercase py-4 tracking-widest hover:bg-primary transition-colors text-sm">
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center mb-16">
        <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2">Our Expertise</p>
        <h2 className="font-display font-black text-4xl text-navy uppercase tracking-tighter">Premium Roofing Services</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Residential Roofing",
            desc: "Expert installation and repairs for all home types using the highest quality shingles and tiles.",
            icon: Home,
            img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Commercial Solutions",
            desc: "Heavy-duty roofing systems designed for industrial buildings, warehouses, and commercial offices.",
            icon: Building2,
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          },
          {
            title: "Maintenance & Repair",
            desc: "Fast response leak repairs and preventative maintenance programs to extend your roof's lifespan.",
            icon: Wrench,
            img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
          }
        ].map((service, i) => (
          <div key={i} className="group border border-slate-100 hover:border-primary transition-colors">
            <div className="h-64 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={service.img} alt={service.title} />
              <div className="absolute bottom-0 left-0 bg-primary p-4">
                <service.icon className="text-white w-8 h-8" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display font-bold text-xl uppercase text-navy mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              <a className="text-primary font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="bg-navy overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] relative">
        <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="Roofing project" />
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-24 flex flex-col justify-center relative">
        <div className="absolute inset-y-0 -left-16 w-32 bg-navy transform -skew-x-6 hidden lg:block"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tighter leading-tight">
            We Build Integrity Into Every Square Inch
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            With over two decades of experience, we've mastered the art of industrial-strength protection for your property. Our team uses only premium materials and rigorous safety standards.
          </p>
          <ul className="space-y-4">
            {[
              { text: "Certified Master Contractors", icon: CheckCircle2 },
              { text: "25-Year Full Warranty", icon: ShieldCheck },
              { text: "24/7 Emergency Support", icon: Headset }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white">
                <item.icon className="text-primary bg-primary/10 p-2 w-10 h-10 rounded-sm shrink-0" />
                <span className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white font-display font-bold px-8 sm:px-10 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-navy transition-all w-full sm:w-auto">
            Discover Our Story
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-24 bg-background-light">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2">Portfolio</p>
          <h2 className="font-display font-black text-4xl text-navy uppercase tracking-tighter">Recent Projects</h2>
        </div>
        <div className="flex gap-4 font-display font-bold text-xs uppercase tracking-widest text-navy/50">
          <span className="text-primary cursor-pointer border-b-2 border-primary pb-1">All</span>
          <span className="hover:text-navy cursor-pointer pb-1 transition-colors">Residential</span>
          <span className="hover:text-navy cursor-pointer pb-1 transition-colors">Commercial</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {[
          { loc: "Manhattan, NY", title: "Skyline Penthouse", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
          { loc: "Greenwich, CT", title: "Estate Shingling", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
          { loc: "Newark, NJ", title: "Logistics Hub", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop" },
          { loc: "Scarsdale, NY", title: "Tudor Restoration", img: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop" }
        ].map((proj, i) => (
          <div key={i} className="aspect-square relative group overflow-hidden">
            <img className="w-full h-full object-cover" src={proj.img} alt={proj.title} />
            <div className="absolute inset-0 bg-navy/90 flex flex-col items-center justify-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">{proj.loc}</p>
              <h4 className="text-white font-display font-bold uppercase text-center text-sm">{proj.title}</h4>
              <div className="w-8 h-1 bg-primary mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  
  const faqs = [
    { q: "How long does a roof replacement take?", a: "Most residential roofs are completed in 1-3 days depending on size and weather conditions." },
    { q: "Do you offer financing options?", a: "Yes, we offer flexible financing plans to fit your budget. Contact our sales team for more details." },
    { q: "What kind of warranty do you provide?", a: "We provide a comprehensive 25-year warranty on materials and a 10-year warranty on workmanship." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl text-navy uppercase tracking-tighter">Common Questions</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-display font-bold text-navy uppercase tracking-wide text-sm">{faq.q}</span>
                {open === i ? <Minus className="text-primary w-5 h-5" /> : <Plus className="text-primary w-5 h-5" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-slate-600 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => (
  <section className="py-24 bg-background-light">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center mb-16">
        <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2">Experts</p>
        <h2 className="font-display font-black text-4xl text-navy uppercase tracking-tighter">Our Leadership Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Gemini", role: "Founder & CEO", img: "https://cdn.discordapp.com/attachments/1342387568154644560/1483491621738647602/images_1_11.jpg?ex=69bac8bc&is=69b9773c&hm=278652021a6be56493fb321be8bf03901ec02ba1fd7a553980cfd15ca0acb11e&" },
          { name: "Gemini", role: "Operations Director", img: "https://cdn.discordapp.com/attachments/1342387568154644560/1483491621738647602/images_1_11.jpg?ex=69bac8bc&is=69b9773c&hm=278652021a6be56493fb321be8bf03901ec02ba1fd7a553980cfd15ca0acb11e&" },
          { name: "Gemini", role: "Head of Engineering", img: "https://cdn.discordapp.com/attachments/1342387568154644560/1483491621738647602/images_1_11.jpg?ex=69bac8bc&is=69b9773c&hm=278652021a6be56493fb321be8bf03901ec02ba1fd7a553980cfd15ca0acb11e&" },
          { name: "Gemini", role: "Lead Estimator", img: "https://cdn.discordapp.com/attachments/1342387568154644560/1483491621738647602/images_1_11.jpg?ex=69bac8bc&is=69b9773c&hm=278652021a6be56493fb321be8bf03901ec02ba1fd7a553980cfd15ca0acb11e&" }
        ].map((member, i) => (
          <div key={i} className="bg-white shadow-lg relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img className="w-full h-full object-cover" src={member.img} alt={member.name} />
            </div>
            <div className="p-6 text-center">
              <h4 className="font-display font-black text-navy uppercase tracking-tighter">{member.name}</h4>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mt-1">{member.role}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-navy text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="text-center mb-16">
        <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2">Reviews</p>
        <h2 className="font-display font-black text-4xl uppercase tracking-tighter">Client Stories</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            quote: "Premium Roofing lived up to their name. They handled our complex commercial project with professional precision and finished ahead of schedule. Highly recommended for industrial needs.",
            name: "James Wilson",
            title: "Industrialist Corp",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
          },
          {
            quote: "The quality of work on my residential roof replacement was outstanding. The crew was clean, respectful, and the final result has completely transformed our home's curb appeal.",
            name: "Eleanor Vance",
            title: "Homeowner",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
          }
        ].map((t, i) => (
          <div key={i} className="bg-white/5 p-10 relative">
            <Quote className="text-primary w-16 h-16 absolute top-8 right-8 opacity-20" />
            <div className="flex gap-1 text-primary mb-6">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg italic text-slate-300 leading-relaxed mb-8">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${t.img}')` }}
              ></div>
              <div>
                <h5 className="font-display font-bold uppercase text-sm">{t.name}</h5>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-white relative z-10">
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter leading-none mb-4 sm:mb-6">
          Need an Urgent Roof Inspection?
        </h2>
        <p className="text-white/80 font-bold uppercase tracking-widest text-xs sm:text-sm">
          We provide free quotes within 24 hours. Contact our team now.
        </p>
      </div>
      <button onClick={onOpenModal} className="bg-navy px-8 sm:px-12 py-4 sm:py-5 font-display font-black uppercase tracking-[0.2em] text-xs sm:text-sm hover:translate-y-[-4px] transition-transform shadow-2xl w-full sm:w-auto">
        Get Free Estimate
      </button>
    </div>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-[-20deg] translate-x-10 hidden md:block"></div>
    </div>
  </section>
);

const Blog = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-2">Knowledge Base</p>
          <h2 className="font-display font-black text-4xl text-navy uppercase tracking-tighter">Latest From The Blog</h2>
        </div>
        <button className="font-display font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-1">
          View All Posts
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            date: "October 12, 2023",
            title: "How to Prepare Your Roof for Winter Storms",
            desc: "Protect your home from expensive water damage with these 5 essential maintenance tips before the first snow...",
            img: "https://images.unsplash.com/photo-1478809846157-df41fa3e2714?q=80&w=2070&auto=format&fit=crop"
          },
          {
            date: "September 28, 2023",
            title: "Choosing the Right Material: Metal vs. Shingle",
            desc: "We break down the costs, longevity, and durability of the two most popular roofing systems in 2024.",
            img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
          },
          {
            date: "August 15, 2023",
            title: "Understanding Commercial Flat Roof Maintenance",
            desc: "Commercial roofs face unique challenges. Learn how a proactive maintenance plan saves thousands in repairs.",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          }
        ].map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="h-60 overflow-hidden mb-6">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={post.img} alt={post.title} />
            </div>
            <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">{post.date}</p>
            <h3 className="font-display font-bold text-lg uppercase text-navy leading-snug group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-slate-600 text-sm mt-4 line-clamp-2">{post.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1">
              <Home className="text-white w-6 h-6" />
            </div>
            <h2 className="font-display font-black text-xl tracking-tighter text-white uppercase">
              Premium<span className="text-primary">Roofing</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The industry leader in high-performance roofing systems for commercial and residential sectors. We build with the strength of steel and the precision of masters.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white" href="#">
              <Facebook className="w-4 h-4" />
            </a>
            <a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white" href="#">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-display font-black text-white uppercase text-sm tracking-widest">Our Services</h4>
          <ul className="space-y-3">
            {['Residential Roofing', 'Commercial Roofing', 'Flat Roof Maintenance', 'Emergency Repairs', 'Gutters & Siding'].map(link => (
              <li key={link}><a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-display font-black text-white uppercase text-sm tracking-widest">Company</h4>
          <ul className="space-y-3">
            {['About Us', 'Our Projects', 'Safety Standards', 'Terms of Service', 'Contact'].map(link => (
              <li key={link}><a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-display font-black text-white uppercase text-sm tracking-widest">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-400 text-sm">
              <Phone className="text-primary w-5 h-5 shrink-0" />
              <span>Main: (555) 0123-4567<br/>Support: (555) 9876-5432</span>
            </li>
            <li className="flex gap-3 text-slate-400 text-sm items-center">
              <Mail className="text-primary w-5 h-5 shrink-0" />
              <span>estimates@premiumroofing.com</span>
            </li>
            <li className="flex gap-3 text-slate-400 text-sm">
              <Clock className="text-primary w-5 h-5 shrink-0" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM<br/>Sun: Closed (Emergency Only)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">
          © 2024 Premium Roofing Company. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-colors" href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Replace this with your client's actual email address
    const CLIENT_EMAIL = "dnp.adil999@gmail.com"; 
    
    try {
      await fetch(`https://formsubmit.co/ajax/${CLIENT_EMAIL}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      setIsModalOpen(false);
      alert("Quote request sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="font-sans bg-background-light text-slate-900 overflow-x-hidden">
      <TopBar />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Services />
      <About />
      <Projects />
      <FAQ />
      <Team />
      <Testimonials />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Blog />
      <Footer />

      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen px-4 text-center flex items-center justify-center">
            <div className="bg-white w-full max-w-md shadow-2xl relative my-8 text-left">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-navy transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="bg-primary text-white p-6 font-display font-black uppercase tracking-tighter text-xl">
                Get a Quote
              </div>
              <div className="p-6 sm:p-8">
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Quote Request from Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Full Name</label>
                    <input name="name" className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm" placeholder="John Doe" type="text" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Phone</label>
                      <input name="phone" className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm" placeholder="(555) 000-0000" type="tel" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Service</label>
                      <select name="service" className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm">
                        <option>Repair</option>
                        <option>New Install</option>
                        <option>Inspection</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Message / Notes</label>
                    <textarea name="message" className="w-full border-slate-200 border focus:border-primary focus:ring-0 p-3 text-sm h-24" placeholder="How can we help? notes" required></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-navy text-white font-display font-black uppercase py-4 tracking-widest hover:bg-primary transition-colors text-sm disabled:opacity-70">
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
