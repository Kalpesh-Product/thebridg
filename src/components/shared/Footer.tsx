import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="w-full mt-16" style={{ backgroundColor: '#FFF0EB' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="w-full h-0.5" style={{ backgroundColor: '#1A1A1A' }} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {/* Column 1 - Logo */}
          <div>
            <Link to="/" className="text-3xl font-bold tracking-tight" style={{ color: '#1A1A1A' }}>
              BRIDG
            </Link>
          </div>

          {/* Column 2 - Address */}
          <div className="text-sm" style={{ color: '#1A1A1A' }}>
            <p className="font-semibold">BRIDG</p>
            <p className="mt-1">BIZ Nest Co-Working, Sunteck Kanika Park,</p>
            <p>Panjim, Goa - India 403001</p>
            <p className="mt-2">response@bridg.com</p>
          </div>

          {/* Column 3 - Links */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold uppercase tracking-wider cursor-default">ABOUT</span>
            <Link to="/careers" className="hover:opacity-70 transition-opacity font-semibold uppercase tracking-wider">CAREER</Link>
            <Link to="#" className="hover:opacity-70 transition-opacity font-semibold uppercase tracking-wider">FAQS</Link>
          </div>

          {/* Column 4 - Links */}
          <div className="flex flex-col gap-2 text-sm">
            <Link to="#" className="hover:opacity-70 transition-opacity font-semibold uppercase tracking-wider">PRIVACY</Link>
            <Link to="#" className="hover:opacity-70 transition-opacity font-semibold uppercase tracking-wider">T&C</Link>
            <Link to="#" className="hover:opacity-70 transition-opacity font-semibold uppercase tracking-wider">CONTACT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
