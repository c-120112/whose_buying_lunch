// var dogage = prompt("How old is your pooch?");
// var humanage = (dogage - 2) * 4 +21;

// console.log("Your dog is " + humanage + " years old in human years.");



// Calculating Milk Store run program with just JS


/*function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
 
    console.log("buy " + calcbottles(money, 1.5) + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown"); 
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcchange(money, 1.5);
    
}


function calcbottles(startingmoney, costperbottle){

    var num_bottles = Math.floor(startingmoney/costperbottle);
    
    return num_bottles;

}

function calcchange(startingAmount, costperbottle) {
    
    var change = startingAmount % costperbottle

    return change
}

console.log("Hello master, here is your " +getMilk(5) + " change.");

*/


//Love Calculator

/* first = prompt("What is your name?");
second = prompt("What is the name of your secret lover crush?");


var n = Math.random();

n = n * 100

n = Math.floor(n)+1;

console.log(n);

if (n > 70) {
   alert("Your love score is... "+ n + "%. You love each other like salt loves pepper.");
}   

if (n > 30 && n <= 70){
    alert("Your love score is... "+ n + "%.");
}

if (n <= 30){

    alert("Your love score is... "+ n + "%." + "You go together like oil and water.");
}

*/


//Party Guestlist Checker 

/* var guestlist = ["Cory", "Brian", "Gerald", "Clint", "Daniel", "Robbie"];

var guestname = prompt("What is your name?")

if (guestlist.includes(guestname)){
    alert("Welcome " + guestname + ".")
} else alert("Sorry, maybe next time " + guestname + ".")

*/

var output = [];
var count = 1;

function fizzBuzz(){

if (count % 3 === 0 && count % 5 === 0){
        output.push("fizzBuzz");
}
else if (count % 3 === 0) {
    output.push("fizz");
}
else if (count % 5 === 0) {
        output.push("Buzz");
}
else {
    output.push(count);
}
count ++;
        console.log(output);
     }


function whosPaying(names) {
    var num_people = names.length;
    var random_person_position = Math.floor(Math.random() * num_people);
    var random_person = names[random_person_position];
    
    return random_person + " is going to buy lunch today!";
    
}
