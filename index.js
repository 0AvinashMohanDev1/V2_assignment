const readline = require('readline');

// Define the Shape class
class Shape {
    constructor(shape, char, alignment, rows, columns = rows) {
        this.alignment = alignment;
        this.rows = rows;
        this.columns = columns;
        this.shape = shape;
        this.char = char;
        if ((this.shape === 'Square' && this.rows !== this.columns )|| (this.shape === 'triangle'&& this.rows*2-1 !== this.columns) ) {
            return console.log({ error: `Not possible to make perfect ${this.shape}. Please make sure row and columns are equal. for perfect tirangle: column=row*2-1 and for square: row=column` });
        }
    }

    draw() {
        switch (this.shape) {
            case 'triangle':
                {
                    switch (this.alignment) {
                        case 'left':
                            this.drawLeftAlignedTriangle(this.char);
                            break;
                        case 'right':
                            this.drawRightAlignedTriangle(this.char);
                            break;
                        case 'center':
                            this.drawCenteredTriangle(this.char);
                            break;
                        default:
                            console.log("Invalid alignment. Choose 'left', 'right', or 'center'.");
                    }
                }
                break;

            case 'rectangle':
                {
                    this.drawRectangle(this.char);
                    break;
                }
            case 'square':
                {
                    this.drawSquare(this.char);
                    break;
                }
            default:
                break;
        }
    }

    drawRectangle(char) {
        for (let i = 1; i <= this.rows; i++) {
            let line = `${char}`.repeat(this.columns);
            console.log(line);
        }
    }

    drawSquare(char) {
        for (let i = 1; i <= this.rows; i++) {
            let line = `${char}`.repeat(this.rows);
            console.log(line);
        }
    }

    drawLeftAlignedTriangle(char) {
        let triangle = "";
        for (let i = 1; i <= this.rows; i++) {
            // Create each row of the triangle
            for (let j = 0; j < i; j++) {
                triangle += `${char}`;
            }
            triangle += "\n"; // Move to the next line after each row
        }
        console.log(triangle);
    }

    drawRightAlignedTriangle(char) {
        let triangle = "";
        for (let i = 1; i <= this.rows; i++) {
            // Add spaces for right alignment
            for (let j = 0; j < this.rows - i; j++) {
                triangle += " ";
            }
            // Add characters
            for (let k = 0; k < i; k++) {
                triangle += char;
            }
            triangle += "\n"; // Move to the next line after each row
        }
        console.log(triangle);
    }

    drawCenteredTriangle(char) {
        let triangle = "";

        for (let i = 1; i <= this.rows; i++) {
            // Add spaces for center alignment
            for (let j = 0; j < this.rows - i; j++) {
                triangle += " ";
            }
            // Add characters
            for (let k = 0; k < 2 * i - 1; k++) {
                triangle += char;
            }
            triangle += "\n"; // Move to the next line after each row
        }
        console.log(triangle);
    }
}

// Read input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your inputs in order shape, character to draw with, alignment (left, right, center), rows, columns separated by space: ', (input) => {
    const [shape, char, alignment, rows, columns] = input.split(" ");
    const drawer = new Shape(shape, char, alignment, parseInt(rows), parseInt(columns));
    drawer.draw();
    rl.close();
});

// how will terminal work:
// Enter your inputs in order shape, character to draw with, alignment (left, right, center), rows, columns separated by space: triangle 1 center 5 9
