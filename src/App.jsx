import NavBar from "./components/NavBar";
import HourlyForecast from "./components/HourlyForecast";
import WeatherCard from "./components/WeatherCard";
import WeatherMetrics from "./components/WeatherMetrics";
import SunCycle from "./components/SunCycle";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import useFetch from "./utils/useFetch";

function App() {
    const { data, loading, error } = useFetch("Delhi", "uk");
    console.log(error);
    return (
        <>
            <NavBar />
            <main className="p-4 max-w-3xl my-4 mx-auto flex flex-col gap-4">
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <WeatherCard weather={data} />
                        <HourlyForecast weather={data} />
                        <WeatherMetrics weather={data} />
                        <SunCycle weather={data} />
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
