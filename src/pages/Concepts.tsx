import { useState } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

interface Concept {
  name: string;
  quote: string;
  title: string;
  image: string;
  imageFit: 'cover' | 'contain';
  objectPosition: string;
  bgColor: string;
  textColor: string;
  overlay?: boolean;
  imagePosition?: 'left' | 'right';
  imageScale?: number;
  imageInset?: number;
  applyImage?: string;
}

const concepts: Concept[] = [
  {
    name: 'NIKOLA TESLA',
    quote: '"A new idea must not be judged by its immediate results."',
    title: 'PRE-INCUBATION',
    image: '/assets/tesla.jpg',
    imageFit: 'cover',
    objectPosition: '75% center',
    overlay: true,
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
  },
  {
    name: 'SAM ZELL',
    quote: '"All the opportunity in the world means nothing if you don\'t actually pull the trigger"',
    title: 'INCUBATION',
    image: '/assets/bridge(10).png',
    imageFit: 'contain',
    objectPosition: 'center bottom',
    imagePosition: 'right',
    imageScale: 1.25,
    bgColor: '#A0A0A0',
    textColor: '#FFFFFF',
  },
  {
    name: 'WARREN BUFFET',
    quote: '"Its far better to buy a wonderful company at a fair price than a fair company at a wonderful price"',
    title: 'VC FUNDING',
    image: '/assets/buffett.png',
    imageFit: 'cover',
    objectPosition: 'center 15%',
    imagePosition: 'right',
    imageInset: 24,
    applyImage: '/assets/BRIDG__10.png',
    bgColor: '#C8C8C8',
    textColor: '#1A1A1A',
  },
  {
    name: 'RICHARD BRANSON',
    quote: '"My philoshy is that if I have any money I invest it in new venture and not have it sitting around"',
    title: 'STRATEGIC INVESTMENT',
    image: '/assets/branson.png',
    imageFit: 'cover',
    objectPosition: 'center 15%',
    imagePosition: 'left',
    applyImage: '/assets/BRIDG__10.png',
    bgColor: '#FFFFFF',
    textColor: '#1A1A1A',
  },
];

export default function Concepts() {
  return (
    <PageLayout>
      <div className="pt-4 pb-8">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8 tracking-wider">CONCEPTS</h1>

        <div className="space-y-0 -mx-6 md:-mx-12">
          {concepts.map((concept, index) => (
            concept.overlay ? (
              <OverlayConceptCard key={index} concept={concept} />
            ) : (
              <ConceptCard key={index} concept={concept} />
            )
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

function ApplyOval({ image = '/assets/BRIDG__9.png' }: { image?: string }) {
  return (
    <Link to="/connect" className="relative inline-flex items-center justify-center px-10 py-3.5 group">
      <span
        className="relative z-10 text-sm md:text-base font-bold uppercase tracking-wider"
        style={{ color: '#00A868' }}
      >
        Apply
      </span>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none object-fill"
        style={{ transform: image === '/assets/BRIDG__10.png' ? 'translateY(-8px)' : undefined }}
      />
    </Link>
  );
}

/* Tesla-style: text overlaid directly on a full-bleed photo */
function OverlayConceptCard({ concept }: { concept: Concept }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
      <img
        src={concept.image}
        alt={concept.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: concept.objectPosition }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0))' }} />

      <div className="relative flex flex-col justify-between p-8 md:p-12" style={{ minHeight: '100vh' }}>
        <div className="max-w-md">
          <h3 className="text-3xl md:text-4xl font-bold tracking-wider mb-4" style={{ color: concept.textColor }}>
            {concept.name}
          </h3>
          <p className="text-2xl md:text-3xl leading-relaxed" style={{ color: concept.textColor, opacity: 0.9 }}>
            {concept.quote}
          </p>
        </div>

        <div className="self-end text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-5" style={{ color: '#00A868' }}>
            {concept.title}
          </h2>
          <ApplyOval image={concept.applyImage} />
        </div>
      </div>
    </div>
  );
}

/* Standard split: photo bled to one edge, text hugging the other */
function ConceptCard({ concept }: { concept: Concept }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imageOnRight = concept.imagePosition === 'right';

  return (
    <div
      className="relative w-full overflow-hidden md:min-h-screen"
      style={{ backgroundColor: concept.bgColor }}
    >
      <div className={`flex flex-col ${imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch md:min-h-screen`}>
        {/* Image Side */}
        <div className="w-full md:w-[46%] relative">
          <div
            className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden"
            style={{ padding: concept.imageInset ? `${concept.imageInset}px` : undefined }}
          >
            <img
              src={concept.image}
              alt={concept.name}
              className={`w-full h-full transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                objectFit: concept.imageFit,
                objectPosition: concept.objectPosition,
                transform: concept.imageScale ? `scale(${concept.imageScale})` : undefined,
                transformOrigin: 'center bottom',
              }}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`w-full md:w-[54%] p-8 md:py-12 flex flex-col justify-center relative ${
            imageOnRight ? 'md:pl-12 md:pr-8 md:items-start text-left' : 'md:pr-12 md:pl-8 md:items-end text-right'
          }`}
        >
          <h3
            className="text-3xl md:text-4xl font-bold tracking-wider mb-4"
            style={{ color: concept.textColor }}
          >
            {concept.name}
          </h3>
          <p
            className="text-2xl md:text-3xl leading-relaxed mb-6 max-w-lg"
            style={{ color: concept.textColor, opacity: 0.9 }}
          >
            {concept.quote}
          </p>
          <div className={imageOnRight ? 'text-left' : 'text-right'}>
            <h2
              className="text-5xl md:text-7xl font-bold tracking-wider mb-5"
              style={{ color: '#00A868' }}
            >
              {concept.title}
            </h2>
            <ApplyOval image={concept.applyImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
