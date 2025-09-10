"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaDumbbell } from "react-icons/fa";
import Image from "next/image";

const slides = [
  {
    heading: ["Personalized AI", "Training Plans"],
    sub: "Workouts and nutrition tailored to your body's unique metrics.",
    svg: "/muscle-fat-svgrepo-com.svg",
  },
  {
    heading: ["Maximum Results,", "Zero Compromise"],
    sub: "Experience the power of AI with a 3-day free trial.",
    svg: "/muscle-up-svgrepo-com.svg",
  },
  {
    heading: ["The Pro Package:", "Workout & Nutrition"],
    sub: "The complete package for maximum gains, personalized for you.",
    svg: "/muscular-man-showing-his-muscles-svgrepo-com.svg",
  },
];

export default function HeroPage() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setIsTransitioning(false);
      }, 700);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 text-white font-sans antialiased py-16 lg:py-0">
      {/* Background and decorations */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute top-0 left-0 w-full h-full animate-pulse-slow">
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/50 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-fuchsia-500/50 blur-3xl -bottom-20 -right-20"></div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 opacity-50">
        <div className="absolute inset-0 bg-repeat bg-[size:10px_10px] [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

        {/* Left column: Text */}
        <div className="flex-1 text-center lg:text-left z-30 animate-fade-in-up order-2 lg:order-1">
          <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
            <div className="bg-fuchsia-500/10 px-3 py-1 lg:px-4 lg:py-2 rounded-full border border-fuchsia-500/30 shadow-md flex items-center gap-2">
              <span className="text-fuchsia-400 text-sm">
                <FaDumbbell />
              </span>
              <span className="text-fuchsia-400 font-semibold tracking-wide uppercase text-xs lg:text-sm">YourBro - Your AI Trainer</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 block">
              {slide.heading[0]}
            </span>
            <span className="block">{slide.heading[1]}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 lg:mb-12 animate-fade-in-up delay-100 max-w-lg mx-auto lg:mx-0">{slide.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in-up delay-200">
            <Link
              href="/pricing"
              className="bg-cyan-500 text-gray-950 font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-full shadow-lg hover:bg-cyan-400 hover:scale-105 transition-all duration-300 text-base lg:text-lg flex items-center justify-center gap-2 group transform hover:-translate-y-1"
            >
              <span>Start 3-Day Free Trial</span>
              <span className="text-gray-950">
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-fuchsia-500 text-fuchsia-400 font-bold px-6 py-3 lg:px-8 lg:py-4 rounded-full hover:bg-fuchsia-500/20 hover:text-white hover:scale-105 transition-all duration-300 text-base lg:text-lg transform hover:-translate-y-1 text-center"
            >
              Our Pricing
            </Link>
          </div>
        </div>

        {/* Right column: SVG Image */}
        <div className="flex-1 flex items-center justify-center relative z-20 mt-4 lg:mt-0 order-1 lg:order-2 w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-2xl">
          <div className={`relative w-full aspect-square transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            {/* Külső színes keret - nagyobb asztalin */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-[2rem] lg:rounded-[3rem] xl:rounded-[4rem] transform rotate-3 shadow-[0_0_40px_rgba(0,255,255,0.3)] lg:shadow-[0_0_80px_rgba(0,255,255,0.4)] xl:shadow-[0_0_120px_rgba(0,255,255,0.5)]"></div>

            {/* Belső tartály - nagyobb asztalin */}
            <div className="absolute inset-2 lg:inset-4 xl:inset-6 bg-gray-900 rounded-[1.5rem] lg:rounded-[2.5rem] xl:rounded-[3.5rem] flex items-center justify-center overflow-hidden">

              {/* SVG kép - responsive méretezés */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={slide.svg}
                  alt="Body illustration"
                  fill // Ez a property helyettesíti a width/height-t és kitölti a szülőt
                  className="object-contain p-4 lg:p-6 xl:p-8 transform rotate-0 transition-transform duration-700 ease-in-out"
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </div>

            {/* Navigációs pontok */}
            <div className="absolute bottom-4 lg:bottom-6 xl:bottom-8 left-0 right-0 text-center">
              <div className="inline-flex space-x-2 bg-gray-900/70 backdrop-blur-sm px-3 py-1 lg:px-4 lg:py-2 xl:px-5 xl:py-3 rounded-full border border-gray-700">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full transition-all duration-300 ${i === index ? 'bg-fuchsia-400 scale-125' : 'bg-gray-600'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Key metrics */}
      <div className="relative mt-12 lg:absolute lg:bottom-8 w-full flex justify-center z-40 px-4 sm:px-6 order-3">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700 shadow-xl w-full max-w-xs sm:max-w-sm lg:max-w-lg">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">100%</div>
            <div className="text-gray-300 mt-1 lg:mt-2 text-xs sm:text-sm uppercase tracking-wider">Customized</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">AI</div>
            <div className="text-gray-300 mt-1 lg:mt-2 text-xs sm:text-sm uppercase tracking-wider">Smart Planning</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">24/7</div>
            <div className="text-gray-300 mt-1 lg:mt-2 text-xs sm:text-sm uppercase tracking-wider">Availability</div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite;
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-up.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}