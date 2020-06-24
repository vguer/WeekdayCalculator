import $ from 'jQuery';
export function Date(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
  }

  Date.prototype.myDate = function() {
    let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let date = new Date(`${this.year}, ${this.month}, ${this.day}`);
  
  // let dayResult = date.getDay();
  return dayResult;
  console.log(weekday);
  }

    


//   // let weekdays = new Array(
//   //   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//   // );
//   // let dateResult = date.getDay();
//   // return weekdays[dateResult];
// }