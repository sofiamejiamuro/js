# Módulos

IIFFE Immediatly Invoke function expressions 


```html
<!-- Si está  importando el archivo en la estructura hrtml, type module para que pueda leer que es un módulo de js, de otra froma macaría un error, por ejemplo , en la palabra reservada 'export'-->
<script src="cliente.js" type="module"></script>

```
## Export / Import

```js
export const nombreCliente = "sofia";
```

```js
import { nombreCliente } from './cliente.js';
```

Se pueden importar/exportar variables, funciones, classes, se puede importar una clase heredada también 

```js
export class Cliente = {
  constructor(nombre, ahorro){
    this.nombre = nombre;
    this.ahorro = ahorro 
  }
}

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria){
    super(nombre, ahorro);
    this.ahorro = ahorro;
  }

  monstrarInfo(){
    return `Cliente: ${this.nombre}, Ahorro:${this.ahorro}, Categoría: ${this.categoria}`
  }
}
```

```js
import { Cliente } from './cliente.js';
```

Se podria hacer un archivo de puras clases o puras variables o puras funciones

## Export Default

No requiere estar entre las llaves. Sólo puede existir un export default por archivo.

```js
import default Datos from './cliente.js';
```

