// escribe la función sum acá
function sum(arr) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
      resultado += arr[i];
    }
    return resultado;
  }
  
console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
