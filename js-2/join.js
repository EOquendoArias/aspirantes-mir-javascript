// escribe la función join acá
function join(arr) {

  if (arr.length === "") {
    return " ";
  }

  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i !== arr.length - 1) {
      str += ' ';
    }
  }

  return str;
}


console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""
