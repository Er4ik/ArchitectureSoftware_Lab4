const put0ToDate = (parsedDate) => {
    return parsedDate.getDate() < 10 ? 0 : "";
};

const put0ToMonth = (parsedDate) => {
    return parsedDate.getMonth() < 10 ? 0 : "";
};

const dateHandlerCreate = (date) => {
    const parsedDate = new Date(date);
    const resDate = `${parsedDate.getFullYear()}-${put0ToMonth(parsedDate)}${parsedDate.getMonth() + 1}-${put0ToDate(
        parsedDate
    )}${parsedDate.getDate()}`;
    return resDate;
};

const dateHandlerValid = (date) => {
    const dateValues = {
        year: 0,
        month: 1,
        day: 2,
    }
    const newDate = dateHandlerCreate(new Date);

    splitDate = date.split('-');
    splitNewDate = newDate.split('-');

    if (splitDate[dateValues.year] < splitNewDate[dateValues.year]) return false;
    
    else if (
        splitDate[dateValues.year] === splitNewDate[dateValues.year] &&
        splitDate[dateValues.month] < splitNewDate[dateValues.month]
    ) {
        return false;
    } else if (
        splitDate[dateValues.year] === splitNewDate[dateValues.year] &&
        splitDate[dateValues.month] === splitNewDate[dateValues.month] &&
        splitDate[dateValues.day] < splitNewDate[dateValues.day]
    ) {
        return false;
    } 

    return true;
};

module.exports = { dateHandlerCreate, dateHandlerValid };