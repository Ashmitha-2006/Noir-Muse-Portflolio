import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-gold/25 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-baseline gap-1">
          <span className="font-display text-2xl tracking-tight">Noir</span>
          <span className="font-display italic text-2xl text-gold">Muse</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-luxury uppercase text-ivory/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-[11px] tracking-luxury uppercase border border-gold/60 text-gold px-4 py-2 hover:bg-gold hover:text-black transition-colors"
        >
          Brief Us
        </a>
      </div>
    </nav>
  );
}