import PageLayout from '../components/shared/PageLayout';

const sections = [
  {
    title: '',
    content: (
      <p>
        BRIDG (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our platform and services.
        <br />
        <br />
        By accessing or using BRIDG, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our services.
      </p>
    ),
  },
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p>We collect the following types of information when you use our platform:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Name, email address, and phone number</li>
          <li>Company or university affiliation</li>
          <li>Application and submission details for open positions or partnership requests</li>
          <li>Usage data such as pages viewed and actions taken on our platform</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How We Use Your Information',
    content: (
      <ul className="list-disc ml-6 space-y-1">
        <li>To respond to inquiries and process applications or partnership requests</li>
        <li>To improve our platform and services</li>
        <li>To communicate updates relevant to your engagement with BRIDG</li>
      </ul>
    ),
  },
  {
    title: '3. Data Sharing',
    content: <p>We do not sell your personal data to third parties. Information is shared only with the relevant BRIDG team or portfolio company involved in your inquiry.</p>,
  },
  {
    title: '4. Data Security',
    content: <p>We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure.</p>,
  },
  {
    title: '5. Contact Us',
    content: (
      <p>
        If you have questions about this Privacy Policy, reach out to us at{' '}
        <a href="mailto:response@bridg.com" className="font-semibold" style={{ color: '#1A73E8' }}>response@bridg.com</a>.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        <div className="text-center mb-10">
          <h1 className="relative inline-block text-2xl md:text-3xl font-bold uppercase tracking-wider">
            PRIVACY POLICY
            <svg className="absolute -bottom-2 left-0 w-full" style={{ height: '6px' }} viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
              <path d="M2 4 Q30 2 60 4 Q90 6 120 3 Q150 1 180 4 Q190 5 198 4" stroke="#00A868" strokeWidth="5" strokeLinecap="round" fill="none" />
            </svg>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <h3 className="text-lg md:text-xl font-bold mb-3">{section.title}</h3>
              )}
              <div className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>{section.content}</div>
              {idx < sections.length - 1 && <hr className="mt-8 border-[#BBBBBB]" />}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
