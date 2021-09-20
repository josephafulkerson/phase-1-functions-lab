const hq = 42

function distanceFromHqInBlocks(num) {
    if (num >= hq) {
        return num - hq
    } else {
        return hq - num
    }
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
}


function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2)  {
        return (num1 - num2) * 264
    } else {
        return (num2 - num1) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0

    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02

    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25

    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}