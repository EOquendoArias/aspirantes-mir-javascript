// escribe la función suma acá
function sum(num) {
    // Se inicializa la variable resultado en 0
    let resultado = 0;
    
    // Se utiliza un bucle for que recorre los números desde 1 hasta num
    for(let i = 1; i <= num; i++) {
      // En cada iteración del bucle, se suma el número actual a resultado
      resultado += i;
    }
    
    // Finalmente, se retorna el valor acumulado en resultado
    return resultado;
  }
// código de prueba
console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120