setInterval(() => {
   console.log("checking"); 
}, 3000);

const time = 1000;

const checking = () => console.log("checking!");

setInterval(checking,time);