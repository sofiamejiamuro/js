# DOM
Document Object Model

docuement es todo el elemento html, es un objet

```js
// Nos retorna HTMLCollection, similar a un array
document.all;
document.head;
document.body;
document.domain;
document.forms;
document.forms[0].id;
document.forms[0].classList;
document.links[4];
document.images;

```

```js
// Una sntaxis más anitgua
document.getElementsByClassName('className');
document.getElementById('id');

// Más nuevo querySelector, una sintaxis más similar a CSS
// retorna el primero que encuentra
document.querySelector('.card'); 
document.querySelector('#text');
document.querySelector('.card .text'); //especificidad card > info
document.querySelector('li'); // seleccionar por tag

// retorna todos los elementos
document.querySelectorAll('.card');
```

```js
const encabezado = docuement.querySelector('h1');
encabezado.innerText;
encabezado.textContent;
encabezado.innerHTML; // imprime el html plain 
```

```js
// classList es un array de las clases del nodo
// className es un string

card.className.add('x');
card.className.remove('x');

```

### Traversing the DOM

That is recorrer el dom a través de los nodos 

**Traversing del padre al hijo** o **del hijo al padre** o **entre hermanos**

### DOM Scripting 
```js

// html collection que es un array
navBar.childNodes;  // Los espacios en blanco entre un <LI> o un <a> en el html, en este ejemplo, son considerados
navBar.children;    // Aqui no son considerados, solo elementos reales html

navBar.children[0].nodeName;
navBar.children[0].nodeType;

card.parentElement.parentElement.parentElement;

card.nextElementSibiling
card.nextElementSibiling.nextElementSibiling
card.previousElementSibiling

navBar.firstElementChild;
navBAr.lastElementChild;

// Eliminar desde elpadre
navBar.removeChild( navBar.children[0] )

// crear nuevos elements
const newNavItem = document.createElement('a');
enlace.textConetent = 'Nuevo Enlace';
enlace.href = './nuevoEnlace';
enlace.setAttribute = 'color';

navBAr.appendChild(enlace);
navBAr.insertBefore(enlace, navegacion.childre[1]);

```

