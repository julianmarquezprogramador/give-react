/**
 * Created by chanchitos on 07/07/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld= (props)=> <h1>{props.mensaje}</h1>

ReactDOM.render(
    <HelloWorld mensaje={"Hola Mundo desde las props"}/>,
    document.getElementById('app')
);