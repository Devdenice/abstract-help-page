import { features } from "../constants";

const Features = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-y-16 px-16 lg:px-44 max-sm:px-16 py-32   ">
      {features.map((feature) => (
        <div key={features.title} className="flex gap-2">
          <div className="w-[90px] h-[90px] overflow-hidden mr-3">
            <img
              src={feature.img}
              width={150}
              height={150}
              className="h-full w-full object-cover"
              alt="Sample"
            />
          </div>
          <div className="w-8/12 flex flex-col gap-2.5">
            <div className="text-lg font-bold">{feature.title}</div>
            <div className="text-medium leading-tight text-slate-700">
              {feature.details}
            </div>
            <div className="flex gap-2 items-center">
              <a className="text-[#4C5FD5]" href="/">
                {feature.linkText}
              </a>
              <img src={feature.icon} width={20} height={10} alt="Arrow Icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
