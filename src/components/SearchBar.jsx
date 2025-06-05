import { useRef } from "react";

const SearchBar = () => {
    const ref = useRef();
    return (
        <div className="flex w-50 sm:w-96">
            <input
                type="text"
                ref={ref}
                placeholder="Enter city name"
                className="text-black text-[16px] w-full px-4 py-1 bg-sky-50 border-b-2 border-blue-200 focus:bg-white rounded-2xl focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
