import Icon from "@mdi/react";
import {
    mdiWhiteBalanceSunny,
    mdiWaterPercent,
    mdiThermometerLines,
    mdiWeatherWindy,
    mdiGauge,
    mdiEye,
} from "@mdi/js";

const Card = ({ icon, text, val, unit }) => {
    return (
        <div className="bg-[rgba(255,255,255,0.5)] flex flex-col p-4 rounded-2xl gap-1">
            <Icon path={icon} size={1} />
            <p className="text-sm flex-1">{text}</p>
            <p>
                <strong>
                    <span className="text-xl">{val}</span>
                    <span className="text-sm">{unit}</span>
                </strong>
            </p>
        </div>
    );
};

const WeatherMetrics = ({ weather }) => {
    const { uvindex, feelslike, humidity, windspeed, pressure, visibility } =
        weather.currentConditions;

    return (
        <div className={"grid grid-cols-3 gap-2 sm:gap-5"}>
            <Card icon={mdiWhiteBalanceSunny} text="UV" val={uvindex} unit="" />
            <Card
                icon={mdiThermometerLines}
                text="Feels like"
                val={feelslike}
                unit="°"
            />
            <Card
                icon={mdiWaterPercent}
                text="Humidity"
                val={humidity}
                unit="%"
            />
            <Card
                icon={mdiWeatherWindy}
                text="W speed"
                val={windspeed}
                unit="mph"
            />
            <Card icon={mdiGauge} text="Pressure" val={pressure} unit="hPa" />
            <Card icon={mdiEye} text="Visibility" val={visibility} unit="mi" />
        </div>
    );
};

export default WeatherMetrics;
