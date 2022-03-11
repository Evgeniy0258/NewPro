// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// console.log(c);
// console.log(d);
// console.log(a);
// console.log(b);



// let year = prompt('В каком году была опубликована спецификация ECMASript-2015', '')
// if (year < 2015) {
//     alert('Это слишком рано...');
// } else if (year > 2015) {
//     alert('Это поздновато');
// } else {
//     alert('Верно');
// }

// let a = prompt('Введите целое число', '')
// if (a < 0) {
//     alert('-');
// } else if (a > 0) {
//     alert('+');
// } else {
//     alert('0');
// }

// let a = +prompt();
// let b = +prompt();
// let result = a + b < 4 ? 'мало' : 'много';
// console.log(result);

// let login = prompt();
// if (login === 'Admin') {
//     let password = prompt('Введите пароль');
//     if (password === 'Я главный') {
//         alert('Здравствуйте');
//     } else if (password == null) {
//         alert('Отменено')
//     }
//     else {
//         alert('неверный пароль');
//     }
// } else {
//     alert('отмена');
// }


// let n = +prompt();

// for (let a = 1; a < n; a += 1) {
//     if (a % 2 !== 0) {
//         continue;
//     }
//     console.log(a);
// }

// let n = prompt();
// for (; n < 100;) {
//     if (n < 100) {
//         console.log(n);
//         n = +prompt();
//     }

// }


// let n = +prompt('выберите действие: 1) сложение 2) вычитание 3) умножение 4) деление 5) степень');
// let result;
// switch (n) {
//     case 1: {
//         let a = prompt();
//         let b = prompt();
//         result = a + b;
//         alert(result);
//         break;
//     }
//     case 2: {
//         let a = prompt();
//         let b = prompt();
//         result = a - b;
//         alert(result);
//         break;
//     }
//     case 3: {
//         let a = prompt();
//         let b = prompt();
//         result = a * b;
//         alert(result);
//         break;
//     }
//     case 4: {
//         let a = prompt();
//         let b = prompt();
//         result = a / b;
//         alert(result);
//         break;
//     }
//     case 5: {
//         let a = prompt();
//         let b = prompt();
//         result = Math.pow(a, b);
//         alert(result);
//         break;
//     }
// }

// let browser = prompt();
// switch (browser) {
//     case 'Chrome':
//     case 'FireFox':
//     case 'Safari':
//     case 'Opera':
//         alert('Good')
//         break;
//     case 'Edge':
//         alert('not good')
//         break;

// }

// let n = +prompt();
// if (n >= 15) {
//     alert('Gav-Gav-GAv')
// } else if (2 < n && n < 15) {
//     alert('Gav-Gav')
// } else {
//     alert("noGav")
// }



let n = +prompt();

nextPrime:
for (let a = 2; a <= n; a += 1) {
    for (let b = 2; b < a; b += 1) {
        if (a % b == 0) continue nextPrime;
    }

    console.log(a);
}
