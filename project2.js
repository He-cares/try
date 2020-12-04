//single element
/* console.log(document.getElementById("main-header"));
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));

//multiple element
console.log(document.querySelectorAll('.form-group'));
 */
//querySelectorAll can be replaced by getElementsClassName('form-group') or getElementsByTagName('h2')
//const ul= document.querySelector('.my-form');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='Over';
// ul.children[2].innerHTML='<H1>HEY YOU</H1>';

/* const button=document.querySelector('.button');
//button.style.background='RED';
button.addEventListener('mouseover', (e) =>
{ e.preventDefault();
 document.querySelector('.my-form').style.background = 'blue';
 document.querySelector('.my-form').lastElementChild.textContent= 'SUCCESSFUL';
 //document.querySelector('.button').innerHTML='<h1>SUCCESSFUL</h1>';
 }) */ 

 /* Dice App
var x=(Math.random());
 var y= Math.floor((x*6)+1);
 var x1=(Math.random());
 var y1= Math.floor((x1*6)+1);
 console.log(`Your value are ${y} and ${y1}`); */

 //Love calculator
//  var name1 = prompt("enter first name");
//  var name2 = prompt("enter second name");
//  var x=(Math.random());
//  var y=Math.round(100*x);
//  console.log(`The love percentage between ${name1} and ${name2} is ${y} %`);

//leap year calc (these 3 conditions must be checked met )
//1. year divisible by 4 =leap year
//2. year divisible by 100 is not a leap year
//3. year divisible by 400 is a leap year
/* var year = prompt("Enter year");
if ( year%4===0 && year%400 ===0){
    console.log(year + " is a leap year");
}
else if (year%4===0 && year%100!=0 )
{
    console.log(year + " is a leap year2");
}
else {console.log(year + " is not a leap year")} */

//Fizz Buzz Game
// says Fizz for any number divisible by 3 only
// says Buzz for any number divisible by 5 only
// says Fizz Buzz for any number divisible by 3 and 5

var FB= [];
var count=1;
/* for (var i =0; i>=100; i++)
{ FB.push();
    console.log("ghgghj jhbjbj"+FB);
}  not working*/
//console.log(FB);
function fizzbuzz(){
    FB.push(count);
    console.log(FB);
    count++;
    //console.log("Your list is: "+FB);
}
