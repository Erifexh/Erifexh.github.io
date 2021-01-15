quickCopy = (id) =>{
    let current = document.getElementById(id);
    let input = current.previousElementSibling;
    
    input.select();
    input.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
};

timeToTT = () =>{
    let d = new Date();
    let d2 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 4, 0, 0));

    let total = d2.getTime() - d.getTime();
    if(total <= 0) total += 864000000;

    let seconds = Math.floor((total/1000)%60);
    let minutes = Math.floor((total/1000/60)%60);
    let hours = Math.floor((total/1000/60/60)%24);

    return {total,hours,minutes,seconds}; 
};

displayClock = () =>{
    if(document.querySelector("#tt-clock")){
        const timeinterval = setInterval(()=>{
            let t = timeToTT(); //utc 4:00
            let tt = document.querySelector("#tt-timer");

            if(t.hours >= 23 && t.minutes >= 30){
                if(t.minutes < 40){tt.innerHTML= `TT may have ended or is close to the end`;}
                else{tt.innerHTML= `TT may be Ongoing!! Check LFG or yell in guild chat`;}
            }
            else{
                tt.innerHTML = "";
                document.querySelector("#tt-hours").innerHTML = `${t.hours} H `;
                document.querySelector("#tt-hours").style.fontSize = "xx-large";
                document.querySelector("#tt-minutes").innerHTML = `${t.minutes} M `;   
                document.querySelector("#tt-minutes").style.fontSize = "xx-large"; 
                document.querySelector("#tt-seconds").innerHTML = `${t.seconds} S `;
                document.querySelector("#tt-seconds").style.fontSize = "xx-large";

                if(t.hours <1 && t.minutes > 30){
                    tt.innerHTML = `Setup Ongoing!!`;
                }
                else if(t.hours <1 && t.minutes <= 30){
                    tt.innerHTML = `Taxi up! Check LFG or yell in guild chat`;
                }
            }
            tt.style.color = "#7a0404";
            tt.style.fontSize = "larger"; 
        },1000);
    } 
};

modifyDate = () =>{
    if(document.querySelector(".modify-date")){
        let d = new Date(document.lastModified);
        let options = {month: 'long'}
        document.querySelector(".modify-date").innerHTML = `Updated: ${new Intl.DateTimeFormat('en-US', options).format(d)}/${d.getDate()}/${d.getFullYear()}`;
        document.querySelector(".modify-date").style.fontSize="x-small";
    }
};

window.onload = () => {
    displayClock();
    modifyDate();
};