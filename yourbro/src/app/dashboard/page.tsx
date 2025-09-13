"use client";
import { useEffect, useState } from "react";
import PlanCard, { DayPlan, NutritionMeal } from "@/components/PlanCard";

type Plan = {
  title: string;
  type: "workout" | "nutrition";
  content: DayPlan[] | NutritionMeal[];
};

export default function DashboardPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (!storedProfile) return;

    const parsedProfile = JSON.parse(storedProfile);
    setProfile(parsedProfile);

    let workoutPlan: DayPlan[] = [];
    let nutritionPlan: NutritionMeal[] = [];

    switch (parsedProfile.plan) {
      case "trial":
        workoutPlan = [
          {
            day: "Day 1",
            exercises: [
              { name: "Push-ups", sets: "3x10", instructions: "Keep back straight, elbows close to body", difficulty: "Easy" },
              { name: "Squats", sets: "3x15", instructions: "Keep knees behind toes", difficulty: "Easy" },
            ],
          },
          { day: "Day 2", exercises: [{ name: "Rest", sets: "-", instructions: "Take a day off to recover", difficulty: "Easy" }] },
          {
            day: "Day 3",
            exercises: [
              { name: "Running", sets: "20 min", instructions: "Maintain steady pace", difficulty: "Medium" },
              { name: "Plank", sets: "3x30s", instructions: "Keep body straight", difficulty: "Medium" },
            ],
          },
        ];
        nutritionPlan = [{ meal: "Upgrade to Pro for personalized nutrition plan", protein: 0, carbs: 0, fat: 0, kcal: 0 }];
        break;

      case "premium":
        workoutPlan = [
          {
            day: "Day 1",
            exercises: [
              { name: "Push-ups", sets: "4x12", instructions: "Focus on controlled movement", difficulty: "Medium" },
              { name: "Squats", sets: "4x15", instructions: "Maintain form", difficulty: "Medium" },
            ],
          },
          {
            day: "Day 2",
            exercises: [
              { name: "Pull-ups", sets: "3x8", instructions: "Full range of motion", difficulty: "Hard" },
              { name: "Lunges", sets: "3x12", instructions: "Keep torso upright", difficulty: "Medium" },
            ],
          },
          {
            day: "Day 3",
            exercises: [
              { name: "Running", sets: "30 min", instructions: "Moderate pace", difficulty: "Medium" },
              { name: "Plank", sets: "3x45s", instructions: "Engage core", difficulty: "Medium" },
            ],
          },
          { day: "Day 4", exercises: [{ name: "Rest", sets: "-", instructions: "Recovery day", difficulty: "Easy" }] },
          {
            day: "Day 5",
            exercises: [
              { name: "Deadlifts", sets: "3x10", instructions: "Keep back straight", difficulty: "Hard" },
              { name: "Bench Press", sets: "3x10", instructions: "Control movement", difficulty: "Medium" },
            ],
          },
        ];
        nutritionPlan = [{ meal: "Upgrade to Pro for personalized nutrition plan", protein: 0, carbs: 0, fat: 0, kcal: 0 }];
        break;

      case "pro":
        workoutPlan = [
          {
            day: "Day 1",
            exercises: [
              { name: "Push-ups", sets: "4x12", instructions: "Focus on controlled movement", difficulty: "Medium" },
              { name: "Squats", sets: "4x15", instructions: "Maintain form", difficulty: "Medium" },
            ],
          },
          {
            day: "Day 2",
            exercises: [
              { name: "Pull-ups", sets: "3x8", instructions: "Full range of motion", difficulty: "Hard" },
              { name: "Lunges", sets: "3x12", instructions: "Keep torso upright", difficulty: "Medium" },
            ],
          },
          {
            day: "Day 3",
            exercises: [
              { name: "Running", sets: "30 min", instructions: "Moderate pace", difficulty: "Medium" },
              { name: "Plank", sets: "3x45s", instructions: "Engage core", difficulty: "Medium" },
            ],
          },
          {
            day: "Day 4",
            exercises: [
              { name: "Deadlifts", sets: "3x10", instructions: "Keep back straight", difficulty: "Hard" },
              { name: "Bench Press", sets: "3x10", instructions: "Control movement", difficulty: "Medium" },
            ],
          },
          { day: "Day 5", exercises: [{ name: "Cardio HIIT", sets: "20 min", instructions: "High intensity intervals", difficulty: "Hard" }] },
        ];
        nutritionPlan = [
          { meal: "Breakfast: Oatmeal + Protein", protein: 25, carbs: 40, fat: 10, kcal: 350 },
          { meal: "Lunch: Chicken Salad", protein: 35, carbs: 20, fat: 15, kcal: 400 },
          { meal: "Snack: Greek Yogurt", protein: 15, carbs: 10, fat: 5, kcal: 150 },
          { meal: "Dinner: Salmon & Veggies", protein: 30, carbs: 15, fat: 20, kcal: 400 },
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
      {/* Background */}
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

      {/* Main content */}
      <div className="relative z-20 w-full max-w-5xl flex flex-col items-center gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
          Your Personalized AI Plan ({profile.plan.toUpperCase()})
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {plans.map((plan, idx) => (
            <PlanCard key={idx} title={plan.title} type={plan.type} content={plan.content} />
          ))}
        </div>
      </div>

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
