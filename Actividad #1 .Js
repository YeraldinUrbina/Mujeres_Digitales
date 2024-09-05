//Actividad N1 
//Aprendiz: Yeraldin Urbina
//1.Definir variables que almacenen los siguientes datos:
// Un nombre: "Pepe"
// Una edad: 25
// Un precio: $99.90
// Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.

// 1. Definir variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];

let peliculasFavoritas = [
    {
        nombre: "The Matrix",
        año: 1999,
        protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        nombre: "Inception",
        año: 2010,
        protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        nombre: "Interstellar",
        año: 2014,
        protagonistas: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
];

// 2. Mostrar todos los valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series Favoritas:", seriesFavoritas);
console.log("Películas Favoritas:", peliculasFavoritas);

// 3. Incrementar la edad en 1 y volver a mostrarla
edad += 1;
console.log("Edad nueva:", edad);

// 4. Agregar una serie a la lista de series favoritas y volver a mostrarla
let nuevaSerie = "Stranger Things";
seriesFavoritas.push(nuevaSerie);
console.log("Series Favoritas después de agregar una nueva:", seriesFavoritas);