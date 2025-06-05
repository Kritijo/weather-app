import SearchBar from "./SearchBar";
import PartlyCloudy from "../assets/PartlyCloudy.svg";

const NavBar = () => {
    return (
        <div className="flex flex-col gap-2 px-4 pt-4 md:flex-row justify-around items-center h-[18vh] md:h-20">
            <div className="flex items-center gap-2">
                <h1 className="text-xl pl-2 font-semibold">Weatherly</h1>
                <img src={PartlyCloudy} className="w-10" />
            </div>
            <SearchBar />
        </div>
    );
};

export default NavBar;