import SearchBar from "./SearchBar";
import PartlyCloudy from "../assets/PartlyCloudy.svg";

const NavBar = ({ onSearch, onClick, tempUnit }) => {
    return (
        <div className="flex flex-col gap-2 px-4 pt-4 md:flex-row justify-around items-center h-[18vh] md:h-20">
            <div className="flex items-center gap-2">
                <h1 className="text-xl pl-2 font-semibold">Weatherly</h1>
                <img src={PartlyCloudy} className="w-10" />
            </div>
            <SearchBar onSearch={onSearch} />
            <div className="flex items-center gap-2">
                <select
                    value={tempUnit}
                    onChange={(e) => onClick(e.target.value)}
                    className="px-2 py-1 rounded-xl font-semibold bg-blue-500 focus:bg-blue-200"
                >
                    <option value="uk">°C</option>
                    <option value="us">°F</option>
                </select>
            </div>
        </div>
    );
};

export default NavBar;
