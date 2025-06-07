import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import iconMap from "../utils/IconMap";
import dayjs from "dayjs";

const WeatherCard = ({ weather, locationName }) => {
    const readableDate = dayjs(weather.days[0].datetime).format(
        "dddd | D MMMM YYYY"
    );
    const isCoordinate = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(
        weather.resolvedAddress
    );
    const displayName = isCoordinate ? locationName : weather.resolvedAddress;

    return (
        <div className={"bg-[rgba(255,255,255,0.1)] p-4 rounded-3xl"}>
            <h2 className="text-sm sm:text-xl font-semibold flex items-center">
                <Icon path={mdiMapMarker} size={1} />
                {displayName}
            </h2>
            <div className="flex gap-5">
                <div className="w-full">
                    <p className="text-4xl md:text-6xl my-4 font-extrabold">
                        {weather.currentConditions.temp}°C
                    </p>
                    <p className="text-xl sm:text-2xl font-bold capitalize">
                        {weather.currentConditions.conditions}
                    </p>
                    <p className="text-sm sm:text-md font-medium mt-2">
                        {readableDate}
                    </p>
                </div>
                <div>
                    <img
                        src={iconMap[weather.currentConditions.icon]}
                        className="h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
