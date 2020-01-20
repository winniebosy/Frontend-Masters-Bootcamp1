'use strict'




// template strings
const firstName ="Eddie";
const lastName =" Matara";

const sentence = `Hello ${firstName} ${lastName} how are you?`;

console.log(sentence);

// boolean
 const mySkyBlue ="true";

 console.log(mySkyBlue);

 //numbers
const num = 5;

console.log(num + 12 );

//conditionals

const isSkyBlue ="true";

if(isSkyBlue){
    console.log('Yay! The sky is blue')
}
else{
    console.log('Sky aint blue');
}


//equality comparisons

if(2 + 2 == '4'){
    console.log('Math still works');
} else{
    console.log('It doesnt');
}


if(2 + 2 ==='4'){
    console.log('Math still works');
} else{
    console.log('It doesnt');
}


 if(0.2 +0.1 === 0.3){
     console.log('true');
 }else{
     console.log('false');
 }
  
//else if

const student= 50;

if(student == 30){
    console.log('There is no learning');
}else if(student <=50){
    console.log('Swimming lessons');
}else{
    console.log('Go home');
}


//while loops

let elephant = 0

while(elephant <= 10){
    console.log(elephant)
    elephant = elephant + 3;
}
console.log(elephant);

