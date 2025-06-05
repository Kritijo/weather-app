import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherSunset } from "@mdi/js";
import convertTo12Hour from "../utils/convertTo12Hour";

const getTimePercentage = (sunrise, sunset) => {
    const now = new Date();

    const [srH, srM, srS] = sunrise.split(":").map(Number);
    const [ssH, ssM, ssS] = sunset.split(":").map(Number);

    const today = new Date();
    const sunriseTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        srH,
        srM,
        srS
    );

    const sunsetTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        ssH,
        ssM,
        ssS
    );

    const totalDaylightMs = sunsetTime - sunriseTime;
    const elapsedMs = now - sunriseTime;

    const progress = Math.max(0, Math.min(1, elapsedMs / totalDaylightMs));

    return progress * 100;
};

const SunCycle = ({ weather }) => {
    const sunrise = weather.currentConditions.sunrise;
    const sunset = weather.currentConditions.sunset;
    const percentage = getTimePercentage(sunrise, sunset);

    return (
        <div className="bg-[rgba(255,255,255,0.5)] rounded-2xl p-4 ">
            <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col items-center">
                    <Icon path={mdiWhiteBalanceSunny} size={1} />
                    <p className="text-sm">Sunrise</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon path={mdiWeatherSunset} size={1} />
                    <p className="text-sm">Sunset</p>
                </div>
            </div>
            <div className="relative w-full h-2 bg-gray-300 rounded-full my-2">
                <div
                    className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between">
                <p>{convertTo12Hour(sunrise)} </p>
                <p>{convertTo12Hour(sunset)} </p>
            </div>
        </div>
    );
};

export default SunCycle;
