# Práctica: Sistema Académico

Aplicación Angular para listar, registrar, editar y eliminar estudiantes.
Los datos se mantienen en memoria y se restablecen al recargar la página.
El código existente en `src/` se conserva; incluye el servicio de estudiantes
y el campo teléfono. Los ejemplos anteriores de `AppComponent` no sustituyen
la clase `App` que utiliza actualmente `src/main.ts`.

## Instalación

Instala Git y Node.js 24 LTS desde https://git-scm.com/downloads y
https://nodejs.org/. Node.js incluye npm. Si ya tienes nvm instalado, puedes
usar `nvm install 24` y `nvm use 24`.

```sh
git clone https://github.com/Luisx721/practica.git
cd practica
node --version
npm --version
npm ci
npm start
```

Abre la dirección que muestra Angular en tu terminal. Detén el servidor con
Ctrl+C. Si ya tienes el repositorio clonado, ejecuta `git pull` dentro de él
y luego `npm ci`.

`npm ci` instala Angular, Angular CLI, TypeScript y las demás dependencias
con las versiones del archivo `package-lock.json`. No necesitas instalar
Angular globalmente. Para consultar su versión: `npx ng version`.
Opcionalmente puedes instalar el CLI global con `npm install -g @angular/cli@21`.

## Comandos

```sh
npm start                  # Servidor de desarrollo
npm run build              # Compilación de producción en dist/practica
npm test -- --watch=false   # Pruebas existentes
npm run prueba             # Compila y ejecuta los ejercicios de prueba.ts
```

`prueba.ts` es un ejercicio independiente y no se incluye en la aplicación.
Imprime las tres notas; también declara la función `promedio` y la interfaz
`Curso` del ejercicio original.

## Estado de las pruebas existentes

`src/app/app.spec.ts` conserva una expectativa del proyecto inicial:
`Hello, sistema-academico`. La aplicación muestra
`Sistemas de Gestion Academica`, por lo que esa prueba falla. La prueba de
creación del componente pasa. Se conserva el archivo tal como estaba en el
repositorio; no se ha omitido ni modificado ninguna prueba.
