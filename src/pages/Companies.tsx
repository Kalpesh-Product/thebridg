import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const companies = [
  { slug: 'studom', name: 'STUDOM', color: '#8B6F5E', desc: 'Studom helps students discover and choose the right universities.' },
  { slug: 'unistyle', name: 'UNISTYLE', color: '#7A7A7A', desc: 'Unistyle helps students represent their universities through curated merchandise.' },
  { slug: 'daily-daily', name: 'DAILY DAILY', color: '#7A7A7A', desc: 'Dialy Dialy delivers daily essentials through simple subscriptions.' },
  { slug: 'stintern', name: 'STINTERN', color: '#8B4A6B', desc: 'Stintern connects students with internships and real work opportunities.' },
  { slug: 'flagit', name: 'FLAGIT', color: '#8B6F5E', desc: 'Flagit lets users report road violations by capturing and submitting them easily.' },
  { slug: 'datamatic', name: 'DATAMATIC', color: '#8B4A6B', desc: 'Datamatic provides complete data and insights on companies in one place' },
  { slug: 'allperspectives', name: 'ALLPERSPECTIVES', color: '#7A7A7A', desc: 'All Perspective is a filmmaking company that creates stories from diverse perspectives.' },
];

export default function Companies() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        {/* View Toggle */}
        <div className="flex gap-8 mb-8">
          <span className="text-sm font-medium uppercase tracking-wider relative">
            GRID VIEW
            <svg className="absolute -bottom-1 left-0 w-full" style={{ height: '4px' }} viewBox="0 0 60 4" fill="none" preserveAspectRatio="none">
              <path d="M1 2 Q10 1 20 2 Q30 3 40 2 Q50 1 59 2" stroke="#FFEB3B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <Link to="/companies-list" className="text-sm font-medium uppercase tracking-wider text-[#666] hover:text-[#1A1A1A] transition-colors">
            LIST VIEW
          </Link>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <Link
              to={`/company/${company.slug}`}
              key={company.slug}
              className={`group block rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                index === companies.length - 1 ? 'md:col-span-1' : ''
              }`}
            >
              <div
                className="aspect-[1/1.1] flex flex-col justify-end p-6 relative"
                style={{ backgroundColor: company.color }}
              >
                <h3 className="text-2xl font-bold text-[#FFEB3B] uppercase tracking-wide">
                  {company.name}
                </h3>
                <p className="text-sm mt-2 text-white/90 leading-relaxed max-w-[280px]">
                  {company.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
