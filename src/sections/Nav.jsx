import Button from "../components/Button";
import AbstractIcon from "/abstract.svg";

const Nav = () => {
  return (
    <nav className="bg-black w-full py-5 flex justify-between items-center px-16">
      <div className="flex gap-2 text-white">
        <img src={AbstractIcon} alt="Abstract Logo" width={100} height={100} />
        <div className="">|</div>
        <a href="/">Help Center</a>
      </div>
      <div className="flex gap-3 max-sm:hidden">
        <Button label="Submit a request" SubmitReq />
        <Button label="Sign In" SignIn="bg-[#4C5FD5]" />
      </div>
      <div className="hidden max-sm:block">
        <box-icon name="menu" color="white" size="md"></box-icon>
      </div>
    </nav>
  );
};

export default Nav;
