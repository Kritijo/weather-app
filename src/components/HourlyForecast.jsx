import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

import Icon from "@mdi/react";
import { mdiClockTimeTen } from "@mdi/js";
import convertTo12Hour from "../utils/convertTo12Hour";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const temperature = payload[0].value;
        return (
            <div className="bg-white/90 border border-sky-300 rounded-lg p-3 shadow-md text-sky-800 text-sm">
                <p className="font-semibold">Time: {label}</p>
                <p>Temperature: {temperature}°</p>
            </div>
        );
    }
    return null;
};

const HourlyForecast = ({ weather }) => {
    const hourlyData = weather.days[0].hours.map((hour) => ({
        time: convertTo12Hour(hour.datetime),
        temp: hour.temp,
    }));

    return (
        <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-3xl">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Icon path={mdiClockTimeTen} size={1} />
                24-Hour Forecast
            </h2>

            <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={hourlyData} margin={{ left: 20, right: 20 }}>
                    <XAxis
                        dataKey="time"
                        tick={{ fontSize: 12, fill: "#ffffff", dx: 5 }}
                        interval={10}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#a0f0ff"
                        fill="rgba(160, 240, 255, 0.2)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HourlyForecast;
