// 1-28-19

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

function whileLoop(arr) {
  let count = 0;
  while ( count < arr.length) {
    console.log(arr[count]);
    count ++
  }
}

function mapper(arr, callback) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i], i));
  }
  return newArray;
}

function filterer(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(cb(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function reducer(arr, cb, acc) {
  for(let i = 0; i < arr.length; i++) {
    acc = cb(arr[i], i, acc);
  }
  return acc;
}

//++++++++++++++++++++

let state = {};
let people = ['Wicket', 'Chewie'];
let stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'new',
  cars: ['Mazda', 'Toyota']
};

let newPeople = ['Brent', ...people, 'Kristin'];
let newStuff = {...stuff, cars: [...stuff.cars, 'Chrysler']
}
let newState = {
  people: [...newPeople],
  stuff: {...newStuff},
}

console.log('people', people);
console.log('state', state);
console.log('stuff', stuff);
console.log('new people', newPeople);
console.log('new stuff', newStuff);
console.log('new state', newState);