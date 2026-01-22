import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#141414] flex items-center justify-center">
      <div className="text-center">
        {/* Logo animation */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 bg-mustard/20 rounded-full animate-ping" />
          <div className="relative w-16 h-16 bg-mustard/10 rounded-full flex items-center justify-center">
            <LoadingSpinner size="lg" className="border-mustard/30 border-t-mustard" />
          </div>
        </div>

        {/* Loading text */}
        <p className="text-white/60 text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </main>
  );
}
