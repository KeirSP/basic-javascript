const stringLength = (string) => {
    return string.length;
};

let string2 = 'I dislike trains as a mode of transport';
string2 = string2.split(' ')
console.log(string2[2]);

let string3 = 'abcdefghijklmnopqrstuvwxyz';
console.log(string3[4]);

let string4 = 'I love you';
console.log(string4.toUpperCase());

let dp = (num) => {
    return num.toFixed(2);
}
console.log(dp(1.23456789));

console.log(Number.parseInt("45"));


let arr = ['red', 'yellow', 'green', 'blue'];
let colourPicker = () => {
    let output = [];
    output.push(arr[0]);
    output.push(arr[3]);
    return output;
};
console.log(colourPicker());

arr.push('orange');
console.log(arr);

console.log(arr[0], arr[3]);

let arr2 = [23123, 2, -328, 0];
arr2.sort();
console.log(arr2[0]);

let journey = (country, length, town = 'London') => {
    return `Travelled for ${length} hours to ${town} from ${country}.`
}
console.log(journey('France', 'two'));


