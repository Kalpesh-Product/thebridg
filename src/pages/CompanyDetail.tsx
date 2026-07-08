import { useState } from 'react';
import { useParams } from 'react-router';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';

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
    color: '#784840',
    description: 'Studom is a platform that helps students discover, compare, and apply to universities in one place. It simplifies the search process by bringing together clear and structured information, allowing students to explore different options and understand what suits them best. By making information easy to access, compare, and apply through a single platform, Studom helps students make more confident and informed decisions about their higher education journey.',
    website: 'Studom.co',
    whyPartnered: 'We partnered with Studom because it brings everything students need into one place, something no other platform currently offers. Its unique, all in one approach makes discovering and comparing universities simpler, clearer, and more accessible.',
  },
  unistyle: {
    name: 'UNISTYLE',
    category: 'Merchandise',
    color: '#707070',
    description: 'UniStyle is a platform that brings official school uniforms and university merchandise into one place. It simplifies the buying process by offering authentic products through a single platform, making it easier for students, parents, alumni, and supporters to find what they need. By making official apparel more accessible, UniStyle helps institutions connect with their communities through products they can trust.',
    website: 'Unistyle.co',
    whyPartnered: 'We partnered with UniStyle because it brings official school uniforms and university merchandise together on one platform, something that is often fragmented today. Its focused approach makes finding and purchasing authentic institutional apparel simpler, more convenient, and more accessible.',
  },
  'daily-daily': {
    name: 'DAILY DAILY',
    category: 'Subscription',
    color: '#505050',
    description: 'Daily Daily is a platform that helps people subscribe to and receive everyday essentials from local stores in one place. It simplifies the shopping process by bringing together daily needs through a convenient subscription model, making regular purchases easier to manage. By making everyday shopping more reliable and hassle free, Daily Daily helps people save time while ensuring they never run out of the products they use most.',
    website: 'Dailydaily.co',
    whyPartnered: 'We partnered with Daily Daily because it makes purchasing everyday essentials simpler through a single subscription platform, something that is often time consuming to manage. Its convenient approach makes recurring shopping easier, more reliable, and more accessible.',
  },
  stintern: {
    name: 'STINTERN',
    category: 'Education/HR',
    color: '#780048',
    description: 'Stintern is a platform that helps students discover and apply for internships in one place. It simplifies the internship search process by bringing together opportunities from different companies, allowing students to explore roles that match their skills and career goals. By making internship opportunities easier to access and apply for, Stintern helps students gain valuable industry experience with greater confidence.',
    website: 'Stintern.co',
    whyPartnered: 'We partnered with Stintern because it bridges the gap between students and employers by making internship opportunities easier to discover and access. Its focused approach helps students gain practical experience while enabling companies to connect with emerging talent.',
  },
  flagit: {
    name: 'FLAGIT',
    category: 'Civic Tech',
    color: '#784840',
    description: 'Flagit is a platform that enables people to report road and traffic violations in a simple and responsible way. It allows users to submit photos of violations, which are verified before being forwarded to the relevant authorities for action. By making civic reporting more accessible and transparent, Flagit encourages safer roads while rewarding citizens for their genuine contributions.',
    website: 'Flagit.app',
    whyPartnered: 'We partnered with Flagit because it empowers citizens to play an active role in improving road safety through responsible reporting. Its community driven approach supports safer streets while encouraging greater public participation and accountability.',
  },
  datamatic: {
    name: 'DATAMATIC',
    category: 'Data/Analytics',
    color: '#780048',
    description: 'Datamatic is a platform that helps businesses discover and access structured company information in one place. It simplifies the research process by bringing together reliable corporate data, allowing users to explore companies, industries, and key business insights with ease. By making business information easier to access and understand, Datamatic helps users make more informed decisions with greater confidence.',
    website: 'Datamatic.io',
    whyPartnered: 'We partnered with Datamatic because it makes business information easier to discover through one structured platform, something that is often difficult to access and organize. Its data driven approach makes researching companies simpler, clearer, and more accessible.',
  },
  allperspectives: {
    name: 'ALLPERSPECTIVES',
    category: 'Relationships',
    color: '#707070',
    description: 'Allperspectives is a platform that explores the different perspectives people experience in everyday relationships. It brings together stories and experiences from multiple points of view, helping people better understand the thoughts, emotions, and challenges of others. By presenting different sides of the same relationship, Allperspectives encourages empathy, meaningful conversations, and deeper human connections.',
    website: 'Allperspectives.com',
    whyPartnered: 'We partnered with Allperspectives because it encourages people to see relationships through more than one perspective, something that is often overlooked. Its thoughtful approach promotes understanding, empathy, and more meaningful conversations across everyday life.',
  },
};

export default function CompanyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const company = companiesData[slug || ''] || companiesData['studom'];
  const [partnershipType, setPartnershipType] = useState('');

  return (
    <PageLayout>
      <div className="pt-16 md:pt-20 pb-16 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-10">
          {/* Row 1, Col 1 - Name/Description */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#00A868' }}>
              {company.name}
            </h1>
            <div className="relative inline-block mb-8">
              <span className="text-xl font-bold">{company.category}</span>
              <svg className="absolute -bottom-1 left-0 w-full" style={{ height: '4px' }} viewBox="0 0 80 4" fill="none" preserveAspectRatio="none">
                <path d="M1 2 Q15 1 30 2 Q45 3 60 2 Q70 1 79 2" stroke="#00A868" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#1A1A1A' }}>
              {company.description}
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-lg font-medium" style={{ color: '#1A1A1A' }}>
                <span className="underline" style={{ color: '#1A73E8', textDecorationColor: '#1A73E8' }}>{company.website}</span>
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
          </div>

          {/* Row 1, Col 2 - Color Card */}
          <div
            className="w-full max-w-[400px] mx-auto aspect-square rounded-lg"
            style={{ backgroundColor: company.color }}
          />

          {/* Divider */}
          <div className="col-span-full border-t-2 border-[#BBBBBB]" />

          {/* Row 2, Col 1 - Why We Partnered */}
          <div className="pt-12">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">WHY WE PARTNERED?</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
              {company.whyPartnered}
            </p>
          </div>

          {/* Row 2, Col 2 - Connect Form */}
          <div className="border border-[#1A1A1A] rounded-lg p-8 mt-12">
            <h3 className="block w-fit mx-auto text-2xl font-bold uppercase tracking-wider mb-8 border-b-2 border-[#1A1A1A] pb-1">
              CONNECT WITH {company.name}!
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              <input type="text" placeholder="Full Name" className="form-input-underline" />
              <input type="email" placeholder="Email" className="form-input-underline" />
              <input type="tel" placeholder="Phone Number" className="form-input-underline" />
              <input type="text" placeholder="Country" className="form-input-underline" />
              <input type="text" placeholder="City" className="form-input-underline" />
              <LiquidSelect
                placeholder="Partnership type"
                value={partnershipType}
                onChange={setPartnershipType}
                options={[
                  { value: 'investment', label: 'Investment' },
                  { value: 'partnership', label: 'Partnership' },
                  { value: 'collaboration', label: 'Collaboration' },
                ]}
              />
            </div>
            <div className="flex justify-center pt-10">
              <button className="yellow-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
