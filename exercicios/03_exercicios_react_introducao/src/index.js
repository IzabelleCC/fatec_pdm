import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import prof1 from './images/prof1.webp';

const App = () => {

    const boxOneStyles = () => {
        return{
            backgroundColor: '#F0F0F0',
            margin: 'auto',
            borderRadius: 10,
            border: '1px solid black',
            textAlign: 'center'
        }
    }
    const profissionais = {prof1: 'José da Silva', prof2: 'Maria da Silva', prof3: 'Jaqueline Mendes'};
    return (
        <div style = {boxOneStyles()}>
            <h1>Profissionais da Saúde</h1>
            <div style = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: 10,
                border: '1px solid #E0E0E0',
                margin: 10
            }}>
            <section className="box-profissionais">
                <div className="profissional">
                    <img src={prof1}/>
                    {profissionais.prof1}
                </div>
                <div className="profissional">
                    <img src={process.env.PUBLIC_URL+ 'prof2.webp'}/>
                    {profissionais.prof2}
                </div>
                <div className="profissional">
                    <img src="https://i.postimg.cc/bJWh8T12/prof3.webp"/>
                    {profissionais.prof3}
                </div>
            </section>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
