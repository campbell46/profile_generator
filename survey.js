const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//write to output, wait for user input, callback to next question
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ",(favMealTime) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favMeal) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              //string interpolation to print out paragraph
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${favMeal} for ${favMealTime}, prefers ${sport} over any other sport, and is amazing at ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});