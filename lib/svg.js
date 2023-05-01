const { Circle, Triangle, Square} = require("./shapes");

class SVG {
    render(answer) {
        let userShape;
        if (answer.logoShape === 'Circle') {
            userShape = new Circle(answer.characterNum, answer.shapeColor, answer.textColor);
        } 
        else if (answer.logoShape === 'Square') {
            userShape = new Square(answer.characterNum, answer.shapeColor, answer.textColor);
        }
        else if (answer.logoShape === 'Triangle') {
            userShape = new Triangle(answer.characterNum, answer.shapeColor, answer.textColor);
        }
        else {
            throw new Error("Error!")
        }

        let renderString = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${userShape.template}
        <text x="150" y="${userShape.textY}" font-size="60" text-anchor="middle" fill="${userShape.textFillColor}">${userShape.text}</text>
        </svg>`

        return renderString;
    }
}

module.exports = SVG;
