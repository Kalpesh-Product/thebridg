import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const companies = [
  { slug: 'studom', name: 'STUDOM', color: '#784840', image: '/assets/Studom.jpeg', desc: 'Studom helps students discover, compare, and apply to universities in one place.' },
  { slug: 'unistyle', name: 'UNISTYLE', color: '#707070', image: '/assets/UniStyle.jpeg', desc: 'UniStyle brings official school uniforms and university merchandise into one place.' },
  { slug: 'daily-daily', name: 'DAILY DAILY', color: '#505050', image: '/assets/Daily%20Daily.jpeg', desc: 'Daily Daily helps people subscribe to and receive everyday essentials from local stores.' },
  { slug: 'stintern', name: 'STINTERN', color: '#780048', desc: 'Stintern helps students discover and apply for internships in one place.' },
  { slug: 'flagit', name: 'FLAGIT', color: '#784840', desc: 'Flagit lets people report road and traffic violations in a simple, responsible way.' },
  { slug: 'datamatic', name: 'DATAMATIC', color: '#780048', desc: 'Datamatic helps businesses discover and access structured company information in one place.' },
  { slug: 'allperspectives', name: 'ALLPERSPECTIVES', color: '#707070', desc: 'Allperspectives explores the different perspectives people experience in everyday relationships.' },
];

export default function Companies() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16 px-6 md:px-10">
        {/* View Toggle */}
        <div className="flex gap-8 mb-8">
          <span className="text-sm font-medium uppercase tracking-wider relative">
            GRID VIEW
            <svg className="absolute -bottom-1 left-0 w-full" style={{ height: '4px' }} viewBox="0 0 60 4" fill="none" preserveAspectRatio="none">
              <path d="M1 2 Q10 1 20 2 Q30 3 40 2 Q50 1 59 2" stroke="#00A868" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <Link to="/companies-list" className="text-sm font-medium uppercase tracking-wider text-[#666] hover:text-[#1A1A1A] transition-colors">
            LIST VIEW
          </Link>
        </div>

        {/* Company Banners */}
        <div className="flex flex-col gap-10">
          {companies.map((company) => (
            <Link
              to={`/company/${company.slug}`}
              key={company.slug}
              className="group block"
            >
              {/* Full-bleed photo/color banner, ignores the page's side padding */}
              <div className="relative left-1/2 -translate-x-1/2 w-screen">
                <div
                  className="w-full aspect-[9/4] flex items-start p-6 md:p-10 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ backgroundColor: company.color }}
                >
                  {company.image && (
                    <img
                      src={company.image}
                      alt={company.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <h3 className="relative z-10 text-4xl md:text-6xl font-bold text-[#1A1A1A] uppercase tracking-wide">
                    {company.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-start justify-between gap-6 mt-6">
                <p className="text-2xl md:text-3xl max-w-2xl" style={{ color: '#00A868' }}>
                  {company.desc}
                </p>
                <span
                  className="text-2xl md:text-3xl font-medium uppercase tracking-wide text-right whitespace-nowrap shrink-0"
                  style={{ color: '#00A868' }}
                >
                  WORK IN<br />PROGRESS
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
