/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var str = []
  for (const key in objeto) {
      str.push(Array(key, objeto[key]));
   }
   return str
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {}
   for (let i = 0; i < string.length; i++) {
    if (objeto.hasOwnProperty(string[i])) {
       objeto[string[i]] = objeto[string[i]] + 1      
    }else{
       objeto[string[i]]=1
    }
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
//    var str =[]
//    for (let i = 0; i < string.length; i++) {
//      if (string[i] === string[i].toUpperCase()) {
//           str=str+string[i]
//      }
//    }
//    for (let i = 0; i < string.length; i++) {
//     if (string[i] !== string[i].toUpperCase()) {
//        str=str+string[i]
//     }
//   }
//   return str
////Segunda forma
var array = string.split("")
        let mayus =""
        let minus =""
        for (let i = 0; i < array.length; i++) {
            if (array[i]===string[i].toLowerCase()) { minus+=array[i]}
            if (array[i]===string[i].toUpperCase()) { mayus+=array[i]}
        }
        return mayus+minus
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var newArray = frase.split(" ")
   console.log(newArray);
   var reverseArray = newArray.map( (pro) => { return(pro.split("").reverse().join("")) } );
   return reverseArray.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   //
   //return String(numero).split("").reverse().join("") == numero ? "Es capicua" : "No es capicua"
   var convertiAString=numero.toString()
   numeroReverse= convertiAString.split("").reverse().join("")
   console.log(numeroReverse);
   if(numeroReverse===convertiAString){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var str1 = ""
   var obj = { a: null, b: null, c: null }
   for (let i = 0; i < string.length; i++) {
      if (!obj.hasOwnProperty(string[i])) {
         str1 = str1 + string[i]
      }
   }
   return str1;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return  arrayOfStrings.sort((a, b) => a.length - b.length)
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let cont = 0
   let array3 = []
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] == array2[j] && (!array3.includes(array1[i]))) {
               array3[cont]=array1[i]
               cont++
         }
      }
   }
   return array3
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
