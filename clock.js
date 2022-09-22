// hr: hours
//min: minutes
//sec: seconds
function showTime() {
    var date = new Date();
    // console.log(date);
    var hr = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var sec = date.getSeconds(); // 0 - 59
    // console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
    var session = "AM";

    if(hr == 0){
        hr = 12;
    }

    if(hr > 12){
        hr = hr - 12;
        session = "PM";
        document.getElementById("MyDigitalClock").style.color = "aquamarine";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hr + ":" + min + ":" + sec + " " + session;

    document.getElementById("MyDigitalClock").innerText = time;
    document.getElementById("MyDigitalClock").textContent = time;

    // Removed [0]
    var pics = document.getElementById('pics');
    console.log(pics);
        if (hr > 0 && hr <=6) {
          pics.style.backgroundImage = "url('pic1.jpg')";
        }else if (hr > 6 && hr <=12) {
          pics.style.backgroundImage = "url('pic2.jpg')";
        }else if (hr > 12 && hr <=18) {
          pics.style.backgroundImage = "url('pic3.jpg')";
        }else (hr > 18 && hr <=24) {
          pics.style.backgroundImage = "url('pic4.jpg')";
        }
  }




// showTime();
setInterval(showTime, 1000);
showTime();
