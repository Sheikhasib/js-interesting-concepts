/* 
1.variable value not assigned
2.function but didn't write return
3.just wrote return but didn't return anything
4.parameter that isn't passed
5.property that doesn't exists
6.accessing array element out of range
7.accessing deleted array element
8.explicitly set value to undefined 
*/

let a;
// console.log(a);
function second(x, y){
    // document.getElementById('sum');
}
const result = second(3, 45);
// console.log(result);

function add(a, b){
    const sum = a + b;
    if(b < 12){
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(5,8);
// console.log(fourth);

function double(a, b){
    const result = a * 4;
    // console.log(b);
    return result;
}
double(67);


const third = {name:'Sagir', age:12, location:'Rangamati'};
// console.log(third.phone); 

const fifth = [34,58,3,54];
// console.log(th[4]);
delete fifth[1];
// console.log(fifth[1]);

const sixth = undefined;
// console.log(sixth);

const myObj = {name:'kuddus', profession: null};