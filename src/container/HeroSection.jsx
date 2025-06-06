import { assets } from "../assets/assets.jsx";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
       className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `url(${assets.heroImage})`,
        filter: 'brightness(0.7)',
        }}
        aria-hidden="true"
      ></div>


      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Crafting Moments, <br />
          One Cup at a Time
        </h1>
        <p className="text-xl text-white mb-8 max-w-xl mx-auto">
          Experience the perfect blend of artisanal coffee and delicious treats in a cozy atmosphere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#menu"
            className="px-8 py-3 bg-[#5D4037] text-white rounded-full font-medium hover:bg-[#8B5A2B] transition-colors duration-300"
          >
            Explore Menu
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#5D4037] transition-colors duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
