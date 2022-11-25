// Code your solutions in this file
// const sinon = require( 'sinon' )





// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// const cards = (["Guadalupe", "Ollie", "Aki"], "surprise")

// function writeCards(cards){
//     for (let i = 0; i < cards.length; i++) {
//         console.log(["Thank you, ${cards[i]}, for the wonderful surprise gift!",
//         "Thank you, Ollie, for the wonderful surprise gift!",
//         "Thank you, Aki, for the wonderful surprise gift!",]);
//         debugger;
//     }

// }

// for (let age = 30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

function writeCards(names, eventName){
    let newArray = [];

    for(let index=0; index<names.length;index++){

    let message = `Thank you, ${names[index]}, for the wonderful ${eventName} gift!`
    newArray.push(message);
    }

    return newArray
}

writeCards(["Guadalupe","Ollie","Aki"], "surprise")

function countDown(num){
    let i = 10
    while(i>=0){
        console.log(i--)
    }
};

countDown(10)