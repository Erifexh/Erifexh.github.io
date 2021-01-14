timeToTT = () =>{
    let d = new Date();
    let d2 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 4, 0 , 0));

    let total = d2.getTime() - d.getTime();
    if(total <= 0) total += 864000000;

    let seconds = Math.floor((total/1000)%60);
    let minutes = Math.floor((total/1000/60)%60);
    let hours = Math.floor((total/1000/60/60)%24);

    return {total,hours,minutes,seconds}; 
}

displayClock = function(){
    if(document.querySelector("#tt-hours")){
        const timeinterval = setInterval(()=>{
            let tt = timeToTT(); //utc 4:00

            if(tt.hours >= 23 && tt.minutes >= 30){
                document.querySelector("#tt-timer").innerHTML= `TT may be Ongoing!! Check LFG or yell in guild chat`;
                document.querySelector("#setup-timer").innerHTML = `TT may be Ongoing!! Check LFG or yell in guild chat`;
            }
            else{
                document.querySelector("#tt-hours").innerHTML = `${tt.hours}`; 
                document.querySelector("#tt-minutes").innerHTML = `${tt.minutes}`;    
                document.querySelector("#tt-seconds").innerHTML = `${tt.seconds}`;

                if(tt.hours <1 && tt.minutes > 30){
                    document.querySelector("#setup-timer").innerHTML = `Setup Ongoing!!`;
                }
                else if(tt.hours <1 && tt.minutes <= 30){
                    document.querySelector("#setup-timer").innerHTML = `Taxi up! Check LFG or yell in guild chat`;
                }
                else{
                    document.querySelector("#st-hours").innerHTML = `${tt.hours -1}`;
                    document.querySelector("#st-minutes").innerHTML = `${tt.minutes}`;
                    document.querySelector("#st-seconds").innerHTML = `${tt.seconds}`;
                }
            }
        },1000);
    } 
}

function modifyDate(){
    if(document.querySelector(".modify-date")){
        let d = new Date(document.lastModified);
        let options = {month: 'long'}
        document.querySelector(".modify-date").innerHTML = `Updated: ${new Intl.DateTimeFormat('en-US', options).format(d)}/${d.getDate()}/${d.getFullYear()}`;
    }
}

window.onload = function(){
    displayClock();
    modifyDate();
}