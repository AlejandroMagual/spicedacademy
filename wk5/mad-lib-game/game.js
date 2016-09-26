
/*
EXCERCISE:
Create a mad-lib game using the readline module in node. The game should prompt the user for 3-4 different types of words
(verb, noun, adjective, etc.).
   ⁃    the game should prompt for input 1 question at a time.
   ⁃    once you have all the inputs, you should concatenate together a funny mad-lib and display it on the command line.
*/

var readline = require("readline");
var answers = [];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter a noun:\n", (answer)=>{
        answers.push(answer);
        rl.question("Enter a verb:\n", (answer)=>{
            answers.push(answer);
            rl.question("Enter an adverb:\n", (answer)=>{
                answers.push(answer);
                rl.close();
            });
        });
    });

    rl.on('close', () => {
        console.log('The ' + answers[0] + ' ' + answers[1] + ' ' + answers[2] + ' today!');
    });
