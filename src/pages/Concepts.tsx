import { useState } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

const concepts = [
  {
    name: 'NIKOLA TESLA',
    quote: '"A new idea must not be judged by its immediate results."',
    title: 'PRE-INCUBATION',
    image: '/assets/tesla.jpg',
    imagePosition: 'right' as const,
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
  },
  {
    name: 'SAM ZELL',
    quote: '"All the opportunity in the world means nothing if you don\'t actually pull the trigger"',
    title: 'INCUBATION',
    image: '/assets/zell.jpg',
    imagePosition: 'right' as const,
    bgColor: '#A0A0A0',
    textColor: '#FFFFFF',
  },
  {
    name: 'WARREN BUFFET',
    quote: '"Its far better to buy a wonderful company at a fair price than a fair company at a wonderful price"',
    title: 'VC FUNDING',
    image: '/assets/buffett.jpg',
    imagePosition: 'right' as const,
    bgColor: '#C8C8C8',
    textColor: '#1A1A1A',
  },
  {
    name: 'RICHARD BRANSON',
    quote: '"My philoshy is that if I have any money I invest it in new venture and not have it sitting around"',
    title: 'STRATEGIC INVESTMENT',
    image: '/assets/branson.jpg',
    imagePosition: 'left' as const,
    bgColor: '#E8DDD8',
    textColor: '#1A1A1A',
  },
];

export default function Concepts() {
  return (
    <PageLayout>
      <div className="pt-4 pb-8">
        <h1 className="text-5xl md:text-6xl font-light text-center mb-8 tracking-wider">CONCEPTS</h1>

        <div className="space-y-0 -mx-6 md:-mx-12">
          {concepts.map((concept, index) => (
            <ConceptCard key={index} concept={concept} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

function ConceptCard({ concept }: { concept: typeof concepts[0] }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imageOnRight = concept.imagePosition === 'right';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: concept.bgColor, minHeight: '360px' }}
    >
      <div className={`flex flex-col ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden">
            <img
              src={concept.image}
              alt={concept.name}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative ${
            imageOnRight ? 'md:items-start text-left' : 'md:items-end text-right'
          }`}
        >
          <h3
            className="text-2xl md:text-3xl font-bold tracking-wider mb-4"
            style={{ color: concept.textColor }}
          >
            {concept.name}
          </h3>
          <p
            className="text-lg md:text-xl leading-relaxed mb-6 max-w-md italic"
            style={{ color: concept.textColor, opacity: 0.9 }}
          >
            {concept.quote}
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wider mb-6"
            style={{ color: '#FFEB3B' }}
          >
            {concept.title}
          </h2>
          <Link
            to="/connect"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-white hover:text-black"
            style={{ color: concept.textColor, borderColor: concept.textColor, borderWidth: '2px', borderStyle: 'solid' }}
          >
            APPLY
          </Link>
        </div>
      </div>
    </div>
  );
}
