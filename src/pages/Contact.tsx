import { useState } from 'react';
import { X, Check } from 'lucide-react';
import PageLayout from '../components/shared/PageLayout';
import LiquidSelect from '../components/shared/LiquidSelect';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    reason: '',
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
      <div className="pt-8 pb-16 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl border border-[#1A1A1A] rounded-lg p-8 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center mb-8">
            Connect With Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <input
              type="text"
              placeholder="Name"
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
              type="tel"
              placeholder="Mobile Number"
              className="form-input-underline"
              value={formData.mobile}
              onChange={(e) => updateField('mobile', e.target.value)}
            />
            <LiquidSelect
              placeholder="Reason to Connect"
              value={formData.reason}
              onChange={(v) => updateField('reason', v)}
              options={[
                { value: 'partnership', label: 'Partnership' },
                { value: 'investment', label: 'Investment Related' },
                { value: 'careers', label: 'Careers Query' },
                { value: 'general', label: 'General Inquiry' },
              ]}
            />
            <textarea
              placeholder="Message"
              className="form-input-underline resize-none h-24 md:col-span-2"
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
            />
          </div>

          <div className="flex justify-center pt-10">
            <button type="submit" className="yellow-btn">Connect</button>
          </div>

          <div className="mt-10 pt-8 border-t border-[#BBBBBB] text-center text-sm" style={{ color: '#666' }}>
            <p>BIZ Nest Co-Working, Sunteck Kanaka Park, Panjim, Goa - India 403001</p>
            <p className="mt-1">
              <a href="mailto:response@bridg.com" className="font-semibold" style={{ color: '#1A73E8' }}>response@bridg.com</a>
            </p>
          </div>
        </form>
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

            <p className="text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
              Thank you for reaching out to BRIDG. We have received your enquiry and will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
