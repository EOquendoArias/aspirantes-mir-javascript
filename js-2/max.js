// escribe la función max acá
function max(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let numeroMaximo = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (numeroMaximo < arr[i]) {
            numeroMaximo = arr[i];
        }
    }
    return numeroMaximo;
}

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined