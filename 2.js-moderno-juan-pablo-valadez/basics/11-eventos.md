# EVENTOS

Todos los eventos tiene acciones por default, en el navegador, para ejecutar, por ejemplo, un <a\> redirecciona a un link, un form envia la información.

Eventos en el mouse, en el teclado, en el scroll

- DOMContentLoaded

- blur: por ejemplo en lo sinputs cuando entras y sales del inout, al salir se ejecuta la función, muy útil para las validadiones de inputs

- copy
- paste
- cut
- input: se ejecuta casi en todos, menos en blur

## **e**

- e.type
- e.target
- e.target.value


## Eventos en un formulario

- sucede en el form tag

eventos:
- submit

```js
formulario.addEventListenr('submit',(e) => {
  e.preventDefault();
});

```

## Scroll

```js
window.addEventLisentener('scroll',() => {})
```

# Event Bubbling

Cuando se presiona en un lugar y un evento se propaga por lugares que no son los esperados

por ejemplo, se va hacia un elemento padre.

```js
e.stopPropagation();
```

**Delegation**

Delegation es usar e.taget para saber a que elemento se da click y ponerle funciones especificas 

```js
// para identificar donde esta el click
e.target
if(e.target.classList.includes('titulo')){

}else if(e.target.classList.includes('description')){

}else if(e.target.classList.includes('img')){

}
```

**onclick**

asociarle un onclick y una función a un elemento html cuando se crea, es decir, si se crea dinamicamente


