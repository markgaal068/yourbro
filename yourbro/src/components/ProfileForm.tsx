"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaUser, FaWeight, FaRulerVertical, FaBullseye, FaRunning } from "react-icons/fa";

export default function ProfileForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "trial"; // Trial, Premium, Pro

  const [form, setForm] = useState({
    age: "",
    sex: "",
    height: "",
    weight: "",
    activity: "",
    goals: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mentés localStorage-be, plan is
    localStorage.setItem("userProfile", JSON.stringify({ ...form, plan }));
    // Átirányítás Dashboard-ra
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl w-full max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
          Your Profile
        </span>
      </h2>

      {/* Age + Sex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <FaUser className="text-cyan-400" /> Age
          </label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <FaUser className="text-cyan-400" /> Sex
          </label>
          <select
            name="sex"
            value={form.sex}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Height + Weight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <FaRulerVertical className="text-fuchsia-400" /> Height (cm)
          </label>
          <input
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="Enter height"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 flex items-center gap-2">
            <FaWeight className="text-cyan-400" /> Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="Enter weight"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            required
          />
        </div>
      </div>

      {/* Activity level */}
      <div>
        <label className="block text-gray-300 mb-2 flex items-center gap-2">
          <FaRunning className="text-cyan-400" /> Activity Level
        </label>
        <select
          name="activity"
          value={form.activity}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        >
          <option value="">Select activity level</option>
          <option value="low">Low (sedentary)</option>
          <option value="medium">Medium (1–3 workouts/week)</option>
          <option value="high">High (4+ workouts/week)</option>
        </select>
      </div>

      {/* Goals */}
      <div>
        <label className="block text-gray-300 mb-2 flex items-center gap-2">
          <FaBullseye className="text-fuchsia-400" /> Fitness Goals
        </label>
        <textarea
          name="goals"
          value={form.goals}
          onChange={handleChange}
          placeholder="E.g., build muscle, lose fat, improve endurance"
          rows={3}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-transform transform hover:scale-105"
      >
        Save Profile
      </button>
    </form>
  );
}
