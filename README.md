# give-react
Impartir algunas lecciones de react

/*Clonar la rama develop*/

npm init
/*enter a todo lo que te pida, 
Ahora vamos a instalar webpack*/
npm i webpack webpack-dev-server --save-dev

/*vamos a instalar babel*/
npm i babel-core babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-1 opener -D
/* -D es lo mismo que --save-dev */

/* react */
npm i react react-dom --save


/*Importante: el archivo bundle.js se genera en memoria, si queremos generar el archivo de forma permanente
debemos hacerlo con el script deploy que tenemos creado en el package.json/*

npm run deploy

