export class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let output = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " " && this.inkLevel > 0) {
                output += text[i];
                this.inkLevel -= 0.5;
            } else {
                output += " ";
            }
        }
        console.log("%c" + output, `color: ${this.color}`);
    }
}
export class RefillableMarker extends Marker {
    refill() {
        this.inkLevel = 100;
    }
}
