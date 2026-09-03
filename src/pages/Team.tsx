import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const teamMembers = [
  { slug: 'kabir', name: 'KABIR', color: '#505050', desc: 'Kabir is an enthusiastic entrepreneur at the start of his journey, building and exploring new ideas.' },
  { slug: 'abrar', name: 'ABRAR', color: '#784840', desc: 'Abrar is an entrepreneur with 10+ years as a founder and 15+ years of experience building startups from scratch.' },
  { slug: 'kalpesh', name: 'Kalpesh', color: '#780048', desc: 'Kalpesh is a UI/UX designer focused on creating clean, intuitive, and user friendly digital experiences.' },
  { slug: 'rehana', name: 'Rehana', color: '#707070', desc: 'Rehana collects, organizes, and manages data to ensure accuracy and support informed decision making.' },
];

const advisors = [
  { name: 'ADVISOR ONE', color: '#505050', desc: 'Placeholder advisor bio. Add real advisor details here.' },
  { name: 'ADVISOR TWO', color: '#784840', desc: 'Placeholder advisor bio. Add real advisor details here.' },
  { name: 'ADVISOR THREE', color: '#780048', desc: 'Placeholder advisor bio. Add real advisor details here.' },
  { name: 'ADVISOR FOUR', color: '#707070', desc: 'Placeholder advisor bio. Add real advisor details here.' },
];

export default function Team() {
  return (
    <PageLayout>
      <div className="pt-8 md:pt-10 pb-16 px-6 md:px-10">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8 md:mb-10 tracking-wider">CORE TEAM</h1>
        {/* Team Cards Grid */}
        <div className="flex flex-wrap justify-center gap-y-16 md:gap-y-24 gap-x-20 md:gap-x-36 lg:gap-x-48">
          {teamMembers.map((member) => (
            <Link
              to={`/team/${member.slug}`}
              key={member.slug}
              className="group block w-full md:w-[calc(50%-3rem)] max-w-[520px] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="aspect-[1/1.1] flex flex-col justify-end p-8 relative"
                style={{ backgroundColor: member.color }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#00A868] uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-lg md:text-xl mt-4 text-[#00A868] leading-relaxed max-w-[380px]">
                  {member.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <hr className="border-t-2 border-[#BBBBBB] my-16 md:my-20" />

        <h1 className="text-3xl md:text-4xl font-light text-center mb-8 md:mb-10 tracking-wider">OUR ADVISOR</h1>
        {/* Advisor Cards Grid */}
        <div className="flex flex-wrap justify-center gap-y-16 md:gap-y-24 gap-x-20 md:gap-x-36 lg:gap-x-48">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="block w-full md:w-[calc(50%-3rem)] max-w-[520px] rounded-2xl overflow-hidden"
            >
              <div
                className="aspect-[1/1.1] flex flex-col justify-end p-8 relative"
                style={{ backgroundColor: advisor.color }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#00A868] uppercase tracking-wide">
                  {advisor.name}
                </h3>
                <p className="text-lg md:text-xl mt-4 text-[#00A868] leading-relaxed max-w-[380px]">
                  {advisor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
