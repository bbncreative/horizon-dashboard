// horizon.js by Aaron Cawte for bbncreative

// Get current time and return a readable hh:mm:ss string
function getTimeString() {
  var now, hour, minute, second;
  now = new Date();
  hour = prepZero(now.getHours());
  minute = prepZero(now.getMinutes());
  second = prepZero(now.getSeconds());
  return hour + ":" + minute + ":" + second;
}

// Get current date and return a readable "Day, date-suffix Month Year" string
function getDateString() {
  var now, dayName, date, suffix, monthName, year, dayNames, monthNames;
  dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  suffixes = ["st", "nd", "rd", "th"]
  now = new Date();
  dayName = dayNames[now.getDay()];
  date = now.getDate();
  suffix = getDateSuffix(date);
  monthName = monthNames[now.getMonth()];
  year = now.getFullYear();
  return dayName + ", " + date + suffix + " " + monthName + " " + year;
}

function getDateSuffix(date) {
  switch(date) {
    case 1:
    case 21:
    case 31:
      return "st";
      break;
    case 2:
    case 22:
      return "nd";
      break;
    case 3:
    case 23:
      return "rd";
      break;
    default:
      return "th"
      break;
  }
}

// Prepend single digit numbers with a 0 to conform to time format
function prepZero(i) {
  if (i < 10) { i = "0" + i; }
  return i;
}

// Update the time in the UI
function updateTimeUI() {
  var timeString = getTimeString();
  var dateString = getDateString();
  document.getElementById('timeString').innerHTML = timeString;
  document.getElementById('dateString').innerHTML = dateString;
}

// Call UI functions every 100ms
window.setInterval(function(){
  updateTimeUI();
}, 100);
