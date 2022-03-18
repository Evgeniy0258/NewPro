// const box = {
//     cat: "Boris",
//     dog: "ball",
// }
// for (let i in box) {
//     delete box[i];
// }
// console.log(box);
// console.log('dog' in box);

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (let i in student) {
//     console.log(i);
//     console.log(student[i]);
// }


// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log(colors['ru pum pu ru rum'].red);
// console.log(colors['ru pum pu ru rum'].blue);



// let salaries = {
//     andreyy: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// }
// let suma = 0;
// let n = 0;
// for (let i in salaries) {
//     suma = suma + salaries[i];
//     n += 1;
// }
// console.log(suma);
// sred = suma / n;
// console.log(sred);



// let userName = prompt('Введите логин');
// let userPassword = prompt('Введите пароль');

// let wrapper = {
//     login: userName,
//     password: userPassword,
// }
// let a = confirm(`${userName} это твой логин? ${userPassword} твой пароль?`);
// if (a) {
//     alert("Добро пожаловать")
// } else {
//     alert("досвидос")
// }


// let student1 = {
//     name: 'Polina',
//     age: 27,
// }
// let student2 = {
//     name: 'Polina',
//     age: 27,
// }
// console.log(JSON.stringify(student1) === JSON.stringify(student2));


// const animals = {
//     cat: {
//         name: 'Енчик',
//         age: 3,
//     },
//     dog: {
//         name: 'Орео',
//         age: 2,
//     }
// }
// console.log(animals && animals.bird && animals.bird.name);