import { Date } from './../src/weekdaycalculator.js';

describe('Date', () => {
  test('should display day of the week', () => {
    let date2 = new Date("2020", "06", "24");
    expect(date2.myDate()).toBe("Wednesday");
  })
})


// test('should display a date in this order month, day, year', () => {
//   let date = new Date(6, 24, 2020);
//   expect(date.month).toEqual(6);
//   expect(date.day).toEqual(24);
//   expect(date.year).toEqual(2020);
// })