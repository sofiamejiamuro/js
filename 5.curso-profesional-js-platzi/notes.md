# Curso profesional de JS

¿Qué forma a un profesional?

- Conocimiento del lenguaje
- Conocimiento de los entornos de programación
- Mejores prácticas
- Versado de Código
- Herramientas
- Ética/Profesionalismo
- Experiencia

El objetivo del proyecto es crear un media player

```js
npm init -y
```

la bandera -y le dice que sí a todas las preguntas que se hacen al inicializar npm

```js
npm i -D live-server
```

la bandera -D es para que sea una dependencia sólo de desarrollo

## Scripts embebidos

Los script embebidos detienen la ejecución del html

Es imporante el orden de los scripts

## SCOPE

- Global Scope

  Toda variable que se declare fuera de una función o un bloque tien ecomo scope a window, el scope global.
  
- Function Scope

  ```js
  function printNumbers(){
    for(var i = 0; i <10, i++){
      setTimeout(function(){
        console.log(i)
      },100)
    }
  }

  printNumbers()
  ```
- Block Scope

- Module Scope
