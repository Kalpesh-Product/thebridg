import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { SiGmail } from 'react-icons/si';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';

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
            <h2 className="text-xl font-normal text-center pt-4 mb-5 tracking-wide">
              LET&apos;S SET UP YOUR ACCOUNT!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              <LiquidSelect
                placeholder="Type of Investment/Interest"
                value={formData.investmentType}
                onChange={(v) => updateField('investmentType', v)}
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

        {/* Step 2: Investment Details */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-normal text-center mb-12 tracking-wide uppercase">
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
            <h2 className="text-xl font-bold mb-5 text-center">You&apos;re All Set!</h2>

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
