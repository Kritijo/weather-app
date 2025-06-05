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

const data = [
    { time: "00:00", temp: 21 },
    { time: "01:00", temp: 20 },
    { time: "02:00", temp: 20 },
    { time: "03:00", temp: 18 },
    { time: "04:00", temp: 18 },
    { time: "05:00", temp: 16 },
    { time: "06:00", temp: 20 },
    { time: "07:00", temp: 17 },
    { time: "08:00", temp: 16 },
    { time: "09:00", temp: 21 },
    { time: "10:00", temp: 26 },
    { time: "11:00", temp: 27 },
    { time: "12:00", temp: 28 },
    { time: "13:00", temp: 26 },
    { time: "14:00", temp: 27 },
    { time: "15:00", temp: 25 },
    { time: "16:00", temp: 23 },
    { time: "17:00", temp: 23 },
    { time: "18:00", temp: 20 },
    { time: "19:00", temp: 16 },
    { time: "20:00", temp: 14 },
    { time: "21:00", temp: 13 },
    { time: "22:00", temp: 12 },
    { time: "23:00", temp: 11 },
    { time: "24:00", temp: 10 },
];

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

const HourlyForecast = () => {
    return (
        <div className="bg-[rgba(255,255,255,0.5)] p-4 rounded-3xl">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
                <Icon path={mdiClockTimeTen} size={1} />
                24-Hour Forecast
            </h2>

            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={data}>
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
                            const isLast = index === data.length - 1;

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

                            return null; // Hide all other dots
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HourlyForecast;
