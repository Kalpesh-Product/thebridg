import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

interface Concept {
  name: string;
  title: string;
  screenshot: string;
  /* Apply oval position/size as % of the screenshot, so the invisible click
     target stays aligned with the baked-in button regardless of viewport width. */
  applyBox: { left: number; top: number; width: number; height: number };
}

const concepts: Concept[] = [
  {
    name: 'NIKOLA TESLA',
    title: 'PRE-INCUBATION',
    screenshot: '/assets/Screenshot%201.png',
    applyBox: { left: 56.1, top: 84.6, width: 13.8, height: 10 },
  },
  {
    name: 'SAM ZELL',
    title: 'INCUBATION',
    screenshot: '/assets/Screenshot%202.png',
    applyBox: { left: 17.1, top: 83.6, width: 13.8, height: 11.1 },
  },
  {
    name: 'WARREN BUFFET',
    title: 'VC FUNDING',
    screenshot: '/assets/Screenshot%203.png',
    applyBox: { left: 17.2, top: 81.8, width: 13.8, height: 10.8 },
  },
  {
    name: 'RICHARD BRANSON',
    title: 'STRATEGIC INVESTMENT',
    screenshot: '/assets/Screenshot%204.png',
    applyBox: { left: 67.9, top: 88.2, width: 13.8, height: 10.7 },
  },
];

export default function Concepts() {
  return (
    <PageLayout>
      <div className="pt-4 pb-8">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8 tracking-wider">CONCEPTS</h1>

        <div className="space-y-0 -mx-6 md:-mx-12">
          {concepts.map((concept, index) => (
            <ScreenshotConceptCard key={index} concept={concept} />
          ))}
        </div>

        <div className="border-t-2 border-[#BBBBBB] mt-8" />
      </div>
    </PageLayout>
  );
}

function ScreenshotConceptCard({ concept }: { concept: Concept }) {
  return (
    <div className="relative w-full">
      <img
        src={concept.screenshot}
        alt={`${concept.name} — ${concept.title}`}
        className="w-full h-auto block"
      />
      <Link
        to="/connect"
        aria-label="Apply"
        className="absolute cursor-pointer"
        style={{
          left: `${concept.applyBox.left}%`,
          top: `${concept.applyBox.top}%`,
          width: `${concept.applyBox.width}%`,
          height: `${concept.applyBox.height}%`,
        }}
      />
    </div>
  );
}
