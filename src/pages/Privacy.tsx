import PageLayout from '../components/shared/PageLayout';

const sections = [
  {
    title: '',
    content: (
      <p>
        BRIDG respects the privacy of individuals who visit, interact with, or submit information through the platform. This Privacy Policy explains how information may be collected, used, shared, and protected when you use BRIDG.
      </p>
    ),
  },
  {
    title: 'Information We Collect',
    content: (
      <>
        <p>BRIDG may collect information you provide directly, including your name, email address, phone number, country, city, LinkedIn profile, company information, partnership interests, investment interests, applications, messages, and other information you choose to submit.</p>
        <p className="mt-3">We may also collect limited technical information such as browser type, device information, IP address, pages visited, and basic usage data where available through the platform&apos;s technical infrastructure or analytics services.</p>
      </>
    ),
  },
  {
    title: 'How We Use Information',
    content: (
      <>
        <p>Information may be used to operate and improve BRIDG, respond to enquiries, review applications, facilitate relevant introductions, support partnerships, investment discussions and company connections, communicate with users, maintain records, and improve the overall platform experience.</p>
        <p className="mt-3">BRIDG may also use information where reasonably necessary for security, fraud prevention, legal compliance, or the protection of the platform and its users.</p>
      </>
    ),
  },
  {
    title: 'Sharing of Information',
    content: (
      <>
        <p>Where relevant to an enquiry, application, partnership, investment opportunity, career opportunity, or company connection, information may be shared with the appropriate BRIDG team member, company, founder, investor, partner, or intended recipient.</p>
        <p className="mt-3">BRIDG does not sell personal information.</p>
        <p className="mt-3">Information may also be processed by service providers that support website hosting, communications, forms, analytics, storage, or other technical functions required to operate the platform.</p>
      </>
    ),
  },
  {
    title: 'Cookies and Technical Data',
    content: (
      <>
        <p>BRIDG may use cookies or similar technologies to support website functionality, security, performance, analytics, and basic user preferences.</p>
        <p className="mt-3">Where required, appropriate consent mechanisms may be introduced.</p>
      </>
    ),
  },
  {
    title: 'Data Security and Retention',
    content: (
      <>
        <p>BRIDG takes reasonable measures intended to protect information from unauthorised access, misuse, alteration, disclosure, or loss.</p>
        <p className="mt-3">Information may be retained for as long as reasonably necessary for the purpose for which it was collected, ongoing business requirements, record-keeping, dispute resolution, or applicable legal obligations.</p>
        <p className="mt-3">No online system can be guaranteed to be completely secure, and users should avoid submitting highly sensitive information unless specifically requested.</p>
      </>
    ),
  },
  {
    title: 'Your Information',
    content: (
      <>
        <p>You may contact BRIDG to request access to, correction of, or deletion of personal information you have previously submitted, subject to applicable legal, operational, security, or record-keeping requirements.</p>
        <p className="mt-3">You may also request to stop receiving non-essential communications.</p>
      </>
    ),
  },
  {
    title: 'Third-Party Links',
    content: (
      <>
        <p>BRIDG may contain links to external websites, platforms, social media profiles, or third-party services.</p>
        <p className="mt-3">BRIDG is not responsible for the privacy practices, security, or content of third-party platforms, and users should review their respective privacy policies before providing information.</p>
      </>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <>
        <p>BRIDG may update this Privacy Policy from time to time as the platform, services, technology, or legal requirements evolve.</p>
        <p className="mt-3">Any updated version will be published on the platform with a revised date.</p>
      </>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p>
        For privacy-related questions or requests, please contact us at{' '}
        <b>
          <br />
          <br />
          BRIDG
          <br />
          Email:
        <a href="mailto:response@bridg.com" className="font-semibold text-brand-blue">response@bridg.com</a>.
      </b>
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
          <p className="mt-3 text-sm text-gray-500">Last Updated: September 2026</p>
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
