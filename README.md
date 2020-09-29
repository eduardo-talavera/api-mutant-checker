# Node js API Mutant Checker DNA 🧬

- ### objetivo:
Se requiere el desarrollo un proyecto que detecte si una persona tiene diferencias genéticas basándose en su secuencia de ADN. Para eso es necesario crear un programa con un método o función con la siguiente firma (En JavaScript/Node JS):

hasMutation(dna)

Debe recibir como parámetro un array de Strings que representan cada fila de una tabla
de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las
cuales representa cada base nitrogenada del ADN.


### Sin mutación

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | T | T |
| A | G | A | C | G | G |
| G | C | G | T | C | A |
| T | C | A | C | T | G |

### Con mutación

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |

Sabrás si existe una mutación si se encuentra más de una secuencia de cuatro letras
iguales, ya sea horizontal, vertical o en diagonal.
Ejemplo (Caso mutación):

##### String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};

Se tiene en cuenta que la API puede recibir fluctuaciones agresivas de tráfico (Entre 100 y 1
millón de peticiones por segundo).

## 📝 Instrucciones para correr el programa : 

### Instalar dependencias :
```sh
$ npm install
```

### configurar variables de entorno ... copy variables.env.example && paste variables.env :
```sh 
HOST=localhost

NODE_ENV=development
DATABASE=<your-mongodb-url>
SECRETO=supersecretoo
KEY=llavesecreta
```

### ejecutar el programa :
```sh
$ npm start o $ npm run dev
```

### 🚀Ejemplo de peticion POST con postman :

#### Local
```sh
http://localhost:3000/mutation
```

#### Staging
```sh
https://intense-thicket-14970.herokuapp.com/mutation
```
 Enviamos la peticion post para revisar si la cadena nitrogenada tiene mutación o no, lo que nos devolvera una respuesta json

<p align="center"><img src="https://github.com/Kuteji/prueba_backend_N3/blob/master/public/img/peticion-example.png"><p>

###  endpoints:

```sh
POST /mutation
```
para enviar la cadena nitrogenada que sera evaluada

```sh
GET /stats
```
devuelve  un json con las estadisticas de las mutaciones


