import PageLayout from '../components/shared/PageLayout';

export default function About() {
  return (
    <PageLayout>
      <div className="pt-8 pb-16">
        <div className="text-center mb-10">
          <h1 className="relative inline-block text-2xl md:text-3xl font-bold uppercase tracking-wider">
            ABOUT BRIDG
            <svg className="absolute -bottom-2 left-0 w-full" style={{ height: '6px' }} viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
              <path d="M2 4 Q30 2 60 4 Q90 6 120 3 Q150 1 180 4 Q190 5 198 4" stroke="#00A868" strokeWidth="5" strokeLinecap="round" fill="none" />
            </svg>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-base leading-relaxed" style={{ color: '#1A1A1A' }}>
          <p>
            <strong>BRIDG</strong> is the world&apos;s first student led venture building platform, connecting students, startups, investors, universities, and industry leaders through one integrated ecosystem.
          </p>
          <p>
            We help early-stage founders go from idea to execution by pairing them with <strong>mentors, capital, and a network of partners</strong> who believe in building the next generation of impactful companies.
          </p>
          <p>
            Through our platform, students and young founders can access hands-on venture building support, connect with investors, and bring their ideas to market with a team that has walked the path before them.
          </p>

          <h4 className="font-bold uppercase mt-8 text-xl">Our Mission</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>To empower students and early founders to build real, scalable companies while still in the earliest stages of their careers.</li>
            <li>To connect a global network of students, startups, universities, and investors under one venture building ecosystem.</li>
          </ul>

          <h4 className="font-bold uppercase mt-8 text-xl">Our Vision</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>To become the world&apos;s leading student led venture builder, turning ambitious ideas into industry defining companies.</li>
            <li>To build the largest community of student founders and the mentors, investors, and partners who back them.</li>
          </ul>

          <h4 className="font-bold uppercase mt-8 text-xl">Our Edge</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>A fully integrated platform combining <strong>mentorship, funding access, and hands-on execution support</strong>.</li>
            <li>Partnerships across universities, incubators, and industry leaders committed to entrepreneurship.</li>
            <li>Designed for both <strong>individual founders</strong> and <strong>growing startup teams</strong>.</li>
          </ul>

          <p className="font-semibold pt-4">
            At BRIDG, we&apos;re not just following the future of entrepreneurship — we&apos;re building it.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
