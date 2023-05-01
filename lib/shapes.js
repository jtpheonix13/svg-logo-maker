// Base class for shapes
class Shape {
    constructor(text, shapeColor, textColor, textY) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.textY = textY;
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor, textY, template) {
        super(text, shapeColor, textColor, textY);
        this.template = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
        this.textY = 125;
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor, textY, template) {
        super(text, shapeColor, textColor, textY);
        this.template = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        this.textY = 125;
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor, textY) {
        super(text, shapeColor, textColor, textY);
        this.template = `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
