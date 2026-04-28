"use client";

export const Footer = () => {
  return (
    <footer className="bg-[#020617] py-8 border-t border-[#B3CDD7]/5 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#19D1E6] font-bold text-xl tracking-tighter">NODE.</span>
        </div>
        <p className="text-[#B3CDD7]/60 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Node Agência Digital. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6 text-sm text-[#B3CDD7]/70">
          <a href="#" className="hover:text-[#19D1E6] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#19D1E6] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#19D1E6] transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
