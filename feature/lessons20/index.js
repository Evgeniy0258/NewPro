function sumInput() {
    const numbers = [];

    while (true) {
        let n = prompt();
        if (n === "" || n === null || !isFinite(n))
            break;
        numbers.push(+n);
    }
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
alert(sumInput());