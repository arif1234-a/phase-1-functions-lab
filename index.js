let numberOfBlocks;
let travelDistanceInFeet;
function distanceFromHqInBlocks(blocks) {
  const headQuarters = 42;
  if (blocks >= headQuarters) {
    numberOfBlocks = blocks - headQuarters;
  } else if (blocks < headQuarters) {
    numberOfBlocks = -(blocks - headQuarters);
  }
  return numberOfBlocks;
}

function distanceFromHqInFeet(numberOfBlocks) {
  let distanceInFeet = distanceFromHqInBlocks(numberOfBlocks) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    travelDistanceInFeet = (destination - start) * 264;
  } else travelDistanceInFeet = -(destination - start) * 264;
  return travelDistanceInFeet;
}

function calculatesFarePrice(start, destination) {
  if (destination >= start) {
    travelDistanceInFeet = (destination - start) * 264;
  } else travelDistanceInFeet = -(destination - start) * 264;
  let fare;
  if (travelDistanceInFeet >= 0 && travelDistanceInFeet <= 400) {
    fare = 0;
    return 0;
  } else if (travelDistanceInFeet > 400 && travelDistanceInFeet <= 2000) {
    fare = (travelDistanceInFeet - 400) * 0.02;
    return fare;
  } else if (travelDistanceInFeet > 2000 && travelDistanceInFeet <+ 2500) {
    fare = 25;
    return fare;
  } else if (travelDistanceInFeet > 2500) {
    return "cannot travel that far";
  }
}
console.log(distanceFromHqInBlocks());
console.log(distanceFromHqInFeet());
console.log(distanceTravelledInFeet());
console.log (calculatesFarePrice())

