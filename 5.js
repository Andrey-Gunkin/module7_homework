class Device {
    constructor(name, activation) {
        this.type = 'electric';
        this.voltage = 12;
        this.name = name;
        this.activation = activation;
    }

    activationOn() {
        if (this.activation === true) {
            console.log(`${this.name} is on`);
        } else {
            console.log(`${this.name} is off`);
        }
    }

    getPower(amperage) {
        console.log(`Power of the ${this.name} is ${this.voltage * amperage} W`);
    }

}

class Phone extends Device {
    constructor(name, activation, chargeTime) {
        super(name, activation)
        this.chargeTime = chargeTime;
    }
    chargeType() {
        if (this.chargeTime < 1) {
            console.log(`${this.name} have a fast charge`);
        } else {
            console.log(`${this.name} have a slow charge`);
        }
    }
}

class Smartwatch extends Device {
    constructor(name, activation, NFC, durationWork) {
        super(name, activation)
        this.availableNFC = NFC;
        this.durationWork = 76
    }

    getAvailableNFC = function() {
        if (this.availableNFC === true) {
            console.log(`${this.name} have is NFC`);
        } else {
            console.log(`${this.name} haven't is NFC`);
        }
    }
}

const Iphone = new Phone('Iphone', false, 0.5);
const Applewatch = new Smartwatch('Applewatch', true, false);

console.log(Iphone);
console.log(Applewatch);

Iphone.activationOn();
Applewatch.activationOn();
Iphone.chargeType();
Applewatch.getAvailableNFC();
Iphone.getPower(10);