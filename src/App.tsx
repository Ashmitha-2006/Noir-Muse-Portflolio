import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero3D } from "@/components/noir/Hero3D";
import { Nav } from "@/components/noir/Nav";
import { Cursor } from "@/components/noir/Cursor";
import { SmoothScroll } from "@/components/noir/SmoothScroll";
import { VideoTile } from "@/components/noir/VideoTile";
import lotus from "@/assets/clips/lotus.mov.asset.json";
import intro from "@/assets/clips/intro.mov.asset.json";
import next from "@/assets/clips/next.mov.asset.json";
import rose from "@/assets/clips/rose.mov.asset.json";
import elixir from "@/assets/clips/elixir.mov.asset.json";
import crown from "@/assets/clips/crown.mov.asset.json";
import statement from "@/assets/clips/statement.mov.asset.json";
import obsidian from "@/assets/clips/obsidian.mov.asset.json";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { src: lotus.url, category: "Fragrance · Film", title: "Kiko Milano Lotus", meta: "2025", description: "A vertical fragrance film where light blooms across glass like petals opening at dawn." },
  { src: rose.url, category: "Editorial · Beauty", title: "Noir Rose", meta: "2025", description: "A study of shadow and bloom — petals as architecture, silence as perfume." },
  { src: elixir.url, category: "Product · AI", title: "Golden Elixir", meta: "2025", description: "Liquid gold suspended in obsidian — a campaign rendered entirely through prompt engineering." },
  { src: next.url, category: "Fragrance · Film", title: "Kiko Milano Aqua", meta: "2025", description: "Cool, dimensional, alive — water reimagined as a luxury material." },
  { src: intro.url, category: "Couture · Story", title: "Miss Dior", meta: "2025", description: "An opening sequence — a heroine, a corridor of light, a single held breath." },
  { src: crown.url, category: "Brand · Identity", title: "Crown Royale", meta: "2025", description: "Regalia in motion — a crown of pixels rendered with editorial restraint." },
  { src: statement.url, category: "Campaign · Statement", title: "The Statement", meta: "2025", description: "A masterwork of shadow and intent — the campaign that silences a room." },
  { src: obsidian.url, category: "Dark · Editorial", title: "Obsidian Dreams", meta: "2025", description: "Shot in pure black with gold light bleeding through — a vision born from darkness." },
];

const services = [
  { n: "01", title: "AI Visual Campaigns", body: "Luxury product visuals crafted through precision prompt engineering and cinematic art direction." },
  { n: "02", title: "Brand Content Creation", body: "Editorial-grade content for beauty, fragrance & lifestyle brands — from concept to final cut." },
  { n: "03", title: "Creative Direction", body: "Visual identity and campaign concepts for premium brands seeking unmistakable presence." },
  { n: "04", title: "Cinematic Storytelling", body: "Motion content and video narratives that feel less like ads and more like mini-films." },
];

const tickerItems = ["AI Visual Campaigns","Luxury Brand Content","Creative Direction","Cinematic Storytelling","Prompt Engineering","Dark Editorial","Haute Couture Vision"];

export default function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <main id="top" className="relative bg-black text-ivory">
        <Hero />
        <Marquee />
        <CinematicReel />
        <Work />
        <ManifestoStrip />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!titleRef.current) return;
    const words = titleRef.current.querySelectorAll("[data-word]");
    gsap.fromTo(words, { y: 160, opacity: 0, rotateX: -80, skewY: 4 }, { y: 0, opacity: 1, rotateX: 0, skewY: 0, duration: 1.8, ease: "expo.out", stagger: 0.22, delay: 0.3 });
    gsap.fromTo(".hero-fade", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "expo.out", stagger: 0.12, delay: 1.4 });
    if (videoRef.current) gsap.fromTo(videoRef.current, { scale: 1.12 }, { scale: 1, duration: 6, ease: "power2.out" });
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video ref={videoRef} src={statement.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.65) 100%)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C9A84C55, #C9A84C, #C9A84C55, transparent)" }} />
      <div className="absolute inset-0 opacity-60"><Hero3D /></div>
      <span className="absolute top-24 left-6 md:top-28 md:left-12 h-8 w-8 border-l-2 border-t-2 border-gold/80" />
      <span className="absolute top-24 right-6 md:top-28 md:right-12 h-8 w-8 border-r-2 border-t-2 border-gold/80" />
      <span className="absolute bottom-10 left-6 md:bottom-14 md:left-12 h-8 w-8 border-l-2 border-b-2 border-gold/80" />
      <span className="absolute bottom-10 right-6 md:bottom-14 md:right-12 h-8 w-8 border-r-2 border-b-2 border-gold/80" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="hero-fade font-display italic text-xs md:text-sm text-gold/80 mb-3 tracking-widest">✦ &ldquo;You know you love me.&rdquo; ✦</p>
        <p className="hero-fade text-[10px] md:text-xs tracking-luxury uppercase text-gold/90 mb-8 flex items-center gap-3">
          <span className="block h-px w-8 bg-gold/60" />Luxury Creative Studio<span className="block h-px w-8 bg-gold/60" />
        </p>
        <h1 ref={titleRef} className="font-display text-[22vw] md:text-[15vw] leading-[0.82]" style={{ perspective: "1200px" }}>
          <span data-word className="inline-block text-luxe-ivory">Noir</span>{" "}
          <span data-word className="inline-block italic text-luxe-hero">Muse</span>
        </h1>
        <p className="hero-fade mt-8 max-w-lg font-display text-lg md:text-xl text-ivory/80 italic tracking-wide leading-relaxed">
          Where darkness meets <span className="text-luxe-italic">desire</span> —<br />crafting visuals that seduce the eye.
        </p>
        <div className="hero-fade flex items-center gap-6 mt-10">
          <a href="#work" data-hover className="group inline-flex items-center gap-3 border border-gold/70 px-8 py-4 text-[11px] tracking-luxury uppercase text-gold transition-all duration-500 hover:bg-gold hover:text-black hover:border-gold">
            Explore the Work <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#contact" data-hover className="inline-flex items-center gap-2 text-[11px] tracking-luxury uppercase text-ivory/60 hover:text-gold transition-colors">Begin a Brief</a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-luxury uppercase text-ivory/40">Scroll</span>
        <span className="block h-14 w-px bg-gold animate-scroll-line" />
      </div>
    </section>
  );
}

function Marquee() {
  const row = (
    <div className="flex items-center gap-10 px-6 shrink-0">
      {tickerItems.map((t, i) => (
        <span key={i} className="flex items-center gap-10 text-sm md:text-base tracking-luxury uppercase font-medium whitespace-nowrap">
          {t}<span className="text-black/60">◆</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative w-full overflow-hidden bg-gold text-black py-[18px] border-y-2 border-black/15">
      <div className="flex animate-marquee w-max">{row}{row}{row}{row}</div>
    </div>
  );
}

function CinematicReel() {
  const stripRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!stripRef.current || !containerRef.current) return;
    const strip = stripRef.current;
    const totalWidth = strip.scrollWidth - strip.parentElement!.offsetWidth;
    const ctx = gsap.context(() => {
      gsap.to(strip, {
        x: -totalWidth, ease: "none",
        scrollTrigger: { trigger: containerRef.current, start: "top top", end: () => `+=${totalWidth * 1.2}`, scrub: 1.2, pin: true, anticipatePin: 1 },
      });
    });
    return () => ctx.revert();
  }, []);
  const reelClips = [
    { src: intro.url, label: "Miss Dior" },
    { src: next.url, label: "Kiko Aqua" },
    { src: statement.url, label: "The Statement" },
    { src: lotus.url, label: "Lotus" },
    { src: obsidian.url, label: "Obsidian Dreams" },
  ];
  return (
    <div ref={containerRef} className="relative overflow-hidden" style={{ height: "100vh" }}>
      <div className="absolute top-8 left-6 md:left-12 z-20"><p className="text-[10px] tracking-luxury uppercase text-luxe-eyebrow">✦ Cinematic Reel · 2025</p></div>
      <div className="absolute top-8 right-6 md:right-12 z-20"><p className="text-[10px] tracking-luxury uppercase text-ivory/40">Scroll to Navigate →</p></div>
      <div ref={stripRef} className="absolute top-0 left-0 h-full flex items-center gap-4 px-6 md:px-12" style={{ width: "max-content" }}>
        {reelClips.map((clip, i) => <ReelClip key={i} src={clip.src} label={clip.label} index={i} />)}
      </div>
    </div>
  );
}

function ReelClip({ src, label, index }: { src: string; label: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const isWide = index % 2 === 0;
  return (
    <div
      onMouseEnter={() => { setActive(true); videoRef.current?.play().catch(() => {}); }}
      onMouseLeave={() => { setActive(false); videoRef.current?.pause(); }}
      data-hover
      className="relative shrink-0 overflow-hidden border border-gold/20 group cursor-pointer"
      style={{ width: isWide ? "38vw" : "28vw", height: isWide ? "75vh" : "62vh", minWidth: isWide ? "340px" : "240px" }}
    >
      <video ref={videoRef} src={src} muted loop playsInline preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-out"
        style={{ transform: active ? "scale(1.04)" : "scale(1.0)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
      <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: active ? 1 : 0, background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.06) 100%)" }} />
      <span className="absolute top-4 left-4 h-4 w-4 border-l border-t border-gold/60 transition-all duration-300 group-hover:h-6 group-hover:w-6" />
      <span className="absolute top-4 right-4 h-4 w-4 border-r border-t border-gold/60 transition-all duration-300 group-hover:h-6 group-hover:w-6" />
      <span className="absolute bottom-4 left-4 h-4 w-4 border-l border-b border-gold/60 transition-all duration-300 group-hover:h-6 group-hover:w-6" />
      <span className="absolute bottom-4 right-4 h-4 w-4 border-r border-b border-gold/60 transition-all duration-300 group-hover:h-6 group-hover:w-6" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className={`h-px bg-gold mb-3 transition-all duration-500 ${active ? "w-12" : "w-6"}`} />
        <p className="font-display text-2xl md:text-3xl text-ivory leading-tight">{label}</p>
      </div>
      <div className="absolute top-6 right-6 transition-opacity duration-300" style={{ opacity: active ? 1 : 0 }}>
        <div className="w-8 h-8 border border-gold/70 flex items-center justify-center"><span className="text-gold text-xs ml-0.5">▶</span></div>
      </div>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>(".reveal");
    els.forEach((el) => {
      gsap.fromTo(el, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
    });
  }, []);
}

function SectionHeader({ chapter, title, kicker }: { chapter: string; title: string; kicker: string }) {
  return (
    <div className="reveal mb-16 md:mb-24">
      <p className="text-[10px] tracking-luxury uppercase text-luxe-eyebrow mb-3">— {chapter}</p>
      <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-luxe-section">{title}</h2>
      <p className="mt-5 max-w-xl text-sm text-ivory/55 leading-relaxed font-display italic">{kicker}</p>
    </div>
  );
}

function Work() {
  useReveal();
  return (
    <section id="work" className="relative px-6 md:px-12 py-28 md:py-40">
      <SectionHeader chapter="Chapter 01 · The Work" title="Selected films & campaigns" kicker="A reel of editorial work made for brands that refuse the ordinary. Hover to play." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {projects.map((p) => <VideoTile key={p.title} {...p} />)}
      </div>
    </section>
  );
}

function ManifestoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const lines = ref.current.querySelectorAll("[data-line]");
    gsap.fromTo(lines, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "expo.out", stagger: 0.15, scrollTrigger: { trigger: ref.current, start: "top 80%" } });
  }, []);
  return (
    <div ref={ref} className="relative w-full overflow-hidden py-24 md:py-36 border-y border-gold/15">
      <video src={crown.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
        <p data-line className="text-[10px] tracking-luxury uppercase text-gold/70 mb-8">✦ The Manifesto ✦</p>
        <p data-line className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-luxe-section mb-6">&ldquo;You&rsquo;re nobody</p>
        <p data-line className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-luxe-hero mb-6">until somebody</p>
        <p data-line className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-luxe-section">talks about you.&rdquo;</p>
        <p data-line className="mt-10 text-[10px] tracking-luxury uppercase text-ivory/40">— Gossip Girl · Upper East Side Rules Apply</p>
      </div>
    </div>
  );
}

