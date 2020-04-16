# Node js Api DNA Mutante Checker 🧬


## Desafío:

Nivel 3:
Anexar una base de datos, la cual guarde los ADN’s verificados con la API.Sólo 1 registro por ADN.
Exponer un servicio extra “/stats” que devuelva un JSON con las estadísticas de las verificaciones de ADN: {“count_mutations”:40, “count_no_mutation”:100: “ratio”:0.4}

Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico (Entre 100 y 1
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
DATABASE=your-mongodb-url
SECRETO=supersecretoo
KEY=llavesecreta
```

### ejecutar el programa :
```sh
$ npm start
    o 
$ npm run dev
```

### 🚀enviar peticion POST con postman  a la siguiente url para un entorno local :

```sh
http://localhost:3000/mutation
```
<p align="center"><img src="https://github.com/Kuteji/prueba_backend_N3/blob/master/public/img/peticion-example.png"><p>

### 💭 Url del cloud :
```sh
https://intense-thicket-14970.herokuapp.com/mutation
```

