import NavBar from "./components/NavBar";
import HourlyForecast from "./components/HourlyForecast";
import WeatherCard from "./components/WeatherCard";
import WeatherMetrics from "./components/WeatherMetrics";
import SunCycle from "./components/SunCycle";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavBar />
            <main className="p-4 max-w-3xl my-4 mx-auto flex flex-col gap-4">
                <WeatherCard />
                <HourlyForecast />
                <WeatherMetrics />
                <SunCycle />
            </main>
            <Footer />
        </>
    );
}

export default App;
