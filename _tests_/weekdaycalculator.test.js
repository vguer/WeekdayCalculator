import { Calculate } from './../src/weekdaycalculator.js';

describe('Date', () => {
  test('should display day of the week', () => {
    let date2 = new Calculate(2020, 6,24);
    expect(date2.checkDate()).toBe("Wednesday");
  })
  test('should display a date in this order month, day, year', () => {
    let date = new Calculate(2020, 6,24);
    expect(date.year).toEqual(2020);
    expect(date.month).toEqual( 6);
    expect(date.day).toEqual(24);
  })
  test ('should determine if a year is a leap year', () => {
    let leapyear = new Calculate(2020);
    expect(leapyear.year).toBe(true);
  })
})

