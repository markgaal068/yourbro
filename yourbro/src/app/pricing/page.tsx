"use client";
import Link from "next/link";
import { FaCheck, FaArrowRight, FaDumbbell, FaFire, FaCrown, FaChartLine, FaRobot, FaApple, FaUtensils } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Trial",
    price: "0",
    duration: "3-day free trial",
    description: "Experience our AI fitness planner with full access",
    features: [
      "AI-generated workout plan (3 days)",
      "Basic body metrics analysis",
      "Workout logging and tracking",
      "Access to exercise library",
      "Email support",
      "Limited AI recommendations"
    ],
    cta: "Start Free Trial",
    popular: false,
    icon: <FaDumbbell className="text-cyan-400" />,
    href: "/signup"
  },
  {
    name: "Premium",
    price: "10",
    duration: "per month",
    description: "Advanced AI workout plans with personalized recommendations",
    features: [
      "All Trial features",
      "Unlimited AI-generated workout plans",
      "Advanced statistical parameter analysis",
      "Progress tracking with analytics",
      "Customizable workout difficulty",
      "Exercise form videos & guides",
      "Priority email support",
      "Workout schedule optimization"
    ],
    cta: "Get Premium",
    popular: true,
    icon: <FaFire className="text-fuchsia-400" />,
    href: "/checkout/premium"
  },
  {
    name: "Pro",
    price: "20",
    duration: "per month",
    description: "Complete AI-powered fitness solution with workout and nutrition",
    features: [
      "All Premium features",
      "AI-generated personalized nutrition plan",
      "Macro nutrient calculator based on goals",
      "Meal planning with recipes",
      "Calorie tracking integration",
      "Supplement recommendations",
      "Monthly 1-on-1 AI coaching session",
      "Direct messaging with fitness experts",
      "Advanced body composition analysis"
    ],
    cta: "Go Pro",
    popular: false,
    icon: <FaCrown className="text-yellow-400" />,
    href: "/checkout/pro"
  }
];

export default function PricingPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 text-white font-sans antialiased py-16">
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
      <div className="relative z-30 container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="bg-fuchsia-500/10 px-4 py-2 rounded-full border border-fuchsia-500/30 shadow-md flex items-center gap-2">
              <span className="text-fuchsia-400">
                <FaRobot />
              </span>
              <span className="text-fuchsia-400 font-semibold tracking-wide uppercase text-sm">YourBro Plans</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
              AI-Powered Fitness
            </span>
            <span className="block">Personalized For You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI creates customized workout and nutrition plans based on your unique body metrics and goals
          </p>
        </div>

        {/* How it works section */}
        <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">AI Trainer</span> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analyze Metrics</h3>
              <p className="text-gray-300">Our AI analyzes your body statistics, fitness level, and goals to create your personalized plan.</p>
            </div>
            
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="bg-fuchsia-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRobot className="text-fuchsia-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Generate Plan</h3>
              <p className="text-gray-300">The AI creates optimized workout and nutrition plans tailored specifically to your needs.</p>
            </div>
            
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track & Adjust</h3>
              <p className="text-gray-300">As you progress, the AI continuously adjusts your plan based on your results and feedback.</p>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                plan.popular 
                  ? "border-2 border-fuchsia-500 bg-gray-900 shadow-xl shadow-fuchsia-500/20" 
                  : "border border-gray-800 bg-gray-900/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl lg:text-5xl font-black">${plan.price}</span>
                  {plan.price !== "0" && <span className="text-gray-400 ml-2">/mo</span>}
                </div>
                <p className="text-gray-400 mt-1">{plan.duration}</p>
              </div>
              
              <p className="text-gray-300 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1"><FaCheck size={14} /></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={plan.href}
                className={`w-full text-center font-bold px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                    : "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                }`}
              >
                <span>{plan.cta}</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20 lg:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">What metrics does the AI analyze?</h3>
              <p className="text-gray-300">Our AI considers your age, weight, height, fitness level, goals, available equipment, time commitment, and any previous injuries.</p>
            </div>
            
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">How often are plans updated?</h3>
              <p className="text-gray-300">The AI adjusts your plan weekly based on your progress, or immediately if you report significant changes in your metrics or goals.</p>
            </div>
            
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Can I use my own exercises?</h3>
              <p className="text-gray-300">Yes, Premium and Pro users can customize plans by adding their preferred exercises while maintaining AI optimization.</p>
            </div>
            
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Is nutrition personalized too?</h3>
              <p className="text-gray-300">Pro plan includes fully personalized nutrition based on your body type, goals, dietary restrictions, and food preferences.</p>
            </div>
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
      `}</style>
    </section>
  );
}