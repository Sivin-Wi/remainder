const getTime = ()=>{

    const today = new Date();

    const sinceMidnight = today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();
    const remainingSeconds = 24 * 60 * 60 - sinceMidnight;
  
    const hours = Math.floor( remainingSeconds / (60 * 60) );
    const minutes = Math.floor( remainingSeconds / 60 ) % 60; 
    const seconds = remainingSeconds % 60;

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    setTimeout(()=>{getTime()},1000)
}


getTime();
