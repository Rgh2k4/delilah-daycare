/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var full = document.getElementById("full");

var half = document.getElementById("half");

var weekday = document.getElementById("monday", "tuesday", "wednesday", "thursday", "friday");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function dayCounter() {
    if (weekday.classList.contains('clicked')) {
        weekday.classList.remove('clicked');
    }
    else {
        weekday.classList.add("clicked");
    }
    recalculate();
}

weekday.addEventListener("click", dayCounter);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearbutton = document.getElementById("clear-button");

function clear() {
    weekday = document.querySelectorAll("#monday, #tuesday, #wednesday, #thursday, #friday")
      .forEach(weekday.classList.remove("clicked"));
  }

clearbutton.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfday() {
    full.classList.remove("clicked");
    half.classList.add("clicked");
    recalculate();
}

half.addEventListener("click", halfday);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullday() {
    half.classList.remove("clicked");
    full.classList.add("clicked");
    recalculate();
}

full.addEventListener("click", fullday);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    var costLabel = document.getElementById("calculated-cost");
    if(full.classList.contains("clicked")){
        costLabel = dayCounter * 35;
    }
    else{
        costLabel = dayCounter * 20;
    }
    document.getElementById('calculated-cost').innerHTML=costLabel;
}
