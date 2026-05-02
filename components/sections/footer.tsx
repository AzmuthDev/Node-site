"use client";

export const Footer = () => {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="/images/node-logo.png" 
            alt="Node" 
            className="w-8 h-8 grayscale" 
            style={{ filter: 'invert(76%) sepia(88%) saturate(1487%) hue-rotate(143deg) brightness(101%) contrast(101%)' }}
          />
          <span className="text-white font-black text-2xl tracking-tighter">NODE.</span>
        </div>
        <p className="text-[#B3CDD7]/40 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Node Agência Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