function Services() {
  useReveal();
  return (
    <section id="services" className="relative px-6 md:px-12 py-28 md:py-40 border-t border-gold/15">
      <SectionHeader chapter="Chapter 02 · The Craft" title="Disciplines of the studio" kicker="Four practices, one unmistakable voice — engineered to make brands feel inevitable." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
        {services.map((s) => (
          <div key={s.n} data-hover className="reveal group relative bg-black p-10 md:p-14 transition-colors duration-500 hover:bg-neutral-950 overflow-hidden">
            <span className="font-display text-[120px] md:text-[160px] leading-none text-gold/8 absolute -top-6 right-6 select-none">{s.n}</span>
            <div className="absolute bottom-0 left-0 h-px bg-gold transition-all duration-700 w-0 group-hover:w-full" />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl mb-4 text-luxe-section">{s.title}</h3>
              <div className="h-px w-10 bg-gold transition-all duration-500 group-hover:w-24" />
              <p className="mt-5 text-sm text-ivory/65 leading-relaxed max-w-md">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  useReveal();
  return (
    <section id="about" className="relative px-6 md:px-12 py-28 md:py-40 border-t border-gold/15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        <div aria-hidden className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }} />
        <div className="reveal">
          <p className="text-[10px] tracking-luxury uppercase text-luxe-eyebrow mb-3">— Chapter 03 · The Studio</p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8 text-luxe-section">Born from Darkness <span className="italic text-luxe-italic">&</span> Precision</h2>
          <div className="space-y-5 text-ivory/70 leading-relaxed text-[15px]">
            <p>Noir Muse is a luxury creative studio working at the seam of art direction and generative imaging — building films and stills that feel less like content and more like a held breath.</p>
            <p>We work with fragrance houses, beauty maisons and brands who treat aesthetic as architecture. Every frame is engineered: lighting, palette, composition, gesture — nothing accidental, nothing safe.</p>
            <p>The studio is led by <span className="text-ivory font-display italic text-lg">Dishini Ashmitha</span> — a creative director who treats prompts the way a cinematographer treats light.</p>
          </div>
          <p className="font-display italic text-3xl text-luxe-italic mt-10">— Dishini Ashmitha</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["AI Prompt Engineering", "Three.js", "GSAP", "React", "CapCut", "Creative Direction"].map((t) => (
              <span key={t} className="text-[10px] tracking-luxury uppercase border border-gold/30 px-3 py-1.5 text-ivory/70 hover:border-gold/60 hover:text-gold transition-colors duration-300">{t}</span>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="relative aspect-[3/4] max-w-md ml-auto">
            <div className="absolute -top-5 -left-5 right-10 bottom-10 border border-gold/40" />
            <div className="absolute -top-2 -left-2 right-12 bottom-12 border border-gold/20" />
            <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-neutral-950">
              <video src={statement.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
              <video src={lotus.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-0 hover:opacity-60 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            </div>
            <div className="absolute -bottom-4 left-8 bg-gold text-black px-4 py-2 text-[10px] tracking-luxury uppercase">Dishini Ashmitha · Studio</div>
          </div>
        </div>
      </div>
      <div className="reveal mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/15 border-y border-gold/15">
        {[["50+","Luxury Visuals"],["4+","Campaign Series"],["100%","AI Engineered"],["∞","Dark Glamour"]].map(([n, l]) => (
          <div key={l} className="bg-black px-6 py-10 text-center group hover:bg-neutral-950 transition-colors duration-300">
            <div className="font-display text-5xl md:text-6xl text-gold group-hover:animate-shimmer">{n}</div>
            <div className="mt-3 text-[10px] tracking-luxury uppercase text-ivory/60">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-6 md:px-12 py-28 md:py-44 border-t border-gold/15 overflow-hidden">
      <video src={rose.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <video src={elixir.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" style={{ mixBlendMode: "screen" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <p className="reveal text-[10px] tracking-luxury uppercase text-luxe-eyebrow mb-4">— Chapter 04 · The Invitation</p>
        <h2 className="reveal font-display text-5xl md:text-7xl leading-[0.95] text-luxe-section">Begin Your <span className="italic text-luxe-italic">Obsession</span></h2>
        <p className="reveal mt-6 font-display italic text-sm md:text-base text-ivory/60 max-w-md mx-auto">&ldquo;Every empire begins with one extraordinary vision.&rdquo;</p>
        <p className="reveal mt-3 text-sm text-ivory/50 max-w-sm mx-auto">Tell us about the brand, the season, the feeling. We'll write back with a vision.</p>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="reveal mt-14 space-y-7 text-left">
          {[{ name: "name", label: "Your Name", type: "text" }, { name: "email", label: "Email Address", type: "email" }, { name: "brand", label: "Brand · Project · Vision", type: "text" }].map((f) => (
            <div key={f.name} className="group">
              <label className="block text-[10px] tracking-luxury uppercase text-ivory/40 mb-2 group-focus-within:text-gold transition-colors">{f.label}</label>
              <input required type={f.type} name={f.name} className="w-full bg-transparent border-b border-gold/20 py-3 text-ivory placeholder:text-ivory/20 focus:border-gold focus:outline-none transition-colors text-sm" />
            </div>
          ))}
          <div className="group">
            <label className="block text-[10px] tracking-luxury uppercase text-ivory/40 mb-2 group-focus-within:text-gold transition-colors">Your Vision</label>
            <textarea required rows={4} name="message" className="w-full bg-transparent border-b border-gold/20 py-3 text-ivory placeholder:text-ivory/20 focus:border-gold focus:outline-none transition-colors resize-none text-sm" />
          </div>
          <button type="submit" data-hover className="w-full bg-gold text-black py-5 text-[11px] tracking-luxury uppercase font-medium hover:bg-gold-soft transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">{sent ? "✦ Brief Received — We'll Be In Touch ✦" : "Send the Brief"}</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-700 skew-x-12" />
          </button>
        </form>
        <div className="reveal mt-16 flex justify-center gap-8 text-[10px] tracking-luxury uppercase text-ivory/50">
          {[{ label: "Instagram", href: "https://instagram.com" }, { label: "TikTok", href: "https://tiktok.com" }, { label: "LinkedIn", href: "https://linkedin.com/in/dishini-ashmitha" }, { label: "GitHub", href: "https://github.com/Ashmitha-2006" }].map((s) => (
            <a key={s.label} data-hover href={s.href} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-14 border-t border-gold/15 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C60, #C9A84C, #C9A84C60, transparent)" }} />
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl text-luxe-ivory tracking-tight">Noir</span>
          <span className="font-display italic text-3xl text-luxe-hero">Muse</span>
        </div>
        <p className="font-display italic text-ivory/40 text-base tracking-wide">Where darkness meets desire.</p>
        <p className="text-[10px] tracking-luxury uppercase text-ivory/35">© {new Date().getFullYear()} · Dishini Ashmitha</p>
      </div>
    </footer>
  );
}
