/* 
Falsy:
false
0
empty string
undefined
null

-----------------

Truthy:
true
any number(positive or negative)
any string including whitespace, '0', 'false'
[]
{}
anything else that is not false will be true
*/

let x = parseInt('Khailo');
console.log('value of x: ', x);
if(x){
    console.log('variable is true');
}
else{
    console.log('variable is false');
}