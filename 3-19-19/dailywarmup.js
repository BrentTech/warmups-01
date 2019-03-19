'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function whileLoop(arr) {
  let count = 0;
  while(count < arr.length) {
    console.log(arr[count]);
    count++;
  }
}

function mapper(arr, cb) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i));
  }
}

function filterer(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(cb(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
}

function reducer(arr, cb, acc) {
  for(let i = 0; i < arr.length; i++) {
    acc = cb(arr[i], i, acc);
  }
  return acc;
}

let state = {};
let people = ['wicket', 'chewie'];
let stuff = {
  tv: 'new',
  radio: 'also new',
  toothbrush: 'frayed',
  cars: ['Mazda','Toyota']
};

let newPeople = ['brent', ...people, 'kristin'];
let newStuff = {...stuff, cars: [...stuff.cars, 'Neon']};
let newState = {
  people: [...newPeople],
  stuff: [...newStuff],
}

console.log('people', people);
console.log('state', state);
console.log('stuff', stuff);
console.log('new people', newPeople);
console.log('new stuff', newStuff);
console.log('new state', newState);