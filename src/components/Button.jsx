const Button = ({ label, SignIn, SubmitReq, ButtonWide }) => {
  return (
    <button
      className={`border-[1px] p-1.5 rounded-md text-white ${
        SignIn
          ? `${SignIn}`
          : "px-4 bg-transparent hover:bg-white hover:bg-opacity-10"
      } ${SignIn ? "border-[1px] border-[#4C5FD5] px-4" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
