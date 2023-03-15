// escribe la función bmi acá

function bmi(peso, altura) {
    if (peso <= 0 || altura <= 0 || peso == null || altura == null) {
        return "Error: ingresa un valor correcto de peso y altura";
    }

    let imc = peso / (Math.pow (altura, 2));
    return imc;
}
// código de prueba
console.log(bmi(65, 1.8)); // 20.061728395061728
console.log(bmi(72, 1.6)); // 28.124999999999993
console.log(bmi(52, 1.75)); //  16.979591836734695
console.log(bmi(52)); //  "Error: ingresa un valor correcto de peso y altura"