let p = 'JavaScript';
let q = p;
p = 'React';
// console.log(q);

const isTrue = 'false';
if(!isTrue){
    // console.log('hello');
}
else{
    // console.log('world');
}

function sum(p, q){
    // console.log(p+q);
}
const result = sum(2,3);
// console.log(result);

if('2' === 2){
    // console.log('inside it');
}
else{
    // console.log('inside else');
}

function work(x, y=4){
    return x + y;
}
console.log(work(32);