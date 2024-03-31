//Date and Time
// Get the current date and time
var currentDate = new Date();
  
// Format the date and time
var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

var formattedDate = currentDate.toLocaleDateString('en-US', options);

// Display the formatted date and time
document.getElementById("footer-datetime").textContent = formattedDate;