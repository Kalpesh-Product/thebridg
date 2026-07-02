import { useState } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

type Step = 1 | 2 | 3 | 4;

export default function Connect() {
  const [step, setStep] = useState<Step>(1);
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
      <div className="pt-8 pb-16 max-w-4xl mx-auto">
        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors duration-300 ${
                      s < step
                        ? 'bg-[#4CAF50] text-white'
                        : s === step
                        ? 'bg-[#FFEB3B] text-[#1A1A1A]'
                        : 'bg-[#BDBDBD] text-[#1A1A1A]'
                    }`}
                  >
                    {s}
                  </div>
                  <span className="text-xs mt-2 uppercase tracking-wider text-center hidden sm:block">
                    {s === 1 ? 'PERSONAL INFO' : s === 2 ? 'COMPANY INFO' : 'SUBMISSION'}
                  </span>
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 md:w-32 h-1 transition-colors duration-300 ${
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
            <h2 className="text-2xl font-normal text-center mb-12 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
              LETS &nbsp; SET UP YOUR ACCOUNT!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <select
                className="form-input-underline bg-transparent cursor-pointer"
                value={formData.supportRequired}
                onChange={(e) => updateField('supportRequired', e.target.value)}
              >
                <option value="">Support Required</option>
                <option value="pre-incubation">Pre-Incubation</option>
                <option value="incubation">Incubation</option>
                <option value="vc-funding">VC Funding</option>
                <option value="strategic-investment">Strategic Investment</option>
              </select>
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

            <div className="flex justify-center mt-12">
              <button onClick={() => setStep(2)} className="yellow-btn">Next</button>
            </div>
          </div>
        )}

        {/* Step 2: Company Info */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-normal text-center mb-12 tracking-wide uppercase">
              ADD YOUR COMPANY DETAILS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <input type="text" placeholder="Company Name" className="form-input-underline" value={formData.companyName} onChange={(e) => updateField('companyName', e.target.value)} />
              <input type="text" placeholder="Industry" className="form-input-underline" value={formData.industry} onChange={(e) => updateField('industry', e.target.value)} />
              <input type="text" placeholder="Company Size" className="form-input-underline" value={formData.companySize} onChange={(e) => updateField('companySize', e.target.value)} />
              <select className="form-input-underline bg-transparent cursor-pointer" value={formData.companyCountry} onChange={(e) => updateField('companyCountry', e.target.value)}>
                <option value="">Company Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="uae">UAE</option>
              </select>
              <select className="form-input-underline bg-transparent cursor-pointer" value={formData.companyState} onChange={(e) => updateField('companyState', e.target.value)}>
                <option value="">Company State</option>
                <option value="goa">Goa</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
              </select>
              <select className="form-input-underline bg-transparent cursor-pointer" value={formData.companyCity} onChange={(e) => updateField('companyCity', e.target.value)}>
                <option value="">Company City</option>
                <option value="panjim">Panjim</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
              </select>
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
              <button onClick={() => setStep(1)} className="yellow-btn">Back</button>
              <button onClick={() => setStep(3)} className="yellow-btn">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">You&apos;re almost done!</h2>
            <p className="text-xl mb-16">Please confirm your submission.</p>

            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="yellow-btn">Back</button>
              <button onClick={() => setStep(4)} className="yellow-btn">Confirm</button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">You&apos;re All Set!</h2>
            <p className="text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              An email has been sent to your email address containing all the further process for the activation. Our team will reach out to you shortly for more details and will guide you further within 48 hours.
            </p>
            <p className="text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Please let us know if there is any more queries from your side, or you can contact us at : response@thebridg.com
            </p>

            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base hover:opacity-70 transition-opacity mb-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 13.5L2 7V17h20V7l-10 6.5z"/>
                <path fill="#FBBC05" d="M22 7l-10 6.5L2 7h20z"/>
                <path fill="#34A853" d="M12 13.5L22 7v10H2V7l10 6.5z"/>
                <path fill="#C5221F" d="M2 7l10 6.5L22 7H2z"/>
                <path fill="#4285F4" d="M2 7l10 6.5L22 7v-.5c0-.8-.7-1.5-1.5-1.5H3.5C2.7 5 2 5.7 2 6.5V7z"/>
              </svg>
              <span className="underline">Open Gmail</span>
            </a>

            <p className="text-sm text-[#666] mb-10">
              Did not receive an email? Please check your spam folder.
            </p>

            <Link to="/">
              <button className="yellow-btn">Go to Home</button>
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
