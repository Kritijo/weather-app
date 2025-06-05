import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import Icon from "@mdi/react";
import { mdiClockTimeTen } from "@mdi/js";
import convertTo12Hour from "../utils/convertTo12Hour";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const temperature = payload[0].value;
        return (
            <div className="bg-white/90 border border-sky-300 rounded-lg p-3 shadow-md text-sky-800 text-sm">
                <p className="font-semibold">Time: {label}</p>
                <p>Temperature: {temperature}°C</p>
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
        <div className="bg-[rgba(255,255,255,0.5)] p-4 rounded-3xl">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Icon path={mdiClockTimeTen} size={1} />
                24-Hour Forecast
            </h2>

            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={hourlyData}>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#a0f0ff"
                        strokeWidth={2}
                        dot={(props) => {
                            const { index, cx, cy } = props;
                            const isFirst = index === 0;
                            const isLast = index === hourlyData.length - 1;

                            if (isFirst || isLast) {
                                return (
                                    <circle
                                        key={index}
                                        cx={cx}
                                        cy={cy}
                                        r={4}
                                        fill="#a0f0ff"
                                    />
                                );
                            }

                            return null;
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HourlyForecast;
