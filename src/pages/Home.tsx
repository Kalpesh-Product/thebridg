import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-6 pb-10 min-h-[calc(100vh-3.375rem)]">
        {/* Bridge Drawing */}
        <img src="/assets/BRIDG.png" alt="Bridge sketch" className="w-auto max-w-[750px] max-h-[22vh] mb-6" />

        {/* Tagline */}
        {/* <h1 className="font-serif text-3xl md:text-4xl font-normal mb-8">
          Bridging Unbacked{' '}
          <YellowHighlight>Founders</YellowHighlight>
        </h1>
        <p className="font-serif text-2xl md:text-3xl font-normal mb-12">
          to turn ideas into companies.
        </p> */}
        <img src="/assets/BRIDG__7.png" alt="Bridging Unbacked Founders to turn ideas into companies." className="w-auto max-w-[900px] max-h-[18vh] mb-8" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Link to="/connect">
            <button className="yellow-btn">APPLY AS FOUNDER</button>
          </Link>
          <Link to="/invest">
            <button className="yellow-btn">JOIN AS INVESTOR</button>
          </Link>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative -mx-6 md:-mx-12">
        <div
          className="w-full py-20 px-6 md:px-12 text-center"
          style={{ backgroundColor: '#2D2D2D' }}
        >
          <h2
            className="text-2xl md:text-3xl font-light tracking-[8px] text-white uppercase"
          >
            MISSION
          </h2>
          <h2
            className="text-2xl md:text-3xl font-light tracking-[8px] text-white uppercase mt-2"
          >
            STATEMENT
          </h2>

          <div className="flex justify-center my-10">
            <div className="w-24 h-0.5 bg-white" />
          </div>

          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            <span className="block pb-1">Building A Home For Early Founders Who Are Overlooked,</span>
            <span className="block">Underfunded, Self Driven, And Determined To Build What</span>
          </p>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed mt-2">
            {/* <YellowHighlight className="font-semibold">OTHERS WON&apos;T.</YellowHighlight> */}
            <span className="relative inline-block px-3 py-1">
              <span className="relative z-10 font-semibold">OTHERS WON&apos;T.</span>
              <img
                src="/assets/BRIDG__8.png"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{ top: '-234%', left: '-107%', width: '314%', height: '364%', objectFit: 'fill', maxWidth: 'none' }}
              />
            </span>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
