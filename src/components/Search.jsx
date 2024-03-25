import "boxicons";

const Search = () => {
  return (
    <div className="w-3/6 mx-auto relative shadow-md mt-6">
      <input
        className="w-full h-14 border-2 rounded-[5px] px-2 "
        type="text"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none px-2">
        <box-icon name="right-arrow-alt"></box-icon>
      </div>
    </div>
  );
};

export default Search;
