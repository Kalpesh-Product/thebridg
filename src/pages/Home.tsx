import { Link } from 'react-router';
import PageLayout from '../components/shared/PageLayout';
import YellowHighlight from '../components/shared/YellowHighlight';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-12 pb-20">
        {/* Bridge Drawing */}
        <img src="/assets/BRIDG.png" alt="Bridge sketch" className="w-full max-w-[500px] mb-8" />

        {/* Tagline */}
        <h1 className="text-3xl md:text-4xl font-normal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Bridging Unbacked{' '}
          <YellowHighlight>Founders</YellowHighlight>
        </h1>
        <p className="text-2xl md:text-3xl font-normal mb-12" style={{ fontFamily: 'Georgia, serif' }}>
          to turn ideas into companies.
        </p>

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
            className="text-4xl md:text-5xl font-light tracking-[8px] text-white uppercase"
          >
            MISSION
          </h2>
          <h2
            className="text-4xl md:text-5xl font-light tracking-[8px] text-white uppercase mt-2"
          >
            STATEMENT
          </h2>

          <div className="flex justify-center my-10">
            <div className="w-24 h-0.5 bg-white" />
          </div>

          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Building A Home For Early Founders Who Are Overlooked, Underfunded, Self Driven, And Determined To Build What
          </p>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed mt-2">
            <span className="relative inline-block px-3 py-1">
              <span className="relative z-10 font-semibold">OTHERS WON&apos;T.</span>
              <svg
                className="absolute pointer-events-none"
                style={{ top: '-18%', bottom: '-22%', left: '-4%', right: '-4%' }}
                viewBox="0 0 200 60"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 8 C6 8 4 10 4 16 L3 44 C3 50 6 53 12 53 L188 55 C194 55 197 52 197 46 L198 15 C198 9 195 6 189 6 L14 5 C11 5 9 6 10 8"
                  stroke="#FFEB3B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
