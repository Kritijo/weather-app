import { useRef, useState } from "react";

const SearchBar = ({ onSearch }) => {
    const inputRef = useRef(null);

    const [location, setLocation] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (location.trim()) {
            onSearch(location.trim());
            inputRef.current.blur();
            setLocation("");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-50 sm:w-96 items-center gap-2"
        >
            <input
                type="text"
                ref={inputRef}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city name"
                className="text-black text-[16px] w-full px-4 py-1 bg-sky-50 focus:bg-white rounded-2xl focus:outline-none"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-2xl"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
