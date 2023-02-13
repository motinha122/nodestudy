let interval = setInterval(()=>console.log("checking"),1000);

setTimeout(()=>clearInterval(interval),4000);
