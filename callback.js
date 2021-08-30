function welcomeMessage(name,greetHandler){
    // console.log(greetHandler);
    greetHandler(name);
}
// const name = ['Tom Hanks', 'Tom Hardy', 'Tom Cruise'];
const myObj = {name:'Kuddus', age:37};
function greetMorning(name){
    console.log('Good Morning', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}
welcomeMessage('Tom Hanks',greetMorning);
welcomeMessage('Tom Hardy',greetAfternoon);
welcomeMessage('Tom Sakib',greetEvening);
// welcomeMessage('Tom Hanks',greetMorning);

function handleClick(){
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function(){
    console.log('clicked');
})