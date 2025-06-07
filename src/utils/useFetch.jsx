import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (input, tempUnit) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!input) return;
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=${tempUnit}&key=${
                        import.meta.env.VITE_WEATHER_API_KEY
                    }&contentType=json`
                );

                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [input, tempUnit]);

    return { data, loading, error };
};

export default useFetch;
