'use strict';
module.exports = function(params, res) {
    var rawCurrentDate = new Date();
    var rawInputDate = new Date(params);
    var temp;
    //Figure out which date is older
    if (rawCurrentDate.getTime() > rawInputDate.getTime()) {
      temp = rawInputDate; // temp set to current inputDate
      rawInputDate = rawCurrentDate; // inputDate set to currentDate
      rawCurrentDate = temp; // currentDate set to temp
    }
    //Get number of milliseconds since Jan 1 1970 (Unix Time)
    var inputDate = rawInputDate.getTime();
    var currentDate = rawCurrentDate.getTime();
    //Find difference in time between two dates, and convert to number
    //of days
    var dif = inputDate - currentDate;
    var days = Math.floor(dif / 1000 / 60 / 60 / 24);
    // Get the number of years, and subtract those days from total
    var years = Math.floor(days / 365);
    days = days - years * 365;
    // Get the number of months and days
    var months = rawInputDate.getMonth() - rawCurrentDate.getMonth();
    days = rawInputDate.getDate() - rawCurrentDate.getDate();
    //Check if calculated months is negative if it is, or if its the same
    //month in a different year
    //change it to the correct number
    if (months < 0 || ((rawInputDate.getYear() > rawCurrentDate.getYear()) && years === 0)) {
      months = 12 + months;
    }
    //Check if calculated days is negative if it is, subtract 1 from months
    //and change days to the correct number
    if (days < 0) {
      months = months - 1;
      days = 30 + days;
    }
    var answer = "";
    if (years > 0) answer += years + " years, ";
    if (months > 0) answer += months + " months, ";
    if (days > 0) answer += days + " days";
    res.end(`<h1>${answer}</h1>`);
}