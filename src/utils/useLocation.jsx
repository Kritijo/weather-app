import axios from "axios";
import { useState, useEffect } from "react";

const useLocation = (setQuery) => {
    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        const fetchLocation = () => {
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
                    setLocationName("New York");
                }
            );
        };
        fetchLocation();
    }, [setQuery]);

    return { locationName };
};

export default useLocation;
