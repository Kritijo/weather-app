const changeBg = (weather) => {
    if (!weather) return;

    const { datetime, sunrise } = weather.currentConditions;

    const hour = parseInt(datetime.split(":").shift());
    let bgClass = "morning-bg";

    if (datetime >= sunrise && hour < 12) {
        bgClass = "morning-bg";
    } else if (hour >= 12 && hour < 17) {
        bgClass = "day-bg";
    } else if (hour >= 17 && hour <= 21) {
        bgClass = "evening-bg";
    } else {
        bgClass = "night-bg";
    }

    document.body.classList.remove(
        "morning-bg",
        "day-bg",
        "evening-bg",
        "night-bg"
    );
    document.body.classList.add(bgClass);
};

export default changeBg;
