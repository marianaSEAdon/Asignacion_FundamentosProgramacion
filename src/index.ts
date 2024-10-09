/*Parte 1:

Define una interfaz Libro, con las propiedades:

titulo
autor 
añoPublicacion 

Crea un array de objetos que implementen la interfaz Libro.
Utiliza prompt para pedir al usuario que ingrese el título, autor y año de publicación de 3 libros.
Almacena estos libros en el array creado.
Escribe una función que reciba el array de libros:
La función debe devolver una lista de los títulos de los libros cuyo año de publicación sea anterior a un año dado.
Solicita al usuario el año como un parámetro para la función.

*/

interface Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;
}

let libros: Libro[] = [];

for (let i = 0; i < 3; i++) {
    let titulo = prompt("Ingrese el título del libro:") ?? "";
    let autor = prompt("Ingrese el nombre del autor:") ?? "";
    let añoPublicacion = Number(prompt("Ingrese el año de publicación del libro:"));

    let libro: Libro = { titulo, autor, añoPublicacion };
    libros.push(libro);
}

function obtenerTitulosAnteriorA(libros: Libro[], año: number): string[] {
    return libros.filter(libro => libro.añoPublicacion < año).map(libro => libro.titulo);
}

let añoUsuario = Number(prompt("Ingrese el año como parámetro:"));
let titulos = obtenerTitulosAnteriorA(libros, añoUsuario);

let amarillo = document.getElementById('amarillo');

amarillo!!.innerHTML = `
    <h1> Lista de los libros cuyo año de publicación es anterior al año ${añoUsuario}</h1>
    <p> Títulos de los libros publicados antes de ${añoUsuario}</p>
     <ul id="lista-titulos"></ul>
`;

let listaTitulos = document.getElementById("lista-titulos");

titulos.forEach((titulo) => {
    let item = document.createElement('li');
    item.innerText = titulo;
    listaTitulos!!.appendChild(item);
});



/* Parte 2

Define una interfaz Estudiante, con las propiedades

nombre
matricula
ciudad.
Crea un array de objetos que implementen la interfaz Estudiante.
Utiliza prompt para pedir al usuario que ingrese el nombre, matrícula y año de ingreso de 5 estudiantes.
Almacena estos estudiantes en el array creado.
Escribe una función que reciba el array de estudiantes:
La función debe devolver una lista de los nombres de los estudiantes cuya ciudad sea igual a una ciudad señalada.
Solicita al usuario la ciudad a buscar.
*/
/*
interface Estudiante {
    nombre: string,
    matricula: string, 
    ciudad: string,
    añoIngreso: number
}

let estudiantes: Estudiante[] = [];

for (let i = 0; i < 5; i++) {
   

    let nombre = prompt("Ingrese el nombre del estudiante:") ?? "";
    let matricula = prompt("Ingrese la matricula del estudiante") ?? "";
    let ciudad = prompt("Ingrese la ciudad del estudiante:") ?? "";
    let añoIngreso = Number(prompt("Ingrese el año de ingreso del estudiante:"));

    let estudiante: Estudiante = { nombre, matricula, ciudad, añoIngreso };
    estudiantes.push(estudiante);
}

function obtenerEstudiantes(estudiantes: Estudiante[], city: string): string[] {
    return estudiantes.filter(estudiante => estudiante.ciudad === city).map(estudiante => estudiante.nombre);
}

let parameterCuidad = prompt("Ingrese la cuidad a buscar:") ?? "";
let nombre = obtenerEstudiantes(estudiantes, parameterCuidad);

let azul = document.getElementById('azul');

azul!!.innerHTML = `
    <h1> Lista de los Estudiantes que viven en la ciudad de ${parameterCuidad} </h1>
     <ul id="lista-student"></ul>
`;

let listaEstudiante = document.getElementById("lista-student");

nombre.forEach((nombres) => {
    let itm = document.createElement('li');
    itm.innerText = nombres;
    listaEstudiante!!.appendChild(itm);
});
*/