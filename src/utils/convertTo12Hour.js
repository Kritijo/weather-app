const convertTo12Hour = (time24) => {
    const [hourStr, minStr] = time24.split(":");

    let hour = parseInt(hourStr);
    const AP = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${hour}:${minStr} ${AP}`;
};

export default convertTo12Hour;
