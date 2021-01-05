# Prototypes

```js
// Object Constructor 
function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.slado = saldo;
};


// Instance 
const juan = new Cliente('Juan', 200);
```

Las _proto_ son las funciones que vienen en un Objeto

Crear funciones exclusivas en las instancias de Cliente


```js
// Create a new prototype
// es desde un functio() y no desde un arrow function porque la segunda buscara en la ventana global mientras que la primera hará referencia al this dentro del objeto constructor/actual

Cliente.prototype.tipoCliente = function() {
  cosole.log(this.saldo);
  let tipo;
  if(this.saldo > 10000){
    tipo = 'GOld';
  }else if(this.saldo > 5000){
    tipo = 'Platinum';
  } else {
    tipo = 'Normal';
  }

  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function(){
  return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`
};
pedro.tipoCliente();
```

## **Heredar prototypes y contructores**

Heredar Contructores

```js
// Object Constructor 
function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.saldo = saldo;
};

function Persona(nombre, saldo, telefono){
  // Heredamos de Cliente nombre y saldo, no los prototypes
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
};

// si queremos pasar los prototypes/metodos de Cliente a Persona , antes de instanciar un objeto de Persona debemos:
Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constuctor = Cliente;
```