import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import iconMap from "../utils/IconMap";
import dayjs from "dayjs";

const WeatherCard = ({ weather }) => {
    const readableDate = dayjs(weather.days[0].datetime).format(
        "dddd | D MMMM YYYY"
    );

    return (
        <div
            className={"bg-[rgba(255,255,255,0.5)] p-4 rounded-3xl flex gap-5"}
        >
            <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold flex items-center">
                    <Icon path={mdiMapMarker} size={1} />
                    {weather.resolvedAddress}
                </h2>
                <p className="text-6xl my-4 font-extrabold">
                    {weather.currentConditions.temp}°C
                </p>
                <p className="text-2xl font-bold capitalize">
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
    );
};

export default WeatherCard;
