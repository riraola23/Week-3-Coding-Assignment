// question 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log ( ages[ages.length -1] - ages[ages.length -7])
ages.push(10);
console.log(ages);
let sum = 0
for ( let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
    
}
console.log( sum / ages.length); 


// question 2

let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// 2a 
for ( let i = 0; i < names.length; i++){
    console.log(names[i].length)
 }
let lengths = names.map(function(element) {
    return element.length;
    
});
console.log(lengths); 

  for ( let i = 0; i < names.length; i++){
    
 }
 console.log(names) 


  //question 5

  nameLength = ['Sam', 'Mary', 'Joe'];
  sum = 0

 for (let i = 0; i < nameLength.length; i ++){
    console.log(nameLength[i])
    console.log(nameLength[i].length) 
   
 //question 6
    sum += nameLength[i].length
    
 } 
 console.log(sum)


// question 8

var firstName = 'Bob' 
var lastName = 'Smith' 

function fullName( firstName, lastName){
    return firstName + " " + lastName
}
console.log(fullName(firstName, lastName));


//question 9

var a = 20
var b = 40
var c = 60
var d = 80

function sumOfFour(a, b, c, d){
    if ((a + b + c + d) > 100 ){
        return true 
    }
}
 console.log(sumOfFour(a, b, c, d));  

  
//question 10
  
  let num = [2 ,4, 6, 8, 10, 12];
  let sum1 = 0
  for (let i = 0; i < num.length; i++){
  sum1 += num[i]
  }
  console.log(sum1 / num.length)
  
    
// question 11
 var array1 = 10
var array2 = 8

 function arrayAverage( array1, array2){
    if (array1 > array2){
        return true;
    }
} 
    console.log(arrayAverage(array1, array2))

//question 12


var isHotOutside = 6
var moneyInPocket = 5.50
function willBuyDrink( isHotOutside, moneyInPocket){
    if ( isHotOutside + moneyInPocket > 10.50){
        return true
    }
} 
console.log(willBuyDrink(isHotOutside,moneyInPocket))


// question 13

var carPrice = 6000
var money = 5500
function buyCar (carPrice, money){
    if (carPrice < money){
        return " I can afford the car";
    } else {
        return " The car is too expensive, I need to save more money!"
    }
} console.log(buyCar (carPrice,money)) 