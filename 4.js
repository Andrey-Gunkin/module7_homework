function Device(name, activation) {
    this.type = 'electric';
    this.voltage = 12
    this.name = name;
    this.activation = activation;
}

Device.prototype.activationOn = function() {
    if (this.activation === true) {
        console.log(`${this.name} is on`);
    } else {
        console.log(`${this.name} is off`);
    }
}

Device.prototype.getPower = function(amperage) {
    console.log(`Power of the ${this.name} is ${this.voltage * amperage} W`);
}

function Phone(name, activation, chargeTime) {
    this.name = name;
    this.activation = activation;
    this.chargeTime = chargeTime;
}

Phone.prototype = new Device();

Phone.prototype.chargeType = function() {
    if (this.chargeTime < 1) {
        console.log(`${this.name} have a fast charge`);
    } else {
        console.log(`${this.name} have a slow charge`);
    }
}

function Smartwatch(name, activation, NFC) {
    this.name = name;
    this.activation = activation;
    this.availableNFC = NFC;
    this.durationWork = 76
}

Smartwatch.prototype = new Device();

Smartwatch.prototype.getAvailableNFC = function() {
    if (this.availableNFC === true) {
        console.log(`${this.name} have is NFC`);
    } else {
        console.log(`${this.name} haven't is NFC`);
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