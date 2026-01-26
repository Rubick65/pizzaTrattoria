import {Bebida, SABOR} from "../modeloDeDatos/Bebida.js";
import {Entrantes} from "../modeloDeDatos/Entrantes.js"; // Añadido nombre de archivo
import {Grupo} from "../modeloDeDatos/Grupo.js";         // Añadido nombre de archivo
import {Menu} from "../modeloDeDatos/Menu.js";           // Añadido nombre de archivo
import {MASA, Pizza} from "../modeloDeDatos/Pizza.js";
import {Postres} from "../modeloDeDatos/Postres.js";     // Añadido nombre de archivo
import {TAMANIO} from "../modeloDeDatos/Comida.js";

// Lista de Bebidas
export const bebidas = [
    new Bebida("Agua", "imagenes/agua.png", TAMANIO.MEDIANO, 1.5, 1, 500, SABOR.AGUA, false),
    new Bebida("Cola Kars", "imagenes/colakars.png", TAMANIO.PEQUENIO, 2.0, 1, 330, SABOR.DULCE, false)
];

// Lista de Entrantes
export const entrantes = [
    new Entrantes("Patatas Fritas", "../imagenes_pizzeria/entrante_1.png", TAMANIO.MEDIANO, 3.0, 1, "Crujientes y saladas deliciosas en cualquier momento del ", 23),
    new Entrantes("Ensalada Verde", "imagenes/entrante_1.png", TAMANIO.MEDIANO, 2.5, 1, "Fresca y ligera", 7)
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
    new Pizza("Cuatro Quesos", "../imagenes_pizzeria/pizza_3.png", TAMANIO.PEQUENIO, 3.0, 1, MASA.CLASICA, "Queso y Tomate", false),
    new Pizza("Anchoa", "../imagenes_pizzeria/pizza_4.png", TAMANIO.MEDIANO, 2.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true),
    new Pizza("Carnivora", "../imagenes_pizzeria/pizza_5.png", TAMANIO.PEQUENIO, 4.0, 1, MASA.CLASICA, "Queso y Tomate", false),
    new Pizza("Bordes rellenos", "../imagenes_pizzeria/pizza_6.png", TAMANIO.MEDIANO, 8.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true)
]

// Lista de Postres
export const postres = [
    new Postres("Helado", "imagenes/naranja.png", TAMANIO.PEQUENIO, 2.5, 1, 250),
    new Postres("Tarta de Chocolate", "imagenes/oferta_1.png", TAMANIO.PEQUENIO, 3.5, 1, 400)
];

// Lista de Menús
export const menus = [
    new Menu("Menu Infantil", "imagenes/menu_1.png", TAMANIO.PEQUENIO, 10.0, 1, [pizzas[0], bebidas[0], postres[0]]),
    new Menu("Menu Adulto", "imagenes/menu_2.png", TAMANIO.GRANDE, 15.0, 1, [pizzas[1], bebidas[1], entrantes[0]])
];

// Lista de Grupos de Pizza
export const grupos = [
    new Grupo(pizzaDiamond, "../imagenes_pizzeria/diamondIsUnbreakable.png"),
    new Grupo(pizzas, "../imagenes_pizzeria/diamondIsUnbreakable.png")
];
