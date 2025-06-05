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

const WeatherMetrics = () => {
    return (
        <div className={"grid grid-cols-3 gap-2 sm:gap-5"}>
            <Card icon={mdiWhiteBalanceSunny} text="UV" val="3" unit="weak" />
            <Card
                icon={mdiThermometerLines}
                text="Feels like"
                val="38"
                unit="°"
            />
            <Card icon={mdiWaterPercent} text="Humidity" val="33" unit="%" />
            <Card icon={mdiWeatherWindy} text="W speed" val="5" unit="mph" />
            <Card icon={mdiGauge} text="Pressure" val="1004" unit="hPa" />
            <Card icon={mdiEye} text="Visibility" val="9" unit="mi" />
        </div>
    );
};

export default WeatherMetrics;
