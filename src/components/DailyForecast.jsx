import Icon from "@mdi/react";
import { mdiCalendarToday } from "@mdi/js";
import dayjs from "dayjs";
import iconMap from "../utils/IconMap";

const DailyForecast = ({ weather }) => {
    const nextFiveDays = weather?.days?.slice(0, 5);

    return (
        <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-3xl">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Icon path={mdiCalendarToday} size={1} />
                Daily Forecast
            </h2>

            {nextFiveDays?.map((day, index) => (
                <div
                    key={day.datetime}
                    className="p-2 grid grid-cols-3 text-sm md:text-md font-semibold"
                >
                    <p>
                        {index === 0
                            ? "Today"
                            : dayjs(day.datetime).format("ddd DD")}
                    </p>
                    <img
                        src={iconMap[day.icon]}
                        alt={day.conditions}
                        className="h-6 w-6 "
                    />
                    <p className="capitalize text-end">{day.conditions}</p>
                </div>
            ))}
        </div>
    );
};

export default DailyForecast;
