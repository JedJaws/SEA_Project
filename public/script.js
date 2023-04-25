// Get current day and time
const date = new Date();
let day = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();

hour = hour * 100;
time = hour + minutes;


// Code that determines if the Little Tokyo location is open or closed
if (day == 5 || day == 6){
    if (time >= 1400 || time <= 230){
        document.getElementById("tokIsOpen").innerHTML = "Open"
    } else {
        document.getElementById("tokIsClosed").innerHTML = "Closed"
    }
}


if (day >= 0 && day <= 4){

    if (time >= 1400 || time <= 330){
        document.getElementById("tokIsOpen").innerHTML = "Open"
    } else {
        document.getElementById("tokIsClosed").innerHTML = "Closed"
    }
}


// Code that determines if the Eagle Rock location is open or closed
if (time >= 1700 && time <= 2300){
    document.getElementById("rockIsOpen").innerHTML = "Open"
} else {
    document.getElementById("rockIsClosed").innerHTML = "Closed"
}


