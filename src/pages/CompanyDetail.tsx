import { useState } from 'react';
import { useParams } from 'react-router';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';

const companiesData: Record<string, {
  name: string;
  category: string;
  description: string;
  website: string;
  marketOpportunity: string;
}> = {
  studom: {
    name: 'STUDOM',
    category: 'EdTech',
    description: 'Studom is a platform that helps students discover and compare universities in one place. It simplifies the search process by bringing together clear and structured information, allowing students to explore different options and understand what suits them best. By making information easy to access and compare, Studom helps students make more confident and informed decisions about their higher education journey.',
    website: 'Studom.co',
    marketOpportunity: 'The global higher education market serves millions of students making high-value decisions every year. As discovery, comparison and applications move increasingly online, Studom has the opportunity to become a scalable gateway between students and institutions, with strong potential across admissions, partnerships and recurring digital services.',
  },
  unistyle: {
    name: 'UNISTYLE',
    category: 'Merchandise',
    description: 'UniStyle is a platform that brings official school uniforms and university merchandise into one place. It simplifies the buying process by offering authentic products through a single platform, making it easier for students, parents, alumni, and supporters to find what they need. By making official apparel more accessible, UniStyle helps institutions connect with their communities through products they can trust.',
    website: 'Unistyle.co',
    marketOpportunity: 'The institutional apparel market is large but fragmented across countless local vendors with inconsistent quality and access. As schools and universities look to formalize and modernize their merchandise programs, UniStyle has the opportunity to become the trusted platform connecting institutions with their communities, with strong potential across licensing, recurring orders and alumni engagement.',
  },
  'daily-daily': {
    name: 'DAILY DAILY',
    category: 'Subscription',
    description: 'Daily Daily is a platform that helps people subscribe to and receive everyday essentials from local stores in one place. It simplifies the shopping process by bringing together daily needs through a convenient subscription model, making regular purchases easier to manage. By making everyday shopping more reliable and hassle free, Daily Daily helps people save time while ensuring they never run out of the products they use most.',
    website: 'Dailydaily.co',
    marketOpportunity: 'The everyday essentials market is enormous and habitual, with consumers making repeat purchases every week. As subscription commerce grows, Daily Daily has the opportunity to become a recurring gateway between local stores and households, with strong potential across retention, retail partnerships and recurring revenue.',
  },
  stintern: {
    name: 'STINTERN',
    category: 'Education/HR',
    description: 'Stintern is a platform that helps students discover and apply for internships in one place. It simplifies the internship search process by bringing together opportunities from different companies, allowing students to explore roles that match their skills and career goals. By making internship opportunities easier to access and apply for, Stintern helps students gain valuable industry experience with greater confidence.',
    website: 'Stintern.co',
    marketOpportunity: 'The internship and early-career hiring market serves millions of students and employers every year. As recruiting moves increasingly online, Stintern has the opportunity to become a scalable gateway between students and companies, with strong potential across placements, employer partnerships and recurring hiring services.',
  },
  flagit: {
    name: 'FLAGIT',
    category: 'Civic Tech',
    description: 'Flagit is a platform that enables people to report road and traffic violations in a simple and responsible way. It allows users to submit photos of violations, which are verified before being forwarded to the relevant authorities for action. By making civic reporting more accessible and transparent, Flagit encourages safer roads while rewarding citizens for their genuine contributions.',
    website: 'Flagit.app',
    marketOpportunity: 'The civic reporting and road safety market touches every city with a growing appetite for citizen-driven accountability. As municipalities look to modernize enforcement, Flagit has the opportunity to become a scalable gateway between citizens and authorities, with strong potential across municipal partnerships and recurring reporting services.',
  },
  datamatic: {
    name: 'DATAMATIC',
    category: 'Data/Analytics',
    description: 'Datamatic is a platform that helps businesses discover and access structured company information in one place. It simplifies the research process by bringing together reliable corporate data, allowing users to explore companies, industries, and key business insights with ease. By making business information easier to access and understand, Datamatic helps users make more informed decisions with greater confidence.',
    website: 'Datamatic.io',
    marketOpportunity: 'The business intelligence market serves millions of professionals making high-value research decisions every year. As due diligence and market research move increasingly online, Datamatic has the opportunity to become a scalable gateway between businesses and structured data, with strong potential across enterprise partnerships and recurring subscription services.',
  },
  allperspectives: {
    name: 'ALLPERSPECTIVES',
    category: 'Relationships',
    description: 'Allperspectives is a platform that explores the different perspectives people experience in everyday relationships. It brings together stories and experiences from multiple points of view, helping people better understand the thoughts, emotions, and challenges of others. By presenting different sides of the same relationship, Allperspectives encourages empathy, meaningful conversations, and deeper human connections.',
    website: 'Allperspectives.com',
    marketOpportunity: 'The relationships and personal wellbeing space reaches nearly everyone, with growing demand for content that fosters genuine connection. As people seek more empathetic ways to understand each other, Allperspectives has the opportunity to become a trusted platform for perspective-driven content, with strong potential across community growth and recurring engagement.',
  },
};

export default function CompanyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const company = companiesData[slug || ''] || companiesData['studom'];
  const [partnershipType, setPartnershipType] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  return (
    <PageLayout>
      <div className="pt-20 md:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 mb-20 md:mb-24 lg:items-center">
          {/* Col 1 - Name/Category/Website */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 -mt-6 md:-mt-10" style={{ color: '#00A868' }}>
              {company.name}
            </h1>
            <div className="relative inline-block mb-8">
              <span className="text-xl font-bold">{company.category}</span>
              <svg className="absolute -bottom-1 left-0 w-full" style={{ height: '4px' }} viewBox="0 0 60 4" fill="none" preserveAspectRatio="none">
                <path d="M1 2 Q10 1 20 2 Q30 3 40 2 Q50 1 59 2" stroke="#00A868" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[20px] font-medium" style={{ color: '#1A1A1A' }}>
                <span style={{ color: '#1A73E8' }}>{company.website}</span>
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

          {/* Col 2 - Description, top-aligned with name */}
          <div>
            <p className="text-[24px] leading-relaxed" style={{ color: '#1A1A1A' }}>
              {company.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#BBBBBB]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-10">
          {/* Row 2, Col 1 - Market Opportunity */}
          <div className="pt-12">
            <h3 className="text-3xl font-bold uppercase tracking-wider mb-10">MARKET OPPORTUNITY!</h3>
            <p className="text-[24px] leading-relaxed" style={{ color: '#1A1A1A' }}>
              {company.marketOpportunity}
            </p>
          </div>

          {/* Row 2, Col 2 - Connect Form */}
          <div className="border border-[#1A1A1A] rounded-lg p-8 mt-12">
            <h3 className="block w-fit mx-auto text-2xl font-bold uppercase tracking-wider mb-8 border-b-2 border-[#1A1A1A] pb-1">
              GET INTRODUCED TO {company.name}
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
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
              <input type="text" placeholder="Full Name" className="form-input-underline" />
              <input type="email" placeholder="Email" className="form-input-underline" />
              <input type="tel" placeholder="Phone Number" className="form-input-underline" />
              <LiquidSelect
                placeholder="Country"
                value={country}
                onChange={setCountry}
                options={[
                  { value: 'india', label: 'India' },
                  { value: 'usa', label: 'USA' },
                  { value: 'uk', label: 'UK' },
                  { value: 'uae', label: 'UAE' },
                  { value: 'canada', label: 'Canada' },
                  { value: 'australia', label: 'Australia' },
                  { value: 'germany', label: 'Germany' },
                  { value: 'singapore', label: 'Singapore' },
                ]}
              />
              <LiquidSelect
                placeholder="City"
                value={city}
                onChange={setCity}
                options={[
                  { value: 'mumbai', label: 'Mumbai' },
                  { value: 'bangalore', label: 'Bangalore' },
                  { value: 'delhi', label: 'Delhi' },
                  { value: 'panjim', label: 'Panjim' },
                  { value: 'dubai', label: 'Dubai' },
                  { value: 'london', label: 'London' },
                  { value: 'new-york', label: 'New York' },
                  { value: 'singapore', label: 'Singapore' },
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
