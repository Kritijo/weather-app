import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HourlyForecast from "./components/HourlyForecast";
import WeatherCard from "./components/WeatherCard";
import WeatherMetrics from "./components/WeatherMetrics";
import SunCycle from "./components/SunCycle";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import useFetch from "./utils/useFetch";
import useLocation from "./utils/useLocation";
import changeBg from "./utils/changeBg";

function App() {
    const [query, setQuery] = useState(null);
    const { locationName } = useLocation(setQuery);
    const { data, loading, error } = useFetch(query);

    useEffect(() => {
        changeBg(data);
    }, [data]);

    return (
        <>
            <NavBar onSearch={setQuery} />
            <main className="p-4 max-w-3xl my-4 mx-auto flex flex-col gap-4 min-h-screen">
                {loading && <Loader />}
                {error && <p>{error}</p>}
                {data && (
                    <>
                        <WeatherCard
                            weather={data}
                            locationName={locationName}
                        />
                        <SunCycle weather={data} />
                        <HourlyForecast weather={data} />
                        <WeatherMetrics weather={data} />
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
