// cargarDatos.js
import { Bebida } from "../modeloDeDatos/Bebida.js";
import { Entrantes } from "../modeloDeDatos/Entrantes.js";
import { Grupo } from "../modeloDeDatos/Grupo.js";
import { Menu } from "../modeloDeDatos/Menu.js";
import { Pizza } from "../modeloDeDatos/Pizza.js";
import { Postres } from "../modeloDeDatos/Postres.js";

// Lista de Bebidas
export const bebidas = [
    new Bebida("Agua", "imagenes/agua.png", TAMANIO.MEDIANO, 1.5, 1, 500, SABOR.AGUA, false),
    new Bebida("Cola Kars", "imagenes/colakars.png", TAMANIO.PEQUENIO, 2.0, 1, 330, SABOR.DULCE, false)
];

// Lista de Entrantes
export const entrantes = [
    new Entrantes("Patatas Fritas", "imagenes/patatas.png", TAMANIO.MEDIANO, 3.0, 1, "Crujientes y saladas", 23),
    new Entrantes("Ensalada Verde", "imagenes/entrante_1.png", TAMANIO.MEDIANO, 2.5, 1, "Fresca y ligera", 7)
];

// Lista de Pizzas
export const pizzas = [
    new Pizza("Margarita", "imagenes/pizza_1.png", TAMANIO.PEQUENIO, 7.0, 1, MASA.CLASICA, "Queso y Tomate", true),
    new Pizza("Pepperoni", "imagenes/pizza_2.png", TAMANIO.MEDIANO, 9.0, 1, MASA.GRUESA, "Queso,Tomate y Pepperoni", true)
];

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
    new Grupo([pizzas[0], pizzas[1]], "imagenes/patron.png"),
    new Grupo([pizzas[1]], "imagenes/logo.png")
];
