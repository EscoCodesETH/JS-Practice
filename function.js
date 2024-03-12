// // // // // function showMessage(){
// // // // //     let message = (" Hello, I'm javascript");

// // // // // alert (message);

// // // // // }

// // // // // showMessage();

// // // // // alert (message);

// // // // // let userName = 'john';

// // // // // function showMessage(){
// // // // //     let message = 'Hello,' + userName;
// // // // //     alert (message);
// // // // // }
// // // // // showMessage()

// // // // let userName = 'John';

// // // // function showMessage(){
// // // //     userName = "bob";

// // // //     let message = 'Hello ' + userName;
// // // //     alert(message);
// // // // }

// // // // alert (userName);

// // // // showMessage();

// // // // alert (userName);

// // // function showMessage(from, text){
// // //     alert (from + ': ' + text);
// // // }

// // // showMessage ('Anne', 'hello!');
// // // showMessage('Ann', 'whats up!')


// // function sum (a,b){
// //     return a+b;
// // }

// // let result = sum (1,2);
// // alert(result);

// function checkAge(){
//     if (age >= 18){
//         return true;
//     } else{
//         return confirm('do you have permission to behere?')
//     }
// }

// let age = prompt ('how old are you?', 6);


// if (checkAge(age)){
//     alert('access granted' );
// }else {
//     alert ( ' access denied');
// }

// function showPrimes(n){
//     nextPrime: for (let i = 2; i < n; i++){
//         for (let j = 2; j < i; j++){
//             if (i % j == 0 ) continue nextPrime;
//         }
//         alert (i);
//     }
// }

// function showPrimes(n){
//      nextPrime: for (let i = 2; i < n; i++){
//          if (!isprime(i)) continue;
//          alert (i);
//         }
// }
// function isprime(n){
//     for (let i = 2; i < n; i++){
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm ('did parenet allow you?');
// }

// function checkAge(age){
//     return (age > 18) || confirm ('are you allowed?')
// }

// function min(a , b){
//     return diff = (a-b);
// }

// console.log(min(2,5));

// function min (a, b){
//     if (a < b){
//         return a;
//     }esle{
//         return b;
//     }
// }

// function min (a, b){
//     return a < b ? a:b;
// }

// function pow (x,n){
//     let result =x;

//     for (let i = 1; i < n;i++){
//         result *=x;
//     }
//     return result;
// }

let sayHi = function (){
    alert("hello");
}


function ask (question, yes, no){
    if(confirm (question)) yes()
    else no();
}

function showOK(){
    alert ("you agreed" );
}

function showCancel(){
    alert ("you cancled the execution");
}

ask ("do you agree?", showOK, showCancel);