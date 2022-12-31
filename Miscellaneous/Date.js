// JavaScript program to illustrate
// calculation of no. of days between two date

// To set two dates to two variables
var date1 = new Date("05/17/20001");
var date2 = new Date("12/29/2022");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
console.log(
  "Total number of days between dates" +
    date1 +
    date2 +
    " is" +
    Difference_In_Days
);

// https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/?ref=leftbar-rightbar

// var date2 = new Date("05/17/2001");
// var date1 = new Date();

// var Time = date1 - date2;

// var Days = Time / (1000 * 3600 * 24);

// console.log(Time);
