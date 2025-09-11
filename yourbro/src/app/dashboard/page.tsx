"use client";
import { useEffect, useState } from "react";
import PlanCard from "@/components/PlanCard";

type Plan = {
    title: string;
    type: "workout" | "nutrition";
    content: string[];
};

export default function DashboardPage() {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const storedProfile = localStorage.getItem("userProfile");
        if (!storedProfile) return;

        const parsedProfile = JSON.parse(storedProfile);
        setProfile(parsedProfile);

        let workoutPlan: string[] = [];
        let nutritionPlan: string[] = [];

        switch (parsedProfile.plan) {
            case "trial":
                workoutPlan = [
                    "Day 1: Push-ups 3x10, Squats 3x15",
                    "Day 2: Rest",
                    "Day 3: Running 20 min, Plank 3x30s",
                ];
                nutritionPlan = ["Upgrade to Pro for personalized nutrition plan"];
                break;
            case "premium":
                workoutPlan = [
                    "Day 1: Push-ups 4x12, Squats 4x15",
                    "Day 2: Pull-ups 3x8, Lunges 3x12",
                    "Day 3: Running 30 min, Plank 3x45s",
                    "Day 4: Rest",
                    "Day 5: Deadlifts 3x10, Bench Press 3x10",
                ];
                nutritionPlan = ["Upgrade to Pro for personalized nutrition plan"];
                break;
            case "pro":
                workoutPlan = [
                    "Day 1: Push-ups 4x12, Squats 4x15",
                    "Day 2: Pull-ups 3x8, Lunges 3x12",
                    "Day 3: Running 30 min, Plank 3x45s",
                    "Day 4: Deadlifts 3x10, Bench Press 3x10",
                    "Day 5: Cardio HIIT 20 min",
                ];
                nutritionPlan = [
                    "Breakfast: Oatmeal + Protein",
                    "Lunch: Chicken Salad",
                    "Snack: Greek Yogurt",
                    "Dinner: Salmon & Veggies",
                ];
                break;
        }

        setPlans([
            { title: "Your AI Workout Plan", type: "workout", content: workoutPlan },
            { title: "Your AI Nutrition Plan", type: "nutrition", content: nutritionPlan },
        ]);
    }, []);

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-300 px-4">
                No profile data found. Please fill your{" "}
                <span className="text-cyan-400 font-semibold">Profile</span> first.
            </div>
        );
    }

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

            {/* Grid overlay */}
            <div className="absolute inset-0 z-10 opacity-50">
                <div className="absolute inset-0 bg-repeat bg-[size:10px_10px] [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]"></div>
            </div>

            {/* Main content */}
            <div className="relative z-20 w-full max-w-5xl flex flex-col items-center gap-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                    Your Personalized AI Plan ({profile?.plan?.toUpperCase() || "TRIAL"})
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {plans.map((plan, idx) => (
                        <PlanCard key={idx} title={plan.title} type={plan.type} content={plan.content} />
                    ))}
                </div>
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
