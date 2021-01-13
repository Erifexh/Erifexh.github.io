function timeToTT(){
    let d = new Date();
    let d2 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 4, 0 , 0));

    let total = d2.getTime() - d.getTime();
    if(total <= 0) total += 86400000;

    let seconds = Math.floor((total/1000)%60);
    let minutes = Math.floor((total/1000/60)%60);
    let hours = Math.floor((total/1000/60/60)%24);

    return {
        total,
        hours,
        minutes,
        seconds
    }; 
}

displayClock = function(){
    if(document.querySelector("#tt-hours")){
        const timeinterval = setInterval(()=>{
            let t = timeToTT();
            document.querySelector("#tt-hours").innerHTML = `${t.hours}`; 
            document.querySelector("#tt-minutes").innerHTML = `${t.minutes}`;    
            document.querySelector("#tt-seconds").innerHTML = `${t.seconds}`;
    
            if(t.total <= 3600000){
                document.querySelector("#setup-timer").innerHTML = `Setup Ongoing!!`;
            }
            else{
                document.querySelector("#st-hours").innerHTML = `${t.hours -1}`;
                document.querySelector("#st-minutes").innerHTML = `${t.minutes}`;
                document.querySelector("#st-seconds").innerHTML = `${t.seconds}`;
            }
            
            if(t.total< 0){
                clearInterval(timeinterval);
            }
        },1000);
    } 
}

function modifyDate(){
    let d = new Date(document.lastModified);
    let html = document.querySelector("#modify-date");
    let options = {month: 'long'}
    html.innerHTML = `Updated: ${new Intl.DateTimeFormat('en-US', options).format(d)}/${d.getDate()}/${d.getFullYear()}`;
}

window.onload = function(){
    displayClock();
    modifyDate();
}