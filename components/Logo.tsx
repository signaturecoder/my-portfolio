const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#58a6ff] to-[#bc5cff] flex items-center justify-center text-white font-bold">S</div>
      <span className="font-semibold text-[var(--text)] hidden sm:inline">Signaturecoder</span>
    </div>
  );
};

export default Logo;
