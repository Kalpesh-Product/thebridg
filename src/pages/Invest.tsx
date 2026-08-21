import { useState } from 'react';
import { X, Check } from 'lucide-react';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';
import { DIAL_CODE_OPTIONS } from '../data/countryCodes';

const pillInput = 'w-full px-6 py-4 bg-transparent border-2 border-[#BBBBBB] rounded-full text-sm outline-none transition-colors placeholder:text-[#1A1A1A] placeholder:font-medium focus:border-[#00A868]';

export default function Invest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileCountryCode: '',
    mobileNumber: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <PageLayout>
      <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-48 gap-y-10 items-start">
          {/* Left: copy */}
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#00A868' }}>
              Become a Partner
            </h1>
            <div className="w-24 md:w-56 h-1 mb-8" style={{ backgroundColor: '#00A868' }} />

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#1A1A1A' }}>
              BRIDG is the world&apos;s first student led venture building platform, connecting students, startups, investors, universities, and industry leaders through one integrated ecosystem.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#1A1A1A' }}>
              We welcome partnerships with universities, incubators, accelerators, venture capital firms, angel investors, corporations, government organisations, and ecosystem enablers committed to shaping the future of entrepreneurship.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
              Together, we&apos;re building the next generation of founders, startups, and industry defining companies.
            </p>
          </div>

          {/* Right: contact box */}
          <form onSubmit={handleSubmit} className="border-2 border-[#BBBBBB] rounded-lg p-8 md:p-10 w-full max-w-[460px] md:ml-auto">
            <h2 className="text-xl md:text-2xl text-center uppercase tracking-wide text-[#666] mb-8">
              Partner With BRIDG
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className={pillInput}
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className={pillInput}
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
              <div className="flex gap-3">
                <div className="w-28 shrink-0">
                  <LiquidSelect
                    placeholder="Code"
                    value={formData.mobileCountryCode}
                    onChange={(v) => updateField('mobileCountryCode', v)}
                    options={DIAL_CODE_OPTIONS}
                    triggerClassName={pillInput}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className={`${pillInput} flex-1 min-w-0`}
                  value={formData.mobileNumber}
                  onChange={(e) => updateField('mobileNumber', e.target.value)}
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full px-6 py-4 bg-transparent border-2 border-[#BBBBBB] rounded-lg text-sm outline-none transition-colors resize-none h-32 placeholder:text-[#1A1A1A] placeholder:font-medium focus:border-[#00A868]"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </div>

            <div className="flex justify-center pt-8">
              <button type="submit" className="yellow-btn">Submit</button>
            </div>
          </form>
        </div>
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

            <h2 className="text-2xl font-bold mb-4">Success</h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: '#1A1A1A' }}>
              Thank you for your interest in partnering with BRIDG. We have received your submission and our team will get in touch with you shortly.
            </p>

            <p className="text-base leading-relaxed">
              Regards,
              <br />
              Team BRIDG
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
