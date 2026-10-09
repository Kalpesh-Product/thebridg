import PageLayout from '../components/shared/PageLayout';

const sections = [
  {
    title: '',
    content: (
      <p>
        These Terms &amp; Conditions govern your access to and use of BRIDG. By using the platform, submitting information, applying through BRIDG, or interacting with any opportunity made available through the platform, you agree to these Terms &amp; Conditions.
      </p>
    ),
  },
  {
    title: 'Use of BRIDG',
    content: (
      <>
        <p>BRIDG provides a platform through which founders, companies, investors, partners, applicants, and other participants may discover opportunities, submit information, connect with relevant parties, and engage with companies or initiatives within the BRIDG ecosystem.</p>
        <p className="mt-3">You agree to use BRIDG lawfully, responsibly, and only for legitimate purposes. You must not misuse the platform, attempt unauthorised access, interfere with its operation, submit false or misleading information, or use BRIDG in a way that may harm the platform or other users.</p>
      </>
    ),
  },
  {
    title: 'Information Submitted by Users',
    content: (
      <>
        <p>You are responsible for ensuring that information you submit through BRIDG is accurate, current, and appropriate for the purpose for which it is provided.</p>
        <p className="mt-3">By submitting information, you permit BRIDG to review, process, store, and, where relevant, share that information with appropriate founders, companies, investors, partners, or other intended recipients in connection with the relevant enquiry, application, opportunity, or introduction.</p>
        <p className="mt-3">You should not submit confidential, proprietary, or highly sensitive information unless it is specifically required and appropriate for the relevant interaction.</p>
      </>
    ),
  },
  {
    title: 'No Guarantee of Investment, Partnership or Opportunity',
    content: (
      <>
        <p>BRIDG may facilitate introductions, applications, connections, discussions, and opportunities between participants.</p>
        <p className="mt-3">However, use of BRIDG does not guarantee investment, funding, partnership, employment, commercial engagement, acceptance into any programme, or any other particular outcome.</p>
        <p className="mt-3">Any decision to invest, partner, hire, collaborate, or enter into a commercial relationship remains solely with the relevant parties.</p>
      </>
    ),
  },
  {
    title: 'Company and Opportunity Information',
    content: (
      <>
        <p>Information displayed on BRIDG regarding companies, founders, investment opportunities, partnerships, careers, or other activities may be provided by the relevant parties or prepared using information available to BRIDG.</p>
        <p className="mt-3">While reasonable efforts may be made to keep information clear and current, BRIDG does not guarantee that all information will always be complete, accurate, or up to date.</p>
        <p className="mt-3">Users should conduct their own review and due diligence before making investment, commercial, employment, or other significant decisions.</p>
      </>
    ),
  },
  {
    title: 'No Financial or Professional Advice',
    content: (
      <>
        <p>Content made available through BRIDG is provided for general information and connection purposes.</p>
        <p className="mt-3">Nothing on the platform should be considered financial, investment, legal, tax, or other professional advice. Users should obtain independent professional advice where appropriate before making decisions based on information or opportunities presented through BRIDG.</p>
      </>
    ),
  },
  {
    title: 'Third-Party Relationships and Links',
    content: (
      <>
        <p>BRIDG may connect users with third parties or provide links to external websites, social media profiles, services, or platforms.</p>
        <p className="mt-3">BRIDG does not control and is not responsible for the content, availability, conduct, products, services, privacy practices, or contractual obligations of third parties.</p>
        <p className="mt-3">Any agreement or transaction entered into between users and a third party is between those parties unless expressly stated otherwise.</p>
      </>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <>
        <p>The BRIDG name, website design, branding, content, graphics, layouts, and other materials created for the platform may be protected by applicable intellectual property rights.</p>
        <p className="mt-3">Users may access and use the platform for its intended purposes but may not reproduce, copy, modify, distribute, commercially exploit, or represent BRIDG materials as their own without appropriate permission.</p>
        <p className="mt-3">Any trademarks, logos, or materials belonging to companies or third parties remain the property of their respective owners.</p>
      </>
    ),
  },
  {
    title: 'Platform Availability',
    content: (
      <>
        <p>BRIDG may modify, update, suspend, remove, or discontinue any part of the platform or its features as the platform develops.</p>
        <p className="mt-3">BRIDG does not guarantee uninterrupted or error-free access and may carry out maintenance, updates, or changes where reasonably required.</p>
      </>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        <p>To the extent permitted by applicable law, BRIDG will not be responsible for indirect, incidental, consequential, or commercial losses arising from use of the platform, reliance on information presented through it, third-party conduct, unsuccessful applications, failed introductions, or decisions made by users or third parties.</p>
        <p className="mt-3">Nothing in these Terms excludes any liability that cannot legally be excluded.</p>
      </>
    ),
  },
  {
    title: 'Privacy',
    content: <p>Personal information submitted through BRIDG is handled in accordance with the BRIDG Privacy Policy.</p>,
  },
  {
    title: 'Changes to These Terms',
    content: (
      <>
        <p>BRIDG may update these Terms &amp; Conditions from time to time as the platform, services, or legal requirements evolve.</p>
        <p className="mt-3">Any revised version will be published on the platform with an updated date. Continued use of BRIDG after changes are published constitutes acceptance of the revised Terms.</p>
      </>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p>
        For questions regarding these Terms &amp; Conditions, please contact us at{' '}
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
