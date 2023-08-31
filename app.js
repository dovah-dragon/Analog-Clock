const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');
const button = document.querySelector('#button');

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //360 / 60 = 6 that is time interval
    const timeInterval = 6;
    
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) +'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds/10) +'deg)';
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes/2) + 'deg)'
}

function showTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    let time = hours + " : " + minutes + " : " + seconds;
    console.log(time);
}
setInterval(showTime, 1000);

setInterval(getTime, 1000);


