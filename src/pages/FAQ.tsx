import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const faqs = [
  {
    q: 'What is BRIDG?',
    a: 'BRIDG is a student led venture building platform connecting students, startups, investors, universities, and industry leaders through one integrated ecosystem.',
  },
  {
    q: 'Who can join BRIDG?',
    a: 'Students, early founders, and anyone building a startup idea can join BRIDG to access mentorship, funding access, and hands-on execution support.',
  },
  {
    q: 'How can I partner with BRIDG?',
    a: 'Visit our Connect page to reach out about investment, partnership, or collaboration opportunities.',
  },
  {
    q: 'How do I apply for open positions?',
    a: 'Visit our Careers page to view open positions and apply directly to any listing.',
  },
  {
    q: 'Where is BRIDG based?',
    a: 'BRIDG is based at BIZ Nest Co-Working, Sunteck Kanaka Park, Panjim, Goa - India 403001.',
  },
  {
    q: 'How can I reach the BRIDG team?',
    a: (
      <>
        Write to us at{' '}
        <a className="font-semibold" style={{ color: '#1A73E8' }} href="mailto:response@bridg.com">
          response@bridg.com
        </a>{' '}
        or visit our Contact page.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        <div className="text-center mb-10">
          <h1 className="relative inline-block text-2xl md:text-3xl font-bold uppercase tracking-wider">
            FAQS
            <svg className="absolute -bottom-2 left-0 w-full" style={{ height: '6px' }} viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
              <path d="M2 4 Q30 2 60 4 Q90 6 120 3 Q150 1 180 4 Q190 5 198 4" stroke="#00A868" strokeWidth="5" strokeLinecap="round" fill="none" />
            </svg>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-bold mb-3">
                {idx + 1}. {item.q}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>{item.a}</p>
              {idx < faqs.length - 1 && <hr className="mt-8 border-[#BBBBBB]" />}
            </div>
          ))}

          <p className="pt-8 text-base" style={{ color: '#1A1A1A' }}>
            Can&apos;t find the answer to your question? Connect with us via our{' '}
            <Link to="/contact" className="font-semibold" style={{ color: '#1A73E8' }}>
              Contact
            </Link>{' '}
            page.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
