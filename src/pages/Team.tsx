import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const teamMembers = [
  { slug: 'kabir', name: 'KABIR', color: '#505050', desc: 'Kabir is an enthusiastic entrepreneur at the start of his journey, building and exploring new ideas.' },
  { slug: 'abrar', name: 'ABRAR', color: '#784840', desc: 'Abrar is an entrepreneur with 10+ years as a founder and 15+ years of experience building startups from scratch.' },
  { slug: 'kalpesh', name: 'Kalpesh', color: '#780048', desc: 'Kalpesh is a UI/UX designer focused on creating clean, intuitive, and user friendly digital experiences.' },
  { slug: 'rehana', name: 'Rehana', color: '#707070', desc: 'Rehana collects, organizes, and manages data to ensure accuracy and support informed decision making.' },
];

export default function Team() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16 px-6 md:px-10">
        {/* Team Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <Link
              to={`/team/${member.slug}`}
              key={member.slug}
              className="group block w-full md:w-[calc(50%-1rem)] max-w-[520px] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="aspect-[1/1.1] flex flex-col justify-end p-8 relative"
                style={{ backgroundColor: member.color }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#00A868] uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-base md:text-lg mt-3 text-[#00A868] leading-relaxed max-w-[450px]">
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
