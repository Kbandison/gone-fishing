'use strict';

const prompt = require('prompt-sync')();

function generateName(){
  let adjectives = ['Shiny', "Red", "Dull", "Blue", "Slimy", "Green", "Dry", "Yellow", "Vibrant", "Purple", "Floppy", "Orange", "Silly", "Silver"];
  let types = ["Salmon", "Bass", "Trout", "Flounder", "Perch", "Snapper", "Cod", "Catfish", "Grouper", "Tuna", "Blobfish", "Blowfish"];
  let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
  let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
  let type = types[Math.floor(Math.random() * types.length)];

  while(adj1 === adj2){
    adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
  }
  return `${adj1} ${adj2} ${type}`
}

function generateWeight(){
  
  let weight = Number((Math.random() * 5).toPrecision(3));

  while (weight < 1){
    weight = Number((Math.random() * 5).toPrecision(3));
  }
  return weight;
}

function generatePrice(){
  let price = Number((Math.random() * 5).toPrecision(3));

  while (price < 0.1){
    price = Number((Math.random() * 5).toPrecision(3));
  }

  if (price < 1){
    price = Number(price.toPrecision(2));
  }
  return price;
}

function generateFish(){
  let fish = {};
  fish.name = generateName();
  fish.weight = generateWeight();
  fish.price = generatePrice();

  return fish;
}

function totalWeight(){
  let total = 0;
  for (let i = 0; i < caughtFish.length; i++){
    let currentFish = caughtFish[i];
    total += currentFish.weight;
  }
  return Number(total.toPrecision(3));
}

function totalPrice(){
  let totPrice = 0;
  for (let fish of caughtFish) {
    totPrice += fish.price;
  }
  return Number(totPrice.toPrecision(3));
}

let caughtFish = [];


console.log("\nYou've gone fishing! Try to maximize the value of your caught fish. \nYou can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

for(let i = 6; i < 12; i++){
  console.log('\n___________________________________________________________________\n');
  console.log(`The time is ${i}:00am. So far you've caught:`);
  console.log(`${caughtFish.length} fish, ${totalWeight()}lbs, $${totalPrice()}\n`);

  let fish = generateFish();

  console.log(`You caught a ${fish.name} weighing ${fish.weight}lbs and valued at $${fish.price}.\n`);
  console.log('Would you like to [c]atch or [r]elease your new fish?');

  let action = prompt('> ').toUpperCase();
  while (action != 'C' && action != 'R' && action != '/'){
    console.log('Please enter a "c" or "r"!');
    action = prompt('> ').toUpperCase();
  }

  let currentTotalWeight = totalWeight();

  if (currentTotalWeight + fish.weight > 10){
    console.log(`\n${fish.name} will set you over 10 lbs of total fish.  You can now release it.\nPress any key to continue.\n`);
    prompt('> ').toUpperCase();
    continue;
  }
  
  if (action === 'C'){
    caughtFish.push(fish);
    console.log(`\nCongrats on catching your ${fish.name}!`)
  }else if (action === 'R'){
    console.log(`\nYou've released your ${fish.name}!`)
  } else if (action === '/'){
        break;
  }
  
}

console.log('\n___________________________________________________________________\n');
console.log(`The time is 12:00pm! \n\nYou caught ${caughtFish.length} fish: \n`);

for(let i = 0; i < caughtFish.length; i++){
  console.log(`${caughtFish[i].name}, ${caughtFish[i].weight}, ${caughtFish[i].price}.`)
}

console.log(`\nYour total caught fish for the day is ${caughtFish.length}, a total weight of ${totalWeight()}, total valued at $${totalPrice()}.  \n\nCongrats on your findings!  Have a nice Day!`);
console.log('\n___________________________________________________________________\n');

