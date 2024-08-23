import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Pedido from './Pedido';

const App = () => {
    return (
        <div className='container border mt-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='display-5 text-center'>Seus Pedidos</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-lg-6 col-xl-4 border py-5'>
                    <Pedido 
                        data='23/04/2024'
                        icone='fas fa-hard-drive fa-3x'
                        titulo='SSD'
                        descricao='SSD Kington 240GB'
                    />
                </div>
                <div className='col-sm-12 col-lg-6 col-xl-4 border py-5'>
                    <Pedido 
                        data='24/05/2024'
                        icone='fa-solid fa-computer-mouse fa-3x'
                        titulo='Mouse'
                        descricao='Mouse Gamer Logitech G502'
                    />
                </div>
                <div className='col-sm-12 col-lg-12 col-xl-4 border py-5'>
                    <Pedido 
                        data='25/06/2024'
                        icone='fa-solid fa-memory fa-3x'
                        titulo='Memória'
                        descricao='Pente de memória DDR4 8GB'
                    />
                </div>
            </div>
            <div className='row'>
                
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));