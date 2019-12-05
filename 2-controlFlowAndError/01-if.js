// If statements

let isOn = true;

if (isOn) {
    console.log('The light is on')
};

isOn = false;

if (isOn == false) {
    console.log("what am I?")
}

if (!isOn) {
    console.log("I'm here too")
}

let x = 12;
let y = 8;
let showing = false;

if(!x > y && showing) { // will not
    console.log("Do I show up?")
}