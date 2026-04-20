export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFFDF2]/80 backdrop-blur-sm overflow-hidden">
      <div className="noise absolute inset-0 opacity-10 pointer-events-none" />
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 bg-[#FA3C30] border-4 border-[#18181A] shadow-[4px_4px_0px_#18181A] rounded-2xl flex items-center justify-center animate-bounce">
          <span className="font-display text-white text-3xl">E</span>
        </div>
        <div className="mt-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#18181A] animate-[bounce_1s_infinite_0ms]" />
            <div className="w-3 h-3 rounded-full bg-[#FA3C30] animate-[bounce_1s_infinite_200ms]" />
            <div className="w-3 h-3 rounded-full bg-[#C1D544] animate-[bounce_1s_infinite_400ms]" />
        </div>
        <p className="mt-4 font-heading text-[#18181A] uppercase tracking-wider">Serving soon...</p>
      </div>
    </div>
  );
}
