import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const companies = [
  { slug: 'studom', name: 'STUDOM', desc: 'Studom helps students discover, compare, and apply to universities in one place.' },
  { slug: 'unistyle', name: 'UNISTYLE', desc: 'UniStyle brings official school uniforms and university merchandise into one place.' },
  { slug: 'daily-daily', name: 'DAILY DAILY', desc: 'Daily Daily helps people subscribe to and receive everyday essentials from local stores.' },
  { slug: 'stintern', name: 'STINTERN', desc: 'Stintern helps students discover and apply for internships in one place.' },
  { slug: 'flagit', name: 'FLAGIT', desc: 'Flagit lets people report road and traffic violations in a simple, responsible way.' },
  { slug: 'datamatic', name: 'DATAMATIC', desc: 'Datamatic helps businesses discover and access structured company information in one place.' },
  { slug: 'allperspectives', name: 'ALL PERSPECTIVES', desc: 'Allperspectives explores the different perspectives people experience in everyday relationships.' },
];

export default function CompaniesList() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16 px-6 md:px-10">
        {/* View Toggle */}
        <div className="flex gap-8 mb-8">
          <Link to="/companies" className="text-sm font-medium uppercase tracking-wider text-[#666] hover:text-[#1A1A1A] transition-colors">
            GRID VIEW
          </Link>
          <span className="text-sm font-medium uppercase tracking-wider relative">
            LIST VIEW
            <svg className="absolute -bottom-1 left-0 w-full" style={{ height: '4px' }} viewBox="0 0 60 4" fill="none" preserveAspectRatio="none">
              <path d="M1 2 Q10 1 20 2 Q30 3 40 2 Q50 1 59 2" stroke="#FFEB3B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 pb-4 border-b-2 border-[#1A1A1A] text-center">
          <span className="text-sm font-semibold uppercase tracking-wider">COMPANY NAME</span>
          <span className="text-sm font-semibold uppercase tracking-wider">SHORT DESCRIPTION</span>
          <span className="text-sm font-semibold uppercase tracking-wider">CURRENT STAGE</span>
        </div>

        {/* Table Rows */}
        {companies.map((company) => (
          <Link
            to={`/company/${company.slug}`}
            key={company.slug}
            className="grid grid-cols-3 gap-4 py-8 border-b-2 border-[#1A1A1A] items-center text-center hover:bg-black/5 transition-colors -mx-4 px-4"
          >
            <span className="text-base font-normal uppercase">{company.name}</span>
            <span className="text-xs text-[#1A1A1A]">{company.desc}</span>
            <span className="text-sm font-medium uppercase tracking-wider">EARLY</span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
