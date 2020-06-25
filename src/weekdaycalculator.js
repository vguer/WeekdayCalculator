export class Calculate {
  constructor (year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  checkYear() {
    if ((this.year % 100 !== 0) && (this.year % 4 === 0) || (this.year % 400 === 0)) {
      return true;
    } else {
      return false;
    } 
  }

  checkDay() {
    if (this.month < 1 || this.month > 12) {
      return false;
    }
    if (this.day < 1 || this.day > 31) {
      return false;
    }
    else if ((this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) && (this.day > 30)) {
      return false;
    }
    else if (this.month === 2 && this.checkYear() && this.day > 29) {
      return false;
    }
    else if (this.month ===2 && !this.checkYear() && this.day > 28) {
      return false;
    }
    return true;
}

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
    let dayResult = weekday[date.getDay()];
      return dayResult;
  }
}