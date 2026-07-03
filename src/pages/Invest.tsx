import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

type Step = 1 | 2 | 3;

export default function Invest() {
  const [step, setStep] = useState<Step>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  const [formData, setFormData] = useState({
    investmentType: '',
    fullName: '',
    country: '',
    email: '',
    mobileNumber: '',
    linkedin: '',
    investmentPreferences: '',
    connectMethod: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      <div className={step === 2 ? "pt-8 pb-16 max-w-2xl mx-auto" : "pt-3 pb-4 max-w-2xl mx-auto"}>
        {/* Step Indicator */}
        {step < 3 && (
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-1 md:gap-2">
                <div className="flex flex-col items-center">
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
                  <span className="text-xs mt-0.5 uppercase tracking-wider text-center hidden sm:block">
                    {s === 1 ? 'PERSONAL INFO' : 'INVESTMENT DETAILS'}
                  </span>
                </div>
                {s < 2 && (
                  <div
                    className={`w-5 md:w-10 h-1 transition-colors duration-300 ${
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
            <h2 className="text-2xl font-normal text-center pt-4 mb-5 tracking-wide">
              LET&apos;S SET UP YOUR ACCOUNT!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              <select
                className="form-input-underline bg-transparent cursor-pointer"
                value={formData.investmentType}
                onChange={(e) => updateField('investmentType', e.target.value)}
              >
                <option value="">Type of Investment/Interest</option>
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

            <div className="flex justify-center pt-8">
              <button onClick={() => setStep(2)} className="yellow-btn !px-7 !py-2 text-sm">Next</button>
            </div>
          </div>
        )}

        {/* Step 2: Investment Details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-normal text-center mb-12 tracking-wide uppercase">
              TELL US ABOUT YOUR INTEREST
            </h2>

            <div className="space-y-6">
              <div className="border border-[#E0E0E0] rounded p-6">
                <h3 className="text-lg font-medium mb-4">Investment Preferences</h3>
                <p className="text-sm text-[#666] mb-4">
                  Please tell us which company interests you, the type of investment you are considering, and why this opportunity aligns with your investment goals.
                </p>
                <textarea
                  className="w-full p-4 bg-transparent border border-[#E0E0E0] rounded text-sm outline-none resize-none h-32 placeholder:text-[#999]"
                  placeholder="Add text"
                  value={formData.investmentPreferences}
                  onChange={(e) => updateField('investmentPreferences', e.target.value)}
                />
              </div>

              <div className="border border-[#E0E0E0] rounded p-6">
                <h3 className="text-lg font-medium mb-4">How would you like to connect</h3>
                <textarea
                  className="w-full p-4 bg-transparent border border-[#E0E0E0] rounded text-sm outline-none resize-none h-32 placeholder:text-[#999]"
                  placeholder="Add text"
                  value={formData.connectMethod}
                  onChange={(e) => updateField('connectMethod', e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button onClick={() => setStep(1)} className="yellow-btn !px-7 !py-2 text-sm">Back</button>
              <button onClick={() => setStep(3)} className="yellow-btn !px-7 !py-2 text-sm">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="pt-4">
            <h2 className="text-2xl font-bold mb-5 text-center">You&apos;re All Set!</h2>

            <p className="text-sm font-medium leading-relaxed mb-4 max-w-2xl">
              A confirmation email has been sent to your inbox. Our team will review your investment preferences and contact you with relevant opportunities, company introductions, and next steps.
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
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 13.5L2 7V17h20V7l-10 6.5z"/>
                <path fill="#FBBC05" d="M22 7l-10 6.5L2 7h20z"/>
                <path fill="#34A853" d="M12 13.5L22 7v10H2V7l10 6.5z"/>
                <path fill="#C5221F" d="M2 7l10 6.5L22 7H2z"/>
                <path fill="#4285F4" d="M2 7l10 6.5L22 7v-.5c0-.8-.7-1.5-1.5-1.5H3.5C2.7 5 2 5.7 2 6.5V7z"/>
              </svg>
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
