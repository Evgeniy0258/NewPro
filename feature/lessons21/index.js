// const arr = [{ a: 1 }, { id: 2 }, { id: 3 }, {}];
// let result = arr.filter((v) => v.id);
// console.log(result);


// const stud1 = [7, 7, 8, 10, 6];
// const stud2 = [5, 6, 5, 10, 10];
// const stud3 = [9, 9, 10, 10, 10];

// let mean1 = stud1.reduce((accum, v, _, array) => accum + (v / array.length), 0);
// let mean2 = stud2.reduce((accum, v, _, array) => accum + (v / array.length), 0);
// let mean3 = stud3.reduce((accum, v, _, array) => accum + (v / array.length), 0);
// console.log(mean1, mean2, mean3);


// const arr = [1, 2, 3];
// let newArr = arr.map((v) => v * 2);
// console.log(newArr);


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => console.log(element));
function qwe(v) {
    console.log(v);
}
fibonacci.forEach(qwe);

