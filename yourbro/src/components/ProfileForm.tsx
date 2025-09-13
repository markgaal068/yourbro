"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUser, FaWeight, FaRulerVertical, FaBullseye, FaRunning } from "react-icons/fa";

export default function ProfileForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "trial"; // keep current behavior

  const [form, setForm] = useState({
    age: "",
    sex: "",
    height: "",
    weight: "",
    activity: "",
    goals: "",
    dailyCalories: "",
    dietaryPreferences: [] as string[], // e.g. ["gluten-free", "vegan"]
    allergies: [] as string[], // free text tags
    equipment: [] as string[], // e.g. ["dumbbells","bench"]
    fitnessLevel: "beginner"
  });

  const toggleArrayValue = (key: keyof typeof form, value: string) => {
    // @ts-ignore
    const arr: string[] = form[key] || [];
    const exists = arr.includes(value);
    const newArr = exists ? arr.filter((a) => a !== value) : [...arr, value];
    setForm({ ...form, [key]: newArr });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mentés localStorage-be - plan is included
    const payload = { ...form, plan };
    localStorage.setItem("userProfile", JSON.stringify(payload));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Your Profile</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">Age</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Sex</label>
          <select name="sex" value={form.sex} onChange={handleChange} required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
            <option value="">Select</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">Height (cm)</label>
          <input type="number" name="height" value={form.height} onChange={handleChange} required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700" />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Weight (kg)</label>
          <input type="number" name="weight" value={form.weight} onChange={handleChange} required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700" />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Activity Level</label>
        <select name="activity" value={form.activity} onChange={handleChange} required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
          <option value="">Select activity level</option>
          <option value="low">Low (sedentary)</option>
          <option value="medium">Medium (1–3 workouts/week)</option>
          <option value="high">High (4+ workouts/week)</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Fitness Goals</label>
        <textarea name="goals" value={form.goals} onChange={handleChange} rows={2}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700" placeholder="e.g. build muscle, lose fat"></textarea>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">Daily Calorie Goal (kcal)</label>
          <input type="number" name="dailyCalories" value={form.dailyCalories} onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700" />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Fitness Level</label>
          <select name="fitnessLevel" value={form.fitnessLevel} onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Dietary preferences */}
      <div>
        <p className="text-gray-300 mb-2">Dietary preferences / restrictions</p>
        <div className="flex flex-wrap gap-2">
          {["gluten-free","lactose-free","vegan","vegetarian","paleo","keto"].map((d) => (
            <button
              type="button"
              key={d}
              onClick={() => toggleArrayValue("dietaryPreferences", d)}
              className={`px-3 py-1 rounded-full border ${form.dietaryPreferences.includes(d) ? "bg-fuchsia-500/80 text-white" : "bg-gray-800 text-gray-300"} border-gray-700`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Allergies (quick tags) */}
      <div>
        <label className="block text-gray-300 mb-2">Allergies / Important foods (comma separated)</label>
        <input type="text" name="allergies" value={(form.allergies || []).join(",")} onChange={(e) => setForm(prev => ({ ...prev, allergies: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) }))}
          placeholder="e.g. peanuts, shellfish" className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700" />
      </div>

      {/* Equipment */}
      <div>
        <p className="text-gray-300 mb-2">Available equipment</p>
        <div className="flex flex-wrap gap-2">
          {["bodyweight","dumbbells","barbell","bench","pull-up bar","kettlebell"].map((eq) => (
            <button type="button" key={eq} onClick={() => toggleArrayValue("equipment", eq)}
              className={`px-3 py-1 rounded-full border ${form.equipment.includes(eq) ? "bg-cyan-500/80 text-white" : "bg-gray-800 text-gray-300"} border-gray-700`}>
              {eq}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-transform transform hover:scale-105">
        Save Profile
      </button>
    </form>
  );
}
