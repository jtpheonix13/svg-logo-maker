const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { default: Choice } = require("inquirer/lib/objects/choice");

const minChar = async (answer) => {
  if (answer.length > 3) {
    throw new Error('Please use less than 3 characters.')
  } else {
    return true;
  }
}

const userQuestions = [
  {
    name: 'characterNum',
    message: 'Type 3 characters you would like in the logo.',
    type: 'input',
    validate: minChar
},
{
  name: 'textColor',
  message: 'What color would you like your text to be?',
  type: 'input'
},
{
  name: 'logoShape',
  message: 'What shape would you like?',
  choices: ['Circle', 'Triangle', 'Square']
},
{
  name: 'shapeColor',
  message: 'What color would you like the shape to be?',
  type: 'input'
}
]
  


class CLI {
  run() {
    inquirer
      .createPromptModule(userQuestions)
      .then((answer) => {
        const newSVG = new SVG();
        const results = newSVG.render(answer);
        console.log(results);
        writeFile("./examples/logo/svg", results, (err) => {
          err ? console.error(err) : console.log('SVG file created');
        })
        console.log(answer);
      });
  }
}

module.exports = CLI;
