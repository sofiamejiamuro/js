# Object Oriented Programming

- Una forma es con la función constructora y prototypes

- Ahora con clases (en 2015), una mejora a la función constructora y a los prototypes

Dos formas de crear clases

**Función Constructora == class**
```js
// Class declaration +common
class Cliente {
  // método constructor
  constructor(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
  }
};

const sofia = new Client('sofia', 400);

// Class expression
const Class = class {
  // método constructor
  constructor(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
  }
};
const sofia = new Client('sofia', 400);

```

**Protoype == Métodos**
```js
// Dentro de la clase
class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
  };

  mostrarInformacion(){
    return `Cliente: ${this.name}, saldo:${this.saldo}`
  };

  // Pertenece a la clase y no requiere una instancia
  static bienvenida(){
     return `Bienvenido al cajero`
  }
};

const sofia = new Client('sofia', 400);
sofia.mostrarInformacion();
Cliente.bienvenida()
```
**Herencia**
```js
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria);
  // super es para las propiedades del padre
  super(nombre, saldo);
  this.telefono = telefono;
  this.categoria = categoria;

  // Si hay un método que se llama igual que el padre, se reescribe 
}

const empresa = new Empresa('x', 100);
```

**Modificadores de acceso**

publicas y privadas
```js
class Empresa extends Cliente {
  // El # hace privada la propiedad, solo se puede acceder desde la clase y no desde el objeto, check -> can i use
  #telefono
  constructor(nombre, saldo, telefono, categoria);
  super(nombre, saldo);
  this.telefono = telefono;
  this.categoria = categoria;


}
```