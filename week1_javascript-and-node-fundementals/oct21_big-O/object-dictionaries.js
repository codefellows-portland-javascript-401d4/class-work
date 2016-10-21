
// This inherits from Object
const obj = {};

// This will be true!
if(obj['toString']) {
    console.log('obj has toString key');
}

// This will be false
if(obj.hasOwnProperty('toString')) {
    console.log('has own toString');
}

// This doesn't have a prototype (`null`)
const obj2 = Object.create(null);

// This will be false!
if(obj2['toString']) {
    console.log('obj2 has toString key');
}