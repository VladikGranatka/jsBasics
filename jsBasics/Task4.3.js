
let radius = 5;
let height = 10;

const pi = Math.PI;
let volume = pi * radius * radius * height;

let roundedVolume = volume.toFixed(2);

console.log("Об'єм циліндра з радіусом", radius, "і висотою", height, "дорівнює", roundedVolume);