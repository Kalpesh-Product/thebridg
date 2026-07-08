import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const companies = [
  { slug: 'studom', name: 'STUDOM', color: '#784840', image: '/assets/Studom.jpeg', desc: 'Studom helps students discover and choose the right universities and schools. The platform brings together institution information, tuition fees, rankings, admissions, and direct applications in one place.' },
  { slug: 'unistyle', name: 'UNISTYLE', color: '#707070', image: '/assets/UniStyle.jpeg', desc: 'UniStyle creates premium university merchandise and school uniforms. Specialising in custom uniforms, apparel and merchandise, the company delivers high quality products for schools and universities.' },
  { slug: 'daily-daily', name: 'DAILY DAILY', color: '#505050', image: '/assets/Daily%20Daily.jpeg', desc: 'Daily Daily delivers daily essentials through simple subscriptions. The platform provides scheduled doorstep delivery of groceries, household essentials, and everyday products through flexible subscription plans.' },
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
                  className="w-full h-[420px] md:h-[560px] flex items-start p-6 md:p-10 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ backgroundColor: company.color }}
                >
                  {company.image && (
                    <img
                      src={company.image}
                      alt={company.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <h3 className="relative z-10 text-3xl md:text-5xl font-bold text-[#1A1A1A] uppercase tracking-wide">
                    {company.name}
                  </h3>
                </div>
              </div>

              {/* Meta row: description | divider | status, with a rule below */}
              <div className="grid grid-cols-1 md:grid-cols-[4fr_auto_1fr] gap-4 md:gap-10 mt-6 pb-8 border-b-2 border-[#BBBBBB]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#00A868' }}>
                    Company Description:
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                    {company.desc}
                  </p>
                </div>
                <div className="hidden md:block w-0.5 bg-[#BBBBBB]" />
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#00A868' }}>
                    Company Status:
                  </p>
                  <p className="text-sm md:text-base" style={{ color: '#1A1A1A' }}>
                    Work in progress
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
