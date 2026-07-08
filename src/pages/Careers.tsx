import PageLayout from '../components/shared/PageLayout';

const positions = [
  'Chief Operating Officer',
  'Analyst',
  'Marketing Executive',
  'Administration Manager',
  'Business Development Manager',
];

export default function Careers() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16 px-6 md:px-10">
        {/* Title */}
        <div className="mb-12">
          <h1 className="relative inline-block text-2xl md:text-3xl font-bold uppercase tracking-wider">
            OPEN POSITIONS
            <svg className="absolute -bottom-2 left-0 w-[110%] -left-[5%]" style={{ height: '6px' }} viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
              <path d="M2 4 Q30 2 60 4 Q90 6 120 3 Q150 1 180 4 Q190 5 198 4" stroke="#00A868" strokeWidth="5" strokeLinecap="round" fill="none" />
            </svg>
          </h1>
        </div>

        {/* Positions List */}
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-6 border-b-2 border-[#1A1A1A] hover:bg-black/5 transition-colors -mx-4 px-4"
            >
              <span className="text-base font-normal">{position}</span>
              <button className="outline-btn">APPLY</button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
