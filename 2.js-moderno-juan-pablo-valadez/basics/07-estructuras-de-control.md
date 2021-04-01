# Estructuras de control

- if / else if
  - uso del return cuando se cumple un if para solo revisar una condición
- operadores lógicos
  - == operador no estricto
  - === operador estricto
  - \>
  - <
- switch/case

```js
const metodPago = 'efectivo'; // efectivo, cheque, tarjeta, vales

switch(metodopago){
  case 'efectivo':
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case 'tarjeta':
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case 'cheque':
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log(`Aún no has seleccionado método de pago`);
    break;  
}

```

- && 
- || 
- Ternary Operator
  - Nested ternary operator
