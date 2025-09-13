"use client";
import { useState } from "react";

export type DayPlan = {
  day: string;
  exercises: {
    name: string;
    sets: string;
    instructions: string;
    difficulty: "Easy" | "Medium" | "Hard";
  }[];
};

export type NutritionMeal = {
  meal: string;
  protein: number;
  carbs: number;
  fat: number;
  kcal: number;
};

type PlanCardProps = {
  title: string;
  type: "workout" | "nutrition";
  content: DayPlan[] | NutritionMeal[];
};

export default function PlanCard({ title, type, content }: PlanCardProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-800">
      <h2 className="text-xl font-bold mb-4 text-cyan-400">{title}</h2>

      {type === "workout" && (
        <div className="space-y-4">
          {(content as DayPlan[]).map((dayPlan, dayIdx) => (
            <div key={dayIdx} className="border border-gray-700 rounded-lg">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === dayIdx ? null : dayIdx)
                }
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg"
              >
                <span className="font-medium text-white">{dayPlan.day}</span>
                <span className="text-gray-400 text-sm">
                  {openIndex === dayIdx ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === dayIdx && (
                <div className="p-4 space-y-3">
                  {dayPlan.exercises.map((ex, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-950 p-3 rounded-lg border border-gray-800"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">
                          {ex.name} ({ex.sets})
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ex.difficulty === "Easy"
                              ? "bg-green-600 text-white"
                              : ex.difficulty === "Medium"
                              ? "bg-yellow-600 text-white"
                              : "bg-red-600 text-white"
                          }`}
                        >
                          {ex.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-2">
                        {ex.instructions}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {type === "nutrition" && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-800">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-4 py-2">Meal</th>
                <th className="px-4 py-2">Protein (g)</th>
                <th className="px-4 py-2">Carbs (g)</th>
                <th className="px-4 py-2">Fat (g)</th>
                <th className="px-4 py-2">Kcal</th>
              </tr>
            </thead>
            <tbody>
              {(content as NutritionMeal[]).map((meal, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-700 hover:bg-gray-800"
                >
                  <td className="px-4 py-2 text-white">{meal.meal}</td>
                  <td className="px-4 py-2">{meal.protein}</td>
                  <td className="px-4 py-2">{meal.carbs}</td>
                  <td className="px-4 py-2">{meal.fat}</td>
                  <td className="px-4 py-2">{meal.kcal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
