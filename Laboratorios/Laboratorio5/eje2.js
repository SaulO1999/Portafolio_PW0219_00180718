/*Ejercicio2*/
var arr = [2,5,6,3,4,7];

var funcionSuma = arr => {
    let suma = 0;
    arr.forEach(element => {
        suma += element;
    });

    let promedio = suma/arr.length;

    console.log(suma);
    console.log(promedio);
}

funcionSuma(arr);   