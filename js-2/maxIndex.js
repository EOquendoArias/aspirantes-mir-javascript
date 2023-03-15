// escribe la función maxIndex acá
function maxIndex(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let numeroMaximo = arr[0];
    let posicion = 0;
    for (let i = 0; i < arr.length; i++) {
        if (numeroMaximo < arr[i]) {
            numeroMaximo = arr[i];
            posicion = i;
        }       
    }
    return posicion;
}
console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1