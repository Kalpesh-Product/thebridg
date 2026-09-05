import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { X, Check } from 'lucide-react';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';

const jobsData: Record<string, {
  title: string;
  department: string;
  jobType: string;
  jobMode: string;
  location: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
}> = {
  'chief-operating-officer': {
    title: 'Chief Operating Officer',
    department: 'Leadership',
    jobType: 'Full-time',
    jobMode: 'On-site',
    location: 'Dubai, UAE',
    about: 'We are looking for a Chief Operating Officer to oversee day-to-day operations across our portfolio of companies, working closely with founders to scale processes, teams, and execution.',
    responsibilities: [
      'Own daily operations across the accelerator and its portfolio companies',
      'Build and refine internal processes as the organization scales',
      'Partner with founders on strategy, hiring, and execution',
      'Track performance metrics and report to leadership',
    ],
    qualifications: [
      '5+ years in an operations or leadership role',
      'Experience working with early-stage startups or accelerators',
      'Strong communication and organizational skills',
      'Comfortable working across multiple portfolio companies at once',
    ],
  },
  analyst: {
    title: 'Analyst',
    department: 'Finance',
    jobType: 'Full-time',
    jobMode: 'Hybrid',
    location: 'Dubai, UAE',
    about: 'We are looking for an Analyst to support investment research, portfolio tracking, and financial modeling across BRIDG\'s portfolio companies.',
    responsibilities: [
      'Conduct market and company research to support investment decisions',
      'Build and maintain financial models and dashboards',
      'Track portfolio company performance against key metrics',
      'Assist in preparing investor and internal reports',
    ],
    qualifications: [
      'Bachelor\'s degree in Finance, Economics, or related field',
      'Strong Excel and financial modeling skills',
      'Analytical mindset with attention to detail',
      'Interest in startups and venture building',
    ],
  },
  'marketing-executive': {
    title: 'Marketing Executive',
    department: 'Marketing',
    jobType: 'Full-time',
    jobMode: 'On-site',
    location: 'Dubai, UAE',
    about: 'We are looking for a Marketing Executive to build brand presence for BRIDG and support marketing efforts across our portfolio companies.',
    responsibilities: [
      'Plan and execute marketing campaigns across digital channels',
      'Manage social media presence and content calendar',
      'Support portfolio companies with go-to-market marketing',
      'Track and report on campaign performance',
    ],
    qualifications: [
      'Experience in digital marketing or a related field',
      'Familiarity with social media and content tools',
      'Strong written communication skills',
      'Ability to manage multiple projects at once',
    ],
  },
  'administration-manager': {
    title: 'Administration Manager',
    department: 'Operations',
    jobType: 'Full-time',
    jobMode: 'On-site',
    location: 'Dubai, UAE',
    about: 'We are looking for an Administration Manager to oversee office operations, vendor management, and administrative support across the organization.',
    responsibilities: [
      'Manage day-to-day office administration and vendor relationships',
      'Coordinate scheduling, documentation, and internal communications',
      'Support HR and finance teams with administrative processes',
      'Ensure smooth operations across the workplace',
    ],
    qualifications: [
      '3+ years of experience in an administrative or office management role',
      'Strong organizational and multitasking skills',
      'Proficiency with office and scheduling tools',
      'Clear and professional communication skills',
    ],
  },
  'business-development-manager': {
    title: 'Business Development Manager',
    department: 'Business Development',
    jobType: 'Full-time',
    jobMode: 'Hybrid',
    location: 'Dubai, UAE',
    about: 'We are looking for a Business Development Manager to identify new partnership and investment opportunities and help grow BRIDG\'s network of founders and companies.',
    responsibilities: [
      'Identify and evaluate new partnership and investment opportunities',
      'Build and maintain relationships with founders, investors, and partners',
      'Represent BRIDG at industry events and networking opportunities',
      'Collaborate with leadership on growth strategy',
    ],
    qualifications: [
      '3+ years in business development, partnerships, or sales',
      'Strong network-building and relationship management skills',
      'Interest in startups and the venture ecosystem',
      'Excellent communication and negotiation skills',
    ],
  },
};

export default function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobsData[slug || ''] || jobsData['analyst'];
  const [activeTab, setActiveTab] = useState<'description' | 'apply'>('description');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    mobile: '',
    location: '',
    experience: '',
    linkedin: '',
    resume: null as File | null,
    currentSalary: '',
    expectedSalary: '',
    joinTime: '',
    relocate: '',
    personality: '',
    skills: '',
    reason: '',
    bootstrap: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <PageLayout>
      <div className="pt-8 pb-16 max-w-5xl mx-auto">
        <Link to="/careers" className="text-sm font-medium mb-6 block" style={{ color: '#1A73E8' }}>
          &larr; Back to open positions
        </Link>

        <div className="text-center mb-4">
          <div className="relative inline-block">
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-wider">
              {job.title}
            </h1>
            <svg className="absolute -bottom-2 left-0 w-full" style={{ height: '6px' }} viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
              <path d="M2 4 Q30 2 60 4 Q90 6 120 3 Q150 1 180 4 Q190 5 198 4" stroke="#00A868" strokeWidth="5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        <p className="text-sm font-semibold text-[#666] mb-10 text-center">
          {job.department} &nbsp;|&nbsp; {job.jobType} &nbsp;|&nbsp; {job.jobMode} &nbsp;|&nbsp; {job.location}
        </p>

        {/* Tabs */}
        <div className="flex border-b-2 border-[#1A1A1A] mb-10">
          <button
            className={`flex-1 text-center px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors ${
              activeTab === 'description' ? 'text-[#1A1A1A] border-b-2 -mb-0.5' : 'text-[#999]'
            }`}
            style={activeTab === 'description' ? { borderColor: '#00A868' } : undefined}
            onClick={() => setActiveTab('description')}
          >
            Job Description
          </button>
          <button
            className={`flex-1 text-center px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors ${
              activeTab === 'apply' ? 'text-[#1A1A1A] border-b-2 -mb-0.5' : 'text-[#999]'
            }`}
            style={activeTab === 'apply' ? { borderColor: '#00A868' } : undefined}
            onClick={() => setActiveTab('apply')}
          >
            Apply Now
          </button>
        </div>

        {activeTab === 'description' ? (
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4">About the Role</h3>
              <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>{job.about}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4">Responsibilities</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                    <span style={{ color: '#00A868' }}>&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4">Qualifications</h3>
              <ul className="space-y-3">
                {job.qualifications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
                    <span style={{ color: '#00A868' }}>&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm pt-8 border-t border-[#BBBBBB]" style={{ color: '#1A1A1A' }}>
              Please send in your resume to{' '}
              <a href="mailto:careers@bridg.co" className="font-semibold" style={{ color: '#1A73E8' }}>
                careers@bridg.co
              </a>{' '}
              if unable to apply now.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto border border-[#1A1A1A] rounded-lg p-8">
            <h3 className="block w-fit mx-auto text-xl font-bold uppercase tracking-wider mb-8 border-b-2 border-[#1A1A1A] pb-1">
              Apply for {job.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input-underline"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input-underline"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                aria-label="Date of Birth"
                className="form-input-underline"
                value={formData.dob}
                onChange={(e) => updateField('dob', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="form-input-underline"
                value={formData.mobile}
                onChange={(e) => updateField('mobile', e.target.value)}
              />
              <input
                type="text"
                placeholder="Current Location"
                className="form-input-underline"
                value={formData.location}
                onChange={(e) => updateField('location', e.target.value)}
              />
              <input
                type="number"
                placeholder="Experience (in years)"
                className="form-input-underline"
                value={formData.experience}
                onChange={(e) => updateField('experience', e.target.value)}
              />
              <input
                type="url"
                placeholder="LinkedIn Profile URL"
                className="form-input-underline"
                value={formData.linkedin}
                onChange={(e) => updateField('linkedin', e.target.value)}
              />
              <div>
                <button
                  type="button"
                  onClick={() => document.getElementById('resume-upload')?.click()}
                  className="form-input-underline text-left truncate block"
                >
                  {formData.resume ? formData.resume.name : <span className="text-[#999]">Upload Resume / CV</span>}
                </button>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  hidden
                  onChange={handleFileChange}
                />
              </div>
              <input
                type="text"
                placeholder="Current Monthly Salary"
                className="form-input-underline"
                value={formData.currentSalary}
                onChange={(e) => updateField('currentSalary', e.target.value)}
              />
              <input
                type="text"
                placeholder="Expected Monthly Salary"
                className="form-input-underline"
                value={formData.expectedSalary}
                onChange={(e) => updateField('expectedSalary', e.target.value)}
              />
              <LiquidSelect
                placeholder="How Soon Can You Join?"
                value={formData.joinTime}
                onChange={(v) => updateField('joinTime', v)}
                options={[
                  { value: 'immediately', label: 'Immediately' },
                  { value: '1-week', label: '1 Week' },
                  { value: '2-weeks', label: '2 Weeks' },
                  { value: '30-days', label: '30 Days' },
                ]}
              />
              <LiquidSelect
                placeholder="Willing to Relocate?"
                value={formData.relocate}
                onChange={(v) => updateField('relocate', v)}
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
              />
              <textarea
                placeholder="Who are you as a person?"
                className="form-input-underline resize-none h-16 md:col-span-2"
                value={formData.personality}
                onChange={(e) => updateField('personality', e.target.value)}
              />
              <textarea
                placeholder="What skill set do you have for this role?"
                className="form-input-underline resize-none h-16 md:col-span-2"
                value={formData.skills}
                onChange={(e) => updateField('skills', e.target.value)}
              />
              <textarea
                placeholder="Why should we consider you for this role?"
                className="form-input-underline resize-none h-16 md:col-span-2"
                value={formData.reason}
                onChange={(e) => updateField('reason', e.target.value)}
              />
              <textarea
                placeholder="Are you willing to bootstrap to join a growing startup?"
                className="form-input-underline resize-none h-16 md:col-span-2"
                value={formData.bootstrap}
                onChange={(e) => updateField('bootstrap', e.target.value)}
              />
              <textarea
                placeholder="Personal Message"
                className="form-input-underline resize-none h-16 md:col-span-2"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-10">
              <button type="submit" className="yellow-btn">Submit</button>
            </div>
          </form>
        )}
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-md bg-white rounded-lg p-8 md:p-10 text-center">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-[#1A1A1A] hover:opacity-60 transition-opacity"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <div
              className="mx-auto mb-6 w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: '#00A868' }}
            >
              <Check size={28} style={{ color: '#00A868' }} strokeWidth={3} />
            </div>

            <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>

            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              Thank you for applying for {job.title}. We&apos;ll review your application and get back to you soon.
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
