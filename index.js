class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}


let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled(){
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peakTime){
    if (peakTime === true){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
