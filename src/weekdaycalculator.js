export class Calculate {
  constructor (year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  checkYear() {
  
  }
    
    /* if ((this.year % 100 !== 0) && (this.year % 4 === 0) || (this.year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }*/

  checkDate() {
    let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
    let date = new Date(`${this.year}, ${this.month}, ${this.day}`);

    //if (this.year === checkYear()) {
    //  return 
    //} else {
  
    let dayResult = weekday[date.getDay()];
    return dayResult;
  //console.log(weekday);
  }
}
    


//   // let weekdays = new Array(
//   //   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//   // );
//   // let dateResult = date.getDay();
//   // return weekdays[dateResult];
// 