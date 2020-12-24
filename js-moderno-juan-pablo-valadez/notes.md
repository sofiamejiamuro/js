# Notas curso js - Juan Plablo Valadéz

Configuración ESLint

1. Instalar localmente via npm, [ESLint](https://eslint.org/docs/user-guide/getting-started) 

2. Configurar archivo de configuración
```js
{
  "parserOptions": {
      "ecmaVersion": 6
  },
  "rules": {
    "semi": ["error","always"]
  }
}
```

Ej. guía de estilo de airbnb