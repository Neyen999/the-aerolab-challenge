
# Hi there! This is my solution to the Aerolab Challenge

## Run this project

```bash
npm install
```
To install the project dependencies

```bash
npm run dev
```
To run the project in a local server

## Project descripcion

For this project, i used **Typescript** with **React**, and **ChakraUI** for the components build. Using Typescript with React is a great idea, you have a better control of what you are getting from the API, and what type of Props should your elements receive, minimizing the chance of error in the future

## Libraries

For this project, apart from **ChakraUI**, i used **ReactIcons** (for the pagination icons) and **axios** (specifically for the GET requests)

## The most challenging part

I came into this project without the slightest idea on how to make a **POST** request, somehow every online couse only teaches you how to make **GET** requests, so that gave me some troubles (almost an entire day of troubles but lets keep it short). Also, im kinda new on Typescript, so watching the challenge solution by ***[Goncy](https://www.youtube.com/watch?v=87KC6LBR54k)*** helped a lot watching how exactly you implement Typescript with React.
.
.
.
.
.
.

![Aerolab](./src/assets/logo.svg "Aerolab")

# Aerolab challenge
Se debe crear una tienda de productos basada en puntos.

# API
Podés encontrar la documentación [acá](https://aerolabchallenge.docs.apiary.io/) y podés obtener una API key [acá](https://aerolab.co/coding-challenge)

## Definición funcional
El usuario tiene una cantidad definida de puntos y cada producto vale una cantidad de puntos especifica.

* Cada producto debe tener un precio en puntos de manera visible.
* El usuario debería poder filtrar los productos por precio, de mayor a menor y viceversa.
* El usuario debería poder ver cuantos puntos tienen en su cuenta.
* Debería haber una manera clara para el usuario de ver que productos puede comprar y cuales no.
* El botón de comprar debería estar disponible en los productos que el usuario tiene suficientes puntos para comprar.
* Un botón de "comprar ahora" debería mostrarse cuando el usuario interactúa con un producto que puede comprar.
* Cuando el usuario no puede comprar un producto, debería ver cuantos puntos le faltan para poder comprarlo.
* Un usuario no debería poder comprar un producto del cual no tiene suficientes puntos para comprar.
* Cuando el usuario compra, la cantidad de puntos debe ser deducida automaticamente de los puntos disponibles.
* Debe haber una pantalla donde ver el historial de productos canjeados
* No debo poder comprar un producto mientras cargo puntos o estoy comprando otro producto
* Debe haber un máximo de 16 productos en pantalla pero debo poder cambiar de página para ver el resto

## Definiciones técnicas
* La aplicación debe estar publicada y debe ser accesible mediante un link.
* El código de la aplicación debe estar subida a un repositorio de público acceso.
