import { useParams } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const companiesData: Record<string, {
  name: string;
  category: string;
  color: string;
  description: string;
  website: string;
  whyPartnered: string;
}> = {
  studom: {
    name: 'STUDOM',
    category: 'Education',
    color: '#8B6F5E',
    description: 'Studom is a platform that helps students discover and compare universities in one place. It simplifies the search process by bringing together clear and structured information, allowing students to explore different options and understand what suits them best. By making information easy to access and compare, Studom helps students make more confident and informed decisions about their higher education journey.',
    website: 'Studom.co',
    whyPartnered: 'We partnered with Studom because it brings everything students need into one place, something no other platform currently offers. Its unique, all in one approach makes discovering and comparing universities simpler, clearer, and more accessible.',
  },
  unistyle: {
    name: 'UNISTYLE',
    category: 'Merchandise',
    color: '#7A7A7A',
    description: 'UniStyle helps students represent their universities through curated merchandise. It offers a unique way for students to show pride in their educational institutions with quality products.',
    website: 'Unistyle.co',
    whyPartnered: 'UniStyle taps into the powerful sense of identity and belonging that students feel toward their universities, creating a brand that resonates emotionally.',
  },
  'daily-daily': {
    name: 'DAILY DAILY',
    category: 'Subscription',
    color: '#7A7A7A',
    description: 'Dialy Dialy delivers daily essentials through simple subscriptions. It takes the hassle out of remembering to buy everyday items.',
    website: 'Dailydaily.co',
    whyPartnered: 'Daily Daily addresses a genuine pain point in urban living - the inconvenience of procuring daily essentials. Their subscription model creates predictable revenue.',
  },
  stintern: {
    name: 'STINTERN',
    category: 'Education/HR',
    color: '#8B4A6B',
    description: 'Stintern connects students with internships and real work opportunities. It bridges the gap between academic learning and professional experience.',
    website: 'Stintern.co',
    whyPartnered: 'Stintern solves the classic chicken-and-egg problem for students - needing experience to get experience. Their platform creates genuine pathways.',
  },
  flagit: {
    name: 'FLAGIT',
    category: 'Civic Tech',
    color: '#8B6F5E',
    description: 'Flagit lets users report road violations by capturing and submitting them easily. It empowers citizens to contribute to road safety.',
    website: 'Flagit.app',
    whyPartnered: 'Flagit channels citizen frustration about road safety into actionable data. Their approach turns everyday citizens into agents of change.',
  },
  datamatic: {
    name: 'DATAMATIC',
    category: 'Data/Analytics',
    color: '#8B4A6B',
    description: 'Datamatic provides complete data and insights on companies in one place. It aggregates and analyzes business intelligence.',
    website: 'Datamatic.io',
    whyPartnered: 'Datamatic addresses the fragmentation of business intelligence data. Their unified approach saves researchers and decision-makers countless hours.',
  },
  allperspectives: {
    name: 'ALLPERSPECTIVES',
    category: 'Media',
    color: '#7A7A7A',
    description: 'All Perspective is a filmmaking company that creates stories from diverse perspectives. It champions underrepresented voices in cinema.',
    website: 'Allperspectives.com',
    whyPartnered: 'All Perspectives brings much-needed diversity to storytelling. Their commitment to amplifying marginalized voices aligns with our mission.',
  },
};

export default function CompanyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const company = companiesData[slug || ''] || companiesData['studom'];

  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#FFEB3B', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              {company.name}
            </h1>
            <div className="relative inline-block mb-8">
              <span className="text-lg font-medium">{company.category}</span>
              <svg className="absolute -bottom-1 left-0 w-full" style={{ height: '4px' }} viewBox="0 0 80 4" fill="none" preserveAspectRatio="none">
                <path d="M1 2 Q15 1 30 2 Q45 3 60 2 Q70 1 79 2" stroke="#FFEB3B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-base leading-relaxed mb-8" style={{ color: '#1A1A1A' }}>
              {company.description}
            </p>

            <div className="flex items-center gap-6 mb-12">
              <a href="#" className="text-base font-medium" style={{ color: '#1A1A1A' }}>
                <span className="underline" style={{ color: '#FFEB3B', textDecorationColor: '#FFEB3B' }}>{company.website}</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">WHY WE PARTNERED?</h3>
              <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                {company.whyPartnered}
              </p>
            </div>
          </div>

          {/* Right Column - Card + Form */}
          <div>
            {/* Color Card */}
            <div
              className="w-full aspect-square rounded-lg mb-8"
              style={{ backgroundColor: company.color }}
            />

            {/* Connect Form */}
            <div className="border border-[#1A1A1A] rounded-lg p-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-center mb-6">
                CONNECT WITH {company.name}!
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <input type="text" placeholder="Full Name" className="form-input-underline" />
                <input type="email" placeholder="Email" className="form-input-underline" />
                <input type="tel" placeholder="Phone Number" className="form-input-underline" />
                <input type="text" placeholder="Country" className="form-input-underline" />
                <input type="text" placeholder="City" className="form-input-underline" />
                <select className="form-input-underline bg-transparent cursor-pointer">
                  <option value="">Partnership type v</option>
                  <option value="investment">Investment</option>
                  <option value="partnership">Partnership</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
