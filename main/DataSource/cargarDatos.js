import {Bebida, SABOR} from "../modeloDeDatos/Bebida.js";
import {Entrantes} from "../modeloDeDatos/Entrantes.js"; // Añadido nombre de archivo
import {Grupo} from "../modeloDeDatos/Grupo.js";         // Añadido nombre de archivo
import {Menu} from "../modeloDeDatos/Menu.js";           // Añadido nombre de archivo
import {MASA, Pizza} from "../modeloDeDatos/Pizza.js";
import {Postres} from "../modeloDeDatos/Postres.js";     // Añadido nombre de archivo
import {TAMANIO} from "../modeloDeDatos/Comida.js";

// Lista de Bebidas
export const bebidas = [
    new Bebida("Agua", "../imagenes_pizzeria/agua.png", TAMANIO.MEDIANO, 1.5, 1, 500, SABOR.AGUA, false),
    new Bebida("Cola Kars", "../imagenes_pizzeria/kars.png", TAMANIO.PEQUENIO, 2.0, 1, 330, SABOR.DULCE, false),
    new Bebida("Limon Dio", "../imagenes_pizzeria/dio.png", TAMANIO.PEQUENIO, 2.5, 1, 370, SABOR.ACIDA, false),
    new Bebida("Naranja Narancia", "../imagenes_pizzeria/naranja.png", TAMANIO.PEQUENIO, 2.5, 1, 300, SABOR.ACIDA, false),
    new Bebida("Emerald Sprite", "../imagenes_pizzeria/sprite.png", TAMANIO.MEDIANO, 3.5, 1, 450, SABOR.DULCE, false),
];

// Lista de Entrantes
export const entrantes = [
    new Entrantes("Salsa Lalihooo", "../imagenes_pizzeria/entrante_1.png", TAMANIO.PEQUENIO, 1.0, 1, "Tan sabrosa que soñaras con ella", 23),
    new Entrantes("Magician wings", "../imagenes_pizzeria/avdol_1.png", TAMANIO.MEDIANO, 4, 1, "Directo desde la India, tan picante como el mismisimo fuego", 7),
    new Entrantes("Frituras Avdol", "../imagenes_pizzeria/avdol_2.png", TAMANIO.MEDIANO, 5.5, 1, "Crujientes y sabrosas siendo freidas a fuego lento", 12),
];

// Lista de Pizzas
export const pizzas = [
    new Pizza("Margarita", "../imagenes_pizzeria/pizza_1.png", TAMANIO.PEQUENIO, 7.0, 1, MASA.CLASICA, "Queso y Tomate", true),
    new Pizza("Pepperoni", "../imagenes_pizzeria/pizza_2.png", TAMANIO.MEDIANO, 9.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true),
    new Pizza("Margarita", "../imagenes_pizzeria/pizza_1.png", TAMANIO.PEQUENIO, 7.0, 1, MASA.CLASICA, "Queso y Tomate", true),
    new Pizza("Pepperoni", "../imagenes_pizzeria/pizza_2.png", TAMANIO.MEDIANO, 9.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true),
    new Pizza("Margarita", "../imagenes_pizzeria/pizza_1.png", TAMANIO.PEQUENIO, 7.0, 1, MASA.CLASICA, "Queso y Tomate", true),
    new Pizza("Pepperoni", "../imagenes_pizzeria/pizza_2.png", TAMANIO.MEDIANO, 9.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true)
];


export const pizzaDiamond = [
    new Pizza("Margarita", "../imagenes_pizzeria/pizza_1.png", TAMANIO.PEQUENIO, 10.0, 1, MASA.CLASICA, "Queso y Tomate ", true),
    new Pizza("Pepperoni", "../imagenes_pizzeria/pizza_2.png", TAMANIO.MEDIANO, 5.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true),
    new Pizza("Cuatro Quesos", "../imagenes_pizzeria/pizza_3.png", TAMANIO.PEQUENIO, 3.0, 1, MASA.CLASICA, "Mezcla de quesos suaves y fuertes", false),
    new Pizza("Anchoa", "../imagenes_pizzeria/pizza_4.png", TAMANIO.MEDIANO, 2.0, 1, MASA.GRUESA, "Anchoas saladas con queso", true),
    new Pizza("Carnivora", "../imagenes_pizzeria/pizza_5.png", TAMANIO.PEQUENIO, 4.0, 1, MASA.CLASICA, "Diferentes carnes con queso", false),
    new Pizza("Bordes rellenos", "../imagenes_pizzeria/pizza_6.png", TAMANIO.MEDIANO, 8.0, 1, MASA.GRUESA, "Pizza normal con queso en los bordes", true)
]

// Lista de Postres
export const postres = [
    new Postres("Helado Ghiaccio", "../imagenes_pizzeria/postre_1.png", TAMANIO.PEQUENIO, 3.5, 1, 250),
    new Postres("Galletas Giovanna", "../imagenes_pizzeria/postre_2.png", TAMANIO.MEDIANO, 4.5, 1, 400),
    new Postres("Moody Donuts", "../imagenes_pizzeria/postre_3.png", TAMANIO.GRANDE, 7, 1, 600),
    new Postres("Tarta lerolero", "../imagenes_pizzeria/postre_4.png", TAMANIO.GRANDE, 8, 1, 800),
    new Postres("Pan baby", "../imagenes_pizzeria/postre_5.png", TAMANIO.PEQUENIO, 1.99, 1, 200),
];

// Lista de Menús
export const menus = [
    new Menu("Menu Infantil", "../imagenes_pizzeria/menu_1.png", TAMANIO.PEQUENIO, 10.0, 1, [pizzas[0], bebidas[0], postres[0]]),
    new Menu("Menu Adulto", "../imagenes_pizzeria/menu_2.png", TAMANIO.GRANDE, 15.0, 1, [pizzas[1], bebidas[1], entrantes[0]])
];

// Lista de Grupos de Pizza
export const grupos = [
    new Grupo(pizzaDiamond, "../imagenes_pizzeria/diamondIsUnbreakable.png"),
    new Grupo(pizzas, "../imagenes_pizzeria/diamondIsUnbreakable.png")
];
