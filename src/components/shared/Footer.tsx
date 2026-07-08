import { Link } from 'react-router';

export default function Footer({ noGap }: { noGap?: boolean }) {
  return (
    <footer className={noGap ? 'w-full' : 'w-full mt-16'} style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {!noGap && <div className="w-full h-0.5" style={{ backgroundColor: '#1A1A1A' }} />}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-3 md:py-6">
          {/* Left group - Logo + Address */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div>
              <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#1A1A1A' }}>
                BRIDG
              </Link>
            </div>

            <div className="font-serif text-xs" style={{ color: '#1A1A1A' }}>
              <p className="font-semibold">BRIDG</p>
              <p className="mt-1">BIZ Nest Co-Working, Sunteck Kanika Park,</p>
              <p>Panjim, Goa - India 403001</p>
              <p className="mt-2">response@bridg.com</p>
            </div>
          </div>

          {/* Right group - Links */}
          <div className="flex gap-8 md:gap-12">
            <div className="flex flex-col gap-2 text-xs">
              <span className="font-serif font-semibold uppercase tracking-wider cursor-default">ABOUT</span>
              <Link to="/careers" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">CAREER</Link>
              <Link to="#" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">FAQS</Link>
            </div>

            <div className="flex flex-col gap-2 text-xs">
              <Link to="#" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">PRIVACY</Link>
              <Link to="#" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">T&C</Link>
              <Link to="#" className="hover:opacity-70 transition-opacity font-serif font-semibold uppercase tracking-wider">CONTACT</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
