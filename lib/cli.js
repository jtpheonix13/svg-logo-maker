const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

const minChar = async (input) => {
  if (input.length > 3) {
    throw new Error('Please use less than 3 characters.')
  } else {
    return true;
  }
}

const questions = [
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
  type: "list",
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
  
const query = async() => {
  try{
    const data = await inquirer.prompt(questions)
    .then(async (data) => {
      const {logoShape, shapeColor, textColor, characterNum} = data;

      const logo = svgGen(logoShape, shapeColor, textColor, characterNum);

      await writeToFile(logo);
    })
  } catch (err) {
    console.log(err)
  }
}

const svgGen = (shape, bgcol, textcol, text) => {
  if (shape === "Circle") {
    const svg = new Circle(bgcol, textcol, text).render();
    return svg;
  } 
  else if (shape === "Triangle") {
    const svg = new Triangle(bgcol, textcol, text).render();
    return svg;
  }
  else {
    const svg = new Square(bgcol, textcol, text).render();
    return svg;
  }
  
}

function writeToFile(logo) {
  fs.writeFile("logo.svg", logo, (err) => {
    err ? console.log(err) : console.log("Generated new logo!")
  });
}

class CLI {
  run() {
    query();
  }
}



module.exports = CLI;
