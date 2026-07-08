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
      <div className={step === 2 ? "pt-3 pb-16 max-w-5xl mx-auto" : "pt-3 pb-4 max-w-5xl mx-auto"}>
        {/* Step Indicator */}
        {(
          <div className="flex items-start justify-center gap-2 md:gap-3 mb-4 md:mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-start gap-2 md:gap-3">
                <div className="flex flex-col items-center sm:w-32">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 text-sm md:text-base rounded-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                      s < step
                        ? 'bg-[#00A868] text-white'
                        : s === step
                        ? 'bg-[#4ADE80] text-[#1A1A1A]'
                        : 'bg-[#BDBDBD] text-[#1A1A1A]'
                    }`}
                  >
                    {s}
                  </div>
                  <span className="text-xs md:text-sm mt-1 uppercase text-center whitespace-nowrap hidden sm:block">
                    {s === 1 ? 'PERSONAL INFO' : 'INVESTMENT DETAILS'}
                  </span>
                </div>
                {s < 2 && (
                  <div
                    className={`w-16 md:w-32 h-0.5 mt-5 md:mt-6 transition-colors duration-300 ${
                      s < step ? 'bg-[#00A868]' : 'bg-[#BDBDBD]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="md:min-h-[60vh] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-normal text-center pt-6 mb-10 md:mb-16 tracking-wide">
              LET&apos;S SET UP YOUR ACCOUNT!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-16">
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

            <div className="flex justify-center pt-14 md:pt-20">
              <button onClick={() => setStep(2)} className="yellow-btn">Next</button>
            </div>
          </div>
        )}

        {/* Step 2: Investment Details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-normal text-center pt-6 mb-10 md:mb-16 tracking-wide uppercase">
              TELL US ABOUT YOUR INTEREST
            </h2>

            <div className="space-y-8">
              <div className="border border-[#E0E0E0] rounded p-8">
                <h3 className="text-xl font-medium mb-4">Investment Preferences</h3>
                <p className="text-base text-[#666] mb-4">
                  Please tell us which company interests you, the type of investment you are considering, and why this opportunity aligns with your investment goals.
                </p>
                <textarea
                  className="w-full p-4 bg-transparent border border-[#E0E0E0] rounded text-base outline-none resize-none h-36 placeholder:text-[#999]"
                  placeholder="Add text"
                  value={formData.investmentPreferences}
                  onChange={(e) => updateField('investmentPreferences', e.target.value)}
                />
              </div>

              <div className="border border-[#E0E0E0] rounded p-8">
                <h3 className="text-xl font-medium mb-4">How would you like to connect</h3>
                <textarea
                  className="w-full p-4 bg-transparent border border-[#E0E0E0] rounded text-base outline-none resize-none h-36 placeholder:text-[#999]"
                  placeholder="Add text"
                  value={formData.connectMethod}
                  onChange={(e) => updateField('connectMethod', e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button onClick={() => setStep(1)} className="yellow-btn">Back</button>
              <button onClick={() => setStep(3)} className="yellow-btn">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="pt-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">You&apos;re All Set!</h2>

            <p className="text-lg md:text-xl font-medium leading-relaxed mb-4">
              A confirmation email has been sent to your inbox. Our team will review your investment preferences and contact you with relevant opportunities, company introductions, and next steps.
            </p>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
              Please let us know if there is any more queries from your side, or you can contact us at : response@thebridg.com
            </p>

            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg hover:opacity-70 transition-opacity mb-6"
            >
              <SiGmail size={26} color="#EA4335" />
              <span className="underline">Open Gmail</span>
            </a>

            <p className="text-base md:text-lg mb-8">
              Did not receive an email? Please check your spam folder.
            </p>

            <div className="flex justify-center">
              <Link to="/">
                <button className="yellow-btn">Go to Home</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
