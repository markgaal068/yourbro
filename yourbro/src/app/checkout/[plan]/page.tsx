"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Plan = "premium" | "pro";

export default function CheckoutPage() {
  const router = useRouter();
  const params = useParams();
  const planParam = params?.plan as Plan | undefined;

  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) setProfile(JSON.parse(storedProfile));
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 px-4">
        No profile found. Please fill your{" "}
        <span className="text-cyan-400 font-semibold">Profile</span> first.
      </div>
    );
  }

  if (!planParam || !["premium", "pro"].includes(planParam)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300 px-4">
        Invalid plan selected.
      </div>
    );
  }

  const handlePayment = () => {
    localStorage.setItem(
      "userProfile",
      JSON.stringify({ ...profile, plan: planParam })
    );
    router.push("/dashboard");
  };

  const planData = {
    premium: {
      name: "Premium",
      price: "$10/month",
      description: "Unlimited AI-generated workout plans and advanced stats.",
    },
    pro: {
      name: "Pro",
      price: "$20/month",
      description: "Premium + personalized AI nutrition plans and coaching.",
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 text-white font-sans antialiased py-12 px-4">
      {/* Background neon blobs */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute top-0 left-0 w-full h-full animate-pulse-slow">
          <div className="absolute w-72 h-72 rounded-full bg-cyan-500/50 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-fuchsia-500/50 blur-3xl -bottom-20 -right-20"></div>
        </div>
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 opacity-50">
        <div className="absolute inset-0 bg-repeat bg-[size:10px_10px] [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]"></div>
      </div>

      {/* Main Checkout card */}
      <div className="relative z-20 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 sm:p-12 max-w-md w-full shadow-xl flex flex-col gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
          {planData[planParam].name} Checkout
        </h2>

        <p className="text-gray-300 text-center">{planData[planParam].description}</p>
        <p className="text-2xl font-bold text-center">{planData[planParam].price}</p>

        <button
          onClick={handlePayment}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-transform transform hover:scale-105"
        >
          Confirm & Pay
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 10s infinite; }
      `}</style>
    </section>
  );
}
