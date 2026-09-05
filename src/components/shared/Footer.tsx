import { Link } from 'react-router';

export default function Footer({ noGap }: { noGap?: boolean }) {
  return (
    <footer className={noGap ? 'w-full' : 'w-full mt-16'} style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {!noGap && <div className="w-full h-0.5" style={{ backgroundColor: '#1A1A1A' }} />}
        <div className="relative flex flex-col gap-8 py-6 md:py-10 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl md:text-3xl font-normal tracking-tight" style={{ color: '#1A1A1A' }}>
              BRIDG
            </Link>
          </div>

          {/* Address - centered across the full footer width */}
          <div className="font-serif text-base md:text-lg md:absolute md:left-1/2 md:-translate-x-1/2" style={{ color: '#1A1A1A' }}>
            {/* <p className="font-semibold">BRIDG</p> */}
            <p className="mt-1">BIZ Nest Co-Working, Sunteck Kanaka Park,</p>
            <p>Panjim, Goa - India 403001</p>
            <p className="mt-2">response@bridg.com</p>
          </div>

          {/* Right group - Links */}
          <div className="flex gap-8 md:gap-20 md:mr-10 lg:mr-16">
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <Link to="/about" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">ABOUT</Link>
              <Link to="/careers" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">CAREER</Link>
              <Link to="/faq" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">FAQS</Link>
            </div>

            <div className="flex flex-col gap-2 text-sm md:text-base">
              <Link to="/privacy" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">PRIVACY</Link>
              <Link to="/terms" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">T&C</Link>
              <Link to="/contact" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">CONTACT</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }} />
        <div className="py-6 text-center">
          <p className="font-serif text-sm" style={{ color: '#666' }}>
            © Copyright 2026-27 BRIDG – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
