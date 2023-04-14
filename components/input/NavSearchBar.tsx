import React from "react";

const NavSearchBar = () => {
  return (
    <div className="w-full justify-center flex z-10">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-full max-w-[330px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.70829 12.6875C3.41246 12.6875 0.729126 10.0041 0.729126 6.70829C0.729126 3.41246 3.41246 0.729126 6.70829 0.729126C10.0041 0.729126 12.6875 3.41246 12.6875 6.70829C12.6875 10.0041 10.0041 12.6875 6.70829 12.6875ZM6.70829 1.60413C3.89079 1.60413 1.60413 3.89663 1.60413 6.70829C1.60413 9.51996 3.89079 11.8125 6.70829 11.8125C9.52579 11.8125 11.8125 9.51996 11.8125 6.70829C11.8125 3.89663 9.52579 1.60413 6.70829 1.60413Z"
              fill="#FDFDFD"
            />
            <path
              d="M12.8333 13.2708C12.7225 13.2708 12.6116 13.23 12.5241 13.1425L11.3575 11.9758C11.1883 11.8066 11.1883 11.5266 11.3575 11.3575C11.5266 11.1883 11.8066 11.1883 11.9758 11.3575L13.1425 12.5241C13.3116 12.6933 13.3116 12.9733 13.1425 13.1425C13.055 13.23 12.9441 13.2708 12.8333 13.2708Z"
              fill="#FDFDFD"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full max-w-[330px] p-[10px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-[6px] bg-[#1B1F32] focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
    </div>
  );
};

export default NavSearchBar;
