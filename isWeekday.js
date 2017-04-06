module.exports = function(day) {
    var todayDay = day.getDay();
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var weekDay = week[todayDay];

    var determineWeekday = weekDay.startsWith('S');

    if (determineWeekday === false) {
        return true;
      } else {
        return false;
      }
}
