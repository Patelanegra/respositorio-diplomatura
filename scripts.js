//Ejercicio 1

document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("body");
    const cuadrado1 = document.getElementById("cuadrado1");
    const cuadrado2 = document.getElementById("cuadrado2");
    const cuadrado3 = document.getElementById("cuadrado3");

    cuadrado1.addEventListener("click", () => {
        body.style.backgroundColor = "aquamarine";
    });

    cuadrado2.addEventListener("click", () => {
        body.style.backgroundColor = "rgb(127, 127, 255)";
    });

    cuadrado3.addEventListener("click", () => {
        body.style.backgroundColor = "rgb(229, 127, 255)";
    });
});


//Ejercicio 2

document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("texto");
    const charCount = document.getElementById("contador");

    textInput.addEventListener("input", () => {
        const length = textInput.value.length;
        charCount.textContent = `Characters: ${length}`;
    });

});


//Ejercicio 3

var alumnos = [
    {nombre: 'Juan Gomez', nota: 7}, 
    {nombre: 'Pedro Rodriguez', nota: 4}, 
    {nombre: 'Roxana García', nota: 8}, 
    {nombre: 'Luciano Lopez', nota: 5},
    {nombre: 'Fernanda Gimenez', nota: 6},
    {nombre: 'Florencia Martinez', nota: 10},
    {nombre: 'Raul Sanchez', nota: 7},
    {nombre: 'Sandra Figueroa', nota: 8}
];

var alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7);
var alumnosDesaprobados = alumnos.filter(alumno => alumno.nota <7);

console.log("Alumnos aprobados:", alumnosAprobados);
console.log("Alumnos desaprobados:", alumnosDesaprobados);