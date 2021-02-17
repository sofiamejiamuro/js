# Módulos

IIFFE Immediatly Invoke function expressions 


```html
<!-- Si está  importando el archivo en la estructura hrtml, type module para que pueda leer que es un módulo de js, de otra froma macaría un error, por ejemplo , en la palabra reservada 'export'-->
<script src="cliente.js" type="module"></script>

```

```js
export const nombreCliente = "sofia";
```

```js
import { nombreCliente } from './cliente.js';
```