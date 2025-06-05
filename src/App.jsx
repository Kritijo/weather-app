import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HourlyForecast from "./components/HourlyForecast";
import WeatherCard from "./components/WeatherCard";
import WeatherMetrics from "./components/WeatherMetrics";
import SunCycle from "./components/SunCycle";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import useFetch from "./utils/useFetch";
import axios from "axios";

function App() {
    const [query, setQuery] = useState(null);
    const [locationName, setLocationName] = useState("");

        const requestLocation = () =>
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setQuery(`${latitude},${longitude}`);
                try {
                    const { data } = await axios.get(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );

                    const city =
                        data.address.city ||
                        data.address.town ||
                        data.address.village ||
                        data.address.state ||
                        "Unknown location";

                    setLocationName(city);
                } catch {
                    setLocationName("Unknown location");
                }
            },
            (error) => {
                setQuery("New York");
                console.warn("Geolocation denied or failed:", error.message);
            }
        );

    useEffect(() => {
        requestLocation();
    }, []);

    let { data, loading, error } = useFetch(query);
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
