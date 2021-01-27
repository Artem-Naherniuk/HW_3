function CoffeeMake(name) {
    this.name = name;
};

CoffeeMake.prototype = {
    on: () => {
        console.log('Coffee machine on')
    },
    off: () => {
        console.log('Coffee machine off')
    }
};

function Kapelka(name, price) {
    this.name = name;
    this.price = price;
};

Kapelka.prototype = Object.create(CoffeeMake.prototype);
Kapelka.prototype.constructor = CoffeeMake;


function Rizkova(name, price) {
    this.name = name;
    this.price = price;
};

Rizkova.prototype = Object.create(CoffeeMake.prototype);
Rizkova.prototype.constructor = CoffeeMake;

function CoffeeMachine(name, price) {
    this.name = name;
    this.price = price;
};

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMake;

let latte = new Kapelka('latte', '27.50');
latte.rizok = function () {
    console.log('+rizok');
};
console.log(latte);
console.log(latte.on());
console.log(latte.off());
console.log(latte.rizok());