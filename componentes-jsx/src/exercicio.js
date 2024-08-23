import React from 'react';
import ReactDOM from 'react-dom';

//1. Um componete React pode ser definido por meio de uma funcao JavaScript que devolve a expressao JSX
//2. Um componente pode ser deficnido por meio de uma classe JavaScript que define uma funcao chamada render, por sua vez, que devolve a expressao JSX
//1.Definir um componente React, chamado PrimeiroNome, que devolve um p com o seu primeiro nome
const PrimeiroNome = () => {
    return <p>Izabelle</p>
}
//2.Definir um componente React, chamado Sobrenome, que devolve um p com o seu sobrenome
const Sobrenome = () => {
    return <p>Cesario</p>
}
//3. Fazer com que o componente App utilize ambos como filhos de um div raiz.
const App = () => {
    return <div>
        <PrimeiroNome />
        <Sobrenome />
    </div>
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)