"use client"
import ProfileForm from "@/components/ProfileForm";

export default function ProfilePage() {
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

      {/* Form content */}
      <div className="relative z-20 w-full">
        <ProfileForm />
      </div>

      {/* Animations */}
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
      `}</style>
    </section>
  );
}
