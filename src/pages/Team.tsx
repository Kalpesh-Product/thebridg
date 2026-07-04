import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const teamMembers = [
  { slug: 'kabir', name: 'KABIR', color: '#7A7A7A', desc: 'Kabir is an enthusiastic entrepreneur at the start of his journey, building and exploring new ideas.' },
  { slug: 'abrar', name: 'ABRAR', color: '#8B6F5E', desc: 'Abrar is an entrepreneur with 10+ years as a founder and 15+ years of experience building startups from scratch.' },
  { slug: 'kalpesh', name: 'Kalpesh', color: '#8B4A6B', desc: 'Kalpesh is a UI/UX designer focused on creating clean, intuitive, and user friendly digital experiences.' },
  { slug: 'rehana', name: 'Rehana', color: '#7A7A7A', desc: 'Rehana collects, organizes, and manages data to ensure accuracy and support informed decision making.' },
];

export default function Team() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16 px-6 md:px-10">
        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Link
              to={`/team/${member.slug}`}
              key={member.slug}
              className="group block rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="aspect-[1/1.1] flex flex-col justify-end p-6 relative"
                style={{ backgroundColor: member.color }}
              >
                <h3 className="text-xl font-bold text-[#FFEB3B] uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm mt-2 text-white/90 leading-relaxed max-w-[450px]">
                  {member.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
