import Search from "../components/Search";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-[#dadbf1] py-24">
      <h1 className="text-6xl sm:text-4xl max-sm:text-2xl lg:text-5xl font-medium">
        How can we help?
      </h1>
      <Search />
    </div>
  );
};

export default Hero;
