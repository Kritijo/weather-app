const changeBg = (weather) => {
    if (!weather) return;

    if (weather.currentConditions.datetime) {
        const sunrise = weather.currentConditions.sunrise;
        const sunset = weather.currentConditions.sunset;
        const time = weather.currentConditions.datetime;

        const isNight = sunrise > time || sunset < time;

        document.body.classList.remove("day-bg", "night-bg");
        document.body.classList.add(isNight ? "night-bg" : "day-bg");
    }
};

export default changeBg;
