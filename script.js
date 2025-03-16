const clock=document.getElementById("clock")

function runclock(){
    var time=new Date();
     var hour=time.getHours();
     var minute =time.getMinutes();
     var seconds =time.getSeconds();
     var text="AM";
     if(hour>12){
        hour=hour-12;
        text="PM";
     }
   //   else if(hrs==0){
   //      hour=12;
   //      text="AM";
   //   }
     clock.innerHTML=`${hour} : ${minute} : ${seconds} :${text}`;
     
     var hour=time.getHours();
     var minute =time.getMinutes();
     var seconds =time.getSeconds();

     hour=hour<10?"0"+hour:hour;
     minute=minute<10?"0"+minute:minute;
     seconds=seconds<10?"0"+seconds:seconds;

     console.log(`${hour} : ${minute} : ${seconds} :${text}`);

}

setInterval(runclock,1000)