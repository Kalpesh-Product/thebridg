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
        <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight mb-8 max-w-3xl">
          a BRIDG for{' '}
          <span className="relative inline-block px-3 py-1">
            <span className="relative z-10">Unbacked Founders</span>
            <img
              src="/assets/Main_BRIDG_11.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{ bottom: '-15%', left: '2%', right: '-2%', width: '100%', height: '220%', objectFit: 'contain', objectPosition: 'left bottom', maxWidth: 'none' }}
            />
          </span>
          <br />
          to become LEGENDARY.
        </h1>

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
            className="font-serif text-4xl md:text-6xl font-light tracking-[8px] text-white uppercase"
          >
            MISSION
          </h2>
          <h2
            className="font-serif text-4xl md:text-6xl font-light tracking-[8px] text-white uppercase mt-2"
          >
            STATEMENT
          </h2>

          <div className="flex justify-center my-10">
            <div className="w-[85%] max-w-3xl h-0.5 bg-white" />
          </div>

          <p className="font-serif text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            <span className="block pb-1">Building A Home For Early Founders Who Are Overlooked,</span>
            <span className="block">Underfunded, Self Driven, And Determined To Build What</span>
          </p>
          <p className="font-serif text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mt-2">
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
