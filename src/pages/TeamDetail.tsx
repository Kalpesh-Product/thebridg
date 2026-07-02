import { useParams } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const teamData: Record<string, {
  name: string;
  color: string;
  bio: string;
  hobbies: string;
  socials: Array<{ type: 'linkedin' | 'x'; url: string }>;
}> = {
  kabir: {
    name: 'KABIR',
    color: '#8B6F5E',
    bio: `Kabir is an undergraduate student at the University of Birmingham Dubai with a strong passion for Investment Banking, Venture Capital, entrepreneurship and building projects from scratch. He is deeply interested in creating impactful platforms and ecosystems that empower students and young entrepreneurs to take risks earlier and build meaningful ventures. Through his exposure to startups, business ecosystems and real world projects, he aims to bridge innovation, technology and community driven impact into scalable long term ventures that create lasting value.`,
    hobbies: `Outside of work and academics, Kabir is deeply passionate about birds, cats and caring for animals. He enjoys watching and deep diving into Formula 1, and as a fun fact, greatly admires the way Harvey Specter carries himself in the tv show Suits.`,
    socials: [{ type: 'linkedin', url: '#' }, { type: 'x', url: '#' }],
  },
  abrar: {
    name: 'ABRAR',
    color: '#8B6F5E',
    bio: `Abrar is a seasoned entrepreneur with close to 15 years of experience of building startups from scratch and 10+ years of experience as a founder. He has been instrumental and was part of the inception teams which designed the initial Ad-Tech ecosystem via Komli Media and later the TV analog industry which transformed into digitalised TV Guide in India. As a founder he also launched India's Premier Location Based Discount Search Engine Squeakee and was instrumental in on-boarding and digitalising thousands of local merchants via its proprietary SaaS based platform which was later acquired by ShopClues. Currently he is living the life that he feels happy about and building an ecosystem around the same.`,
    hobbies: `Abrar has a deep passion for watches and enjoys collecting everything from retro and mechanical pieces to timeless classics. He is also passionate about vintage cars and values spending meaningful and quality time with his family above everything else.`,
    socials: [{ type: 'x', url: '#' }, { type: 'linkedin', url: '#' }],
  },
  kalpesh: {
    name: 'Kalpesh',
    color: '#8B4A6B',
    bio: `Kalpesh is a talented UI/UX designer with a keen eye for detail and a passion for creating intuitive digital experiences. He brings a user-centered approach to every project, ensuring that designs are both aesthetically pleasing and functionally effective. His expertise spans across web and mobile platforms.`,
    hobbies: `Kalpesh loves exploring new design trends and tools. He enjoys sketching, photography, and finding inspiration in everyday objects and architecture.`,
    socials: [{ type: 'linkedin', url: '#' }, { type: 'x', url: '#' }],
  },
  rehana: {
    name: 'Rehana',
    color: '#7A7A7A',
    bio: `Rehana is a meticulous data professional who ensures the accuracy and integrity of information across all operations. With her analytical mindset and attention to detail, she plays a crucial role in supporting informed decision-making throughout the organization.`,
    hobbies: `Rehana enjoys reading, solving puzzles, and exploring new cuisines. She finds joy in organizing community events and spending time with her close-knit circle of friends.`,
    socials: [{ type: 'linkedin', url: '#' }, { type: 'x', url: '#' }],
  },
};

export default function TeamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const member = teamData[slug || ''] || teamData['kabir'];

  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#FFEB3B', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              {member.name}
            </h1>

            <p className="text-base leading-relaxed mb-8" style={{ color: '#1A1A1A' }}>
              {member.bio}
            </p>

            <div className="flex items-center gap-4 mb-12">
              {member.socials.map((social) => (
                <a key={social.type} href={social.url} className="w-10 h-10 rounded-full border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors">
                  {social.type === 'linkedin' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">PERSONAL HOBBIES!</h3>
              <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                {member.hobbies}
              </p>
            </div>
          </div>

          {/* Right Column - Card + Form */}
          <div>
            <div
              className="w-full aspect-[4/3] rounded-lg mb-8"
              style={{ backgroundColor: member.color }}
            />

            <div className="border border-[#1A1A1A] rounded-lg p-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-center mb-6">
                CONNECT WITH {member.name}!
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <input type="text" placeholder="Full Name" className="form-input-underline" />
                <input type="email" placeholder="Email" className="form-input-underline" />
                <input type="tel" placeholder="Phone Number" className="form-input-underline" />
                <input type="text" placeholder="Country" className="form-input-underline" />
                <input type="text" placeholder="City" className="form-input-underline" />
                <input type="text" placeholder="A Brief Message" className="form-input-underline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
