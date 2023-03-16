let persona = {
    nombre: "Fulano",
    edad: 35,
    ciudad: "Cartagena",
    profesion: "Arquitecto"
};
console.log(persona);

function presentacion(persona) {
    return `Hola, nombre es ${persona.nombre},tengo ${persona.edad} años y vivo en ${persona.ciudad} soy ${persona.profesion}`;
}

let mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ['Correr', 'Ciclo montañismo', 'Leer'];
console.log("\nhobbies:");

for (let i=0; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i]);
}




