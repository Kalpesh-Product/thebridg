import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface LiquidSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
}

export default function LiquidSelect({ value, onChange, options, placeholder }: LiquidSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="form-input-underline flex items-center justify-between gap-2 cursor-pointer text-left"
      >
        <span className={selected ? '' : 'text-[#999]'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown size={16} className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-full min-w-[200px] z-50 rounded-2xl border overflow-hidden animate-liquid-glass-in"
          style={{
            borderColor: 'rgba(255,255,255,0.6)',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(14px) saturate(180%)',
            WebkitBackdropFilter: 'blur(14px) saturate(180%)',
            boxShadow:
              'inset 0 1px 1px rgba(255,255,255,0.95), inset 0 -14px 24px rgba(255,255,255,0.2), inset 0 0 0 1px rgba(255,255,255,0.35), 0 10px 30px rgba(0,0,0,0.18)',
          }}
        >
          {/* Bright specular rim along the top edge */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />
          {/* Soft top sheen */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
          {/* Diagonal refraction-style shine */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 32%, rgba(255,255,255,0) 68%, rgba(255,255,255,0.25) 100%)',
            }}
          />
          <div className="relative py-2 max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-[#1A1A1A] hover:bg-white/50 transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
