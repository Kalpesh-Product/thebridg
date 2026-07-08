import { useState } from 'react';
import PageLayout from '../components/shared/PageLayout';

const pillInput = 'w-full px-6 py-4 bg-transparent border-2 border-[#BBBBBB] rounded-full text-sm outline-none transition-colors placeholder:text-[#1A1A1A] placeholder:font-medium focus:border-[#00A868]';

export default function Invest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageLayout>
      <div className="pt-8 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-10 items-start">
          {/* Left: copy */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#00A868' }}>
              Become a Partner
            </h1>
            <div className="w-24 md:w-32 h-1 mb-8" style={{ backgroundColor: '#00A868' }} />

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
          <form onSubmit={handleSubmit} className="border-2 border-[#BBBBBB] rounded-lg p-8 md:p-10">
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
              <input
                type="tel"
                placeholder="Mobile Number"
                className={pillInput}
                value={formData.mobileNumber}
                onChange={(e) => updateField('mobileNumber', e.target.value)}
              />
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
    </PageLayout>
  );
}
