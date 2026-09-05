import PageLayout from '../components/shared/PageLayout';

const sections = [
  {
    title: '',
    content: (
      <p>
        These Terms &amp; Conditions govern your access to and use of the BRIDG website and services. By accessing or using BRIDG, you agree to be bound by these terms. If you do not agree, please do not use our services.
      </p>
    ),
  },
  {
    title: '1. Use of Our Platform',
    content: <p>You agree to use BRIDG only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the platform.</p>,
  },
  {
    title: '2. Intellectual Property',
    content: <p>All content on this site, including text, graphics, and logos, is the property of BRIDG and may not be reproduced without permission.</p>,
  },
  {
    title: '3. Applications & Submissions',
    content: <p>Information submitted through our Careers or Connect forms is used solely to evaluate your application or inquiry and may be shared with the relevant BRIDG team or portfolio company.</p>,
  },
  {
    title: '4. Limitation of Liability',
    content: <p>BRIDG is not liable for any indirect or incidental damages arising from your use of our platform or services.</p>,
  },
  {
    title: '5. Changes to These Terms',
    content: <p>We may update these Terms &amp; Conditions from time to time. Continued use of our platform after changes constitutes acceptance of the updated terms.</p>,
  },
  {
    title: '6. Contact Us',
    content: (
      <p>
        Questions about these terms can be sent to{' '}
        <a href="mailto:response@bridg.com" className="font-semibold" style={{ color: '#1A73E8' }}>response@bridg.com</a>.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        <div className="text-center mb-10">
          <h1 className="relative inline-block text-2xl md:text-3xl font-bold uppercase tracking-wider">
            TERMS &amp; CONDITIONS
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
