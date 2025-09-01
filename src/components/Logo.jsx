const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src="/qdicon.svg" className="h-10 w-auto rounded-full" />
      <div className="hidden text-center font-spline text-lg font-semibold text-white 2xl:block">
        Quikk
        <span className="bg-linear-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
          Design
        </span>
      </div>
    </div>
  );
};

export default Logo;
