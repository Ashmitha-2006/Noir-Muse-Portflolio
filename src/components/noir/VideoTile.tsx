import { useRef, useState, type MouseEvent } from "react";

type Props = {
  src: string;
  category: string;
  title: string;
  meta: string;
  description: string;
};

export function VideoTile({ src, category, title, meta, description }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const el = wrapRef.current;
    if (el) el.style.transform = `perspective(1200px) rotateY(0) rotateX(0)`;
    setHover(false);
    videoRef.current?.pause();
  };
  const onEnter = () => {
    setHover(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div
      data-hover
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="reveal group relative aspect-[3/4] overflow-hidden bg-neutral-950 border border-gold/15 transition-transform duration-300 will-change-transform"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-7">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-luxury uppercase text-gold">{category}</span>
          <span className="text-[10px] tracking-luxury uppercase text-ivory/50">{meta}</span>
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl leading-none">{title}</h3>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              hover ? "max-h-24 mt-3 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-xs text-ivory/70 leading-relaxed max-w-[28ch]">{description}</p>
            <div className="mt-3 h-px w-12 bg-gold" />
          </div>
        </div>
      </div>
      {/* corner brackets */}
      <span className="absolute top-3 left-3 h-3 w-3 border-l border-t border-gold/70" />
      <span className="absolute top-3 right-3 h-3 w-3 border-r border-t border-gold/70" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-l border-b border-gold/70" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-r border-b border-gold/70" />
    </div>
  );
}