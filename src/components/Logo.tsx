import React, { useState } from 'react';

interface LogoProps {
  variant?: 'navbar' | 'hero' | 'footer' | 'badge';
  className?: string;
  customSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', className = '', customSrc }) => {
  const [hasError, setHasError] = useState(false);
  const logoPath = customSrc || "/assets/images/logo.svg";

  // Ukuran wadah proporsional
  const dimensions = {
    navbar: {
      container: "h-12 px-3 py-1",
      imgH: "h-9",
    },
    hero: {
      container: "h-24 sm:h-28 px-5 py-2.5 shadow-md",
      imgH: "h-20 sm:h-24",
    },
    footer: {
      container: "h-16 px-4 py-1.5",
      imgH: "h-13",
    },
    badge: {
      container: "h-28 px-6 py-3 shadow-md",
      imgH: "h-22",
    }
  }[variant];

  return (
    <div
      className={`inline-flex items-center justify-center bg-white rounded-md border border-[#F0E8D8] transition-all duration-300 ${dimensions.container} ${className}`}
      title="ADAGIUM — COFFEE & LAW FIRM"
    >
      {!hasError ? (
        <img
          src={logoPath}
          alt="ADAGIUM — COFFEE & LAW FIRM Official Logo"
          className={`${dimensions.imgH} w-auto object-contain select-none`}
          onError={() => setHasError(true)}
          loading="eager"
        />
      ) : (
        /* Fallback SVG Resmi yang presisi sesuai foto asli */
        <div className="flex items-center gap-2.5 select-none">
          <svg
            width={variant === 'hero' ? 48 : variant === 'footer' ? 36 : 30}
            height={variant === 'hero' ? 48 : variant === 'footer' ? 36 : 30}
            viewBox="0 0 100 100"
            fill="none"
            className="shrink-0"
          >
            <rect x="2" y="2" width="96" height="96" rx="4" stroke="#39251D" strokeWidth="2.5" fill="#FFFFFF" />
            <line x1="16" y1="20" x2="84" y2="20" stroke="#E5BE38" strokeWidth="4" strokeLinecap="round" />
            <circle cx="16" cy="20" r="3" fill="#E5BE38" />
            <circle cx="84" cy="20" r="3" fill="#E5BE38" />
            
            {/* Left Scales */}
            <line x1="28" y1="22" x2="18" y2="40" stroke="#E5BE38" strokeWidth="1.8" />
            <line x1="28" y1="22" x2="38" y2="40" stroke="#E5BE38" strokeWidth="1.8" />
            <line x1="16" y1="40" x2="40" y2="40" stroke="#E5BE38" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="45" x2="42" y2="45" stroke="#E5BE38" strokeWidth="2.5" strokeLinecap="round" />

            {/* Right Scales */}
            <line x1="72" y1="22" x2="62" y2="40" stroke="#E5BE38" strokeWidth="1.8" />
            <line x1="72" y1="22" x2="82" y2="40" stroke="#E5BE38" strokeWidth="1.8" />
            <line x1="60" y1="40" x2="84" y2="40" stroke="#E5BE38" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="45" x2="86" y2="45" stroke="#E5BE38" strokeWidth="2.5" strokeLinecap="round" />

            {/* Monogram A/M */}
            <path d="M40 26 L40 68 L45 72 L45 26 Z" fill="#E5BE38" />
            <path d="M60 26 L60 68 L55 72 L55 26 Z" fill="#E5BE38" />
            <path d="M45 26 L50 38 L55 26 L50 44 Z" fill="#E5BE38" />
            <rect x="47.5" y="44" width="5" height="26" fill="#E5BE38" />
            <path d="M45 70 L50 80 L55 70 Z" fill="#E5BE38" />
          </svg>

          <div className="flex flex-col justify-center text-left leading-none">
            <span className="font-serif-heading font-black tracking-[0.14em] text-[#39251D] text-sm sm:text-base">
              ADAGIUM
            </span>
            <span className="font-editorial font-bold tracking-[0.2em] text-[#39251D] text-[8px] sm:text-[9px] mt-0.5">
              —COFFEE &amp; LAW FIRM—
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
