import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import iconMap from "../utils/IconMap";

const WeatherCard = () => {
    return (
        <div
            className={"bg-[rgba(255,255,255,0.5)] p-4 rounded-3xl flex gap-5"}
        >
            <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold flex items-center">
                    <Icon path={mdiMapMarker} size={1} />
                    New York
                </h2>
                <p className="text-6xl my-4 font-extrabold">40°C</p>
                <p className="text-2xl font-bold capitalize">Very Hot</p>
                <p className="text-sm sm:text-md font-medium mt-2">
                    Sunday | 12 July 2024
                </p>
            </div>
            <div>
                <img
                    src={iconMap["rain-snow-showers-day"]}
                    className="h-full w-full"
                />
            </div>
        </div>
    );
};

export default WeatherCard;
