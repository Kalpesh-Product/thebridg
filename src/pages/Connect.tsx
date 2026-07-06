import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { SiGmail } from 'react-icons/si';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';

type Step = 1 | 2 | 3 | 4;

export default function Connect() {
  const [step, setStep] = useState<Step>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  const [formData, setFormData] = useState({
    supportRequired: '',
    fullName: '',
    country: '',
    email: '',
    mobileNumber: '',
    linkedin: '',
    companyName: '',
    industry: '',
    companySize: '',
    companyCountry: '',
    companyState: '',
    companyCity: '',
    aboutParagraphs: ['', ''],
    supportParagraphs: ['', ''],
    visionParagraphs: [''],
    contactEmail: '',
    contactNumber: '',
    address: '',
    googleMapUrl: '',
    registeredName: '',
    copyrightText: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateParagraph = (section: 'about' | 'support' | 'vision', index: number, value: string) => {
    const key = `${section}Paragraphs` as const;
    setFormData(prev => {
      const updated = [...(prev[key] as string[])];
      updated[index] = value;
      return { ...prev, [key]: updated };
    });
  };

  const addParagraph = (section: 'about' | 'support' | 'vision') => {
    const key = `${section}Paragraphs` as const;
    setFormData(prev => ({
      ...prev,
      [key]: [...(prev[key] as string[]), ''],
    }));
  };

  const removeParagraph = (section: 'about' | 'support' | 'vision', index: number) => {
    const key = `${section}Paragraphs` as const;
    setFormData(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).filter((_, i) => i !== index),
    }));
  };

  return (
    <PageLayout>
      <div className={step === 2 ? "pt-3 pb-16 max-w-2xl mx-auto" : "pt-3 pb-4 max-w-2xl mx-auto"}>
        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-start justify-center gap-1 md:gap-2 mb-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-start gap-1 md:gap-2">
                <div className="flex flex-col items-center sm:w-28">
                  <div
                    className={`w-8 h-8 text-xs rounded-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                      s < step
                        ? 'bg-[#4CAF50] text-white'
                        : s === step
                        ? 'bg-[#FFEB3B] text-[#1A1A1A]'
                        : 'bg-[#BDBDBD] text-[#1A1A1A]'
                    }`}
                  >
                    {s}
                  </div>
                  <span className="text-xs mt-0.5 uppercase text-center whitespace-nowrap hidden sm:block">
                    {s === 1 ? 'PERSONAL INFO' : s === 2 ? 'COMPANY INFO' : 'SUBMISSION'}
                  </span>
                </div>
                {s < 3 && (
                  <div
                    className={`w-10 md:w-20 h-0.5 mt-[0.9375rem] transition-colors duration-300 ${
                      s < step ? 'bg-[#4CAF50]' : 'bg-[#BDBDBD]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-normal text-center pt-4 mb-5 tracking-wide">
              LET&apos;S SET UP YOUR ACCOUNT!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <LiquidSelect
                placeholder="Support Required"
                value={formData.supportRequired}
                onChange={(v) => updateField('supportRequired', v)}
                options={[
                  { value: 'pre-incubation', label: 'Pre-Incubation' },
                  { value: 'incubation', label: 'Incubation' },
                  { value: 'vc-funding', label: 'VC Funding' },
                  { value: 'strategic-investment', label: 'Strategic Investment' },
                ]}
              />
              <input
                type="text"
                placeholder="Full Name"
                className="form-input-underline"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                className="form-input-underline"
                value={formData.country}
                onChange={(e) => updateField('country', e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input-underline"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="form-input-underline"
                value={formData.mobileNumber}
                onChange={(e) => updateField('mobileNumber', e.target.value)}
              />
              <input
                type="text"
                placeholder="LinkedIn Profile"
                className="form-input-underline"
                value={formData.linkedin}
                onChange={(e) => updateField('linkedin', e.target.value)}
              />
            </div>

            <div className="flex justify-center pt-8">
              <button onClick={() => setStep(2)} className="yellow-btn !px-7 !py-2 text-sm">Next</button>
            </div>
          </div>
        )}

        {/* Step 2: Company Info */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-normal text-center mb-12 tracking-wide uppercase">
              ADD YOUR COMPANY DETAILS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <input type="text" placeholder="Company Name" className="form-input-underline" value={formData.companyName} onChange={(e) => updateField('companyName', e.target.value)} />
              <input type="text" placeholder="Industry" className="form-input-underline" value={formData.industry} onChange={(e) => updateField('industry', e.target.value)} />
              <input type="text" placeholder="Company Size" className="form-input-underline" value={formData.companySize} onChange={(e) => updateField('companySize', e.target.value)} />
              <LiquidSelect
                placeholder="Company Country"
                value={formData.companyCountry}
                onChange={(v) => updateField('companyCountry', v)}
                options={[
                  { value: 'india', label: 'India' },
                  { value: 'usa', label: 'USA' },
                  { value: 'uk', label: 'UK' },
                  { value: 'uae', label: 'UAE' },
                ]}
              />
              <LiquidSelect
                placeholder="Company State"
                value={formData.companyState}
                onChange={(v) => updateField('companyState', v)}
                options={[
                  { value: 'goa', label: 'Goa' },
                  { value: 'maharashtra', label: 'Maharashtra' },
                  { value: 'karnataka', label: 'Karnataka' },
                ]}
              />
              <LiquidSelect
                placeholder="Company City"
                value={formData.companyCity}
                onChange={(v) => updateField('companyCity', v)}
                options={[
                  { value: 'panjim', label: 'Panjim' },
                  { value: 'mumbai', label: 'Mumbai' },
                  { value: 'bangalore', label: 'Bangalore' },
                ]}
              />
            </div>

            {/* About Company */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">ABOUT COMPANY</h3>
              {formData.aboutParagraphs.map((para, i) => (
                <div key={i} className="border border-[#E0E0E0] rounded p-4 mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Paragraph {i + 1}</span>
                    <button onClick={() => removeParagraph('about', i)} className="text-sm text-red-500 hover:text-red-700">Remove</button>
                  </div>
                  <input
                    type="text"
                    placeholder="Add text"
                    className="form-input-underline w-full"
                    value={para}
                    onChange={(e) => updateParagraph('about', i, e.target.value)}
                  />
                </div>
              ))}
              <button onClick={() => addParagraph('about')} className="text-sm font-medium" style={{ color: '#1A1A1A' }}>+ Add Paragraph</button>
            </div>

            {/* Support Required */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">SUPPORT REQUIRED</h3>
              {formData.supportParagraphs.map((para, i) => (
                <div key={i} className="border border-[#E0E0E0] rounded p-4 mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Paragraph {i + 1}</span>
                    <button onClick={() => removeParagraph('support', i)} className="text-sm text-red-500 hover:text-red-700">Remove</button>
                  </div>
                  <input
                    type="text"
                    placeholder="Add text"
                    className="form-input-underline w-full"
                    value={para}
                    onChange={(e) => updateParagraph('support', i, e.target.value)}
                  />
                </div>
              ))}
              <button onClick={() => addParagraph('support')} className="text-sm font-medium" style={{ color: '#1A1A1A' }}>+ Add Paragraph</button>
            </div>

            {/* Vision */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">VISION (Optional)</h3>
              {formData.visionParagraphs.map((para, i) => (
                <div key={i} className="border border-[#E0E0E0] rounded p-4 mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Paragraph {i + 1}</span>
                    <button onClick={() => removeParagraph('vision', i)} className="text-sm text-red-500 hover:text-red-700">Remove</button>
                  </div>
                  <input
                    type="text"
                    placeholder="Add text"
                    className="form-input-underline w-full"
                    value={para}
                    onChange={(e) => updateParagraph('vision', i, e.target.value)}
                  />
                </div>
              ))}
              <button onClick={() => addParagraph('vision')} className="text-sm font-medium" style={{ color: '#1A1A1A' }}>+ Add Paragraph</button>
            </div>

            {/* Company Contact */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">COMPANY CONTACT</h3>
              <div className="border border-[#E0E0E0] rounded p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <input type="email" placeholder="Contact Email" className="form-input-underline" value={formData.contactEmail} onChange={(e) => updateField('contactEmail', e.target.value)} />
                  <input type="tel" placeholder="Contact Number" className="form-input-underline" value={formData.contactNumber} onChange={(e) => updateField('contactNumber', e.target.value)} />
                  <input type="text" placeholder="Google Map Embed URL" className="form-input-underline" value={formData.googleMapUrl} onChange={(e) => updateField('googleMapUrl', e.target.value)} />
                  <input type="text" placeholder="Address" className="form-input-underline" value={formData.address} onChange={(e) => updateField('address', e.target.value)} />
                  <input type="text" placeholder="Registered Company Name" className="form-input-underline" value={formData.registeredName} onChange={(e) => updateField('registeredName', e.target.value)} />
                  <input type="text" placeholder="Copyright Text" className="form-input-underline" value={formData.copyrightText} onChange={(e) => updateField('copyrightText', e.target.value)} />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="yellow-btn !px-7 !py-2 text-sm">Back</button>
              <button onClick={() => setStep(3)} className="yellow-btn !px-7 !py-2 text-sm">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="text-center pt-4">
            <h2 className="text-xl font-bold mb-3">You&apos;re almost done!</h2>
            <p className="text-sm mb-6">Please confirm your submission.</p>

            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="yellow-btn !px-7 !py-2 text-sm">Back</button>
              <button onClick={() => setStep(4)} className="yellow-btn !px-7 !py-2 text-sm">Confirm</button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-5 text-center">You&apos;re All Set!</h2>

            <p className="text-sm font-medium leading-relaxed mb-4 max-w-2xl">
              An email has been sent to your email address containing all the further process for the activation. Our team will reach out to you shortly for more details and will guide you further within 48 hours.
            </p>
            <p className="text-sm font-medium leading-relaxed mb-5 max-w-2xl">
              Please let us know if there is any more queries from your side, or you can contact us at : response@thebridg.com
            </p>

            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity mb-5"
            >
              <SiGmail size={20} color="#EA4335" />
              <span className="underline">Open Gmail</span>
            </a>

            <p className="text-sm mb-6">
              Did not receive an email? Please check your spam folder.
            </p>

            <div className="flex justify-center">
              <Link to="/">
                <button className="yellow-btn !px-7 !py-2 text-sm">Go to Home</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
