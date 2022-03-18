// let a = +prompt();
// let b = +prompt();
// let result = min();
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// result = min(a, b)
// alert(result);


// let x = +prompt('Choose x');
// let n = +prompt('Choose n');
// function pow() {
//     return (x <= 0 || n <= 0) ? undefined : x ** n;
// }
// let result = pow();
// result = pow();
// alert(result);


// function vowel_count(str1) {
//     let vowel_list = 'aeiou';
//     let vcount = 0;

//     for (let x = 0; x < str1.length; x++) {
//         if (vowel_list.indexOf(str1[x]) !== -1) {
//             vcount += 1;
//         }

//     }
//     return vcount;
// }
// alert(vowel_count('gjatdasdugja')); 



// function palindrom(str) {
//     for (let i = 0; i < str.length / 2; i += 1) {
//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// alert(palindrom('anna'))
// alert(palindrom('abcba'))
// alert(palindrom('zkscslzkuvhlz'))


function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i += 1) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(14));