type PlanCardProps = {
  title: string;
  type: "workout" | "nutrition";
  content: string[];
};

export default function PlanCard({ title, type, content }: PlanCardProps) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
        {title} {type === "workout" ? "💪" : "🍎"}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {content.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
