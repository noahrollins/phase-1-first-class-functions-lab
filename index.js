const returnFirstTwoDrivers = function () {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function () {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
}