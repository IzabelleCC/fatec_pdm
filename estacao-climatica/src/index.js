import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import EstacaoClimatica from './componentes/EstacaoClimatica'
import Loading from './componentes/Loading'

class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     console.log('Construtor')
    //     this.state = {
    //         latitude: null,
    //         longitude: null,
    //         estacao: null,
    //         data: null,
    //         icone: null,
    //         mensagemDeErro: null
    //     }
    // }
    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
    }

    componentDidMount(){
        console.log('Componente montado')
      //  this.obterLocalizacao()
    }
    componentDidUpdate(){
        console.log('Componente atualizado')
    }
    componentWillUnmount(){
        console.log('Componente desmontado')
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        const d1 = new Date(anoAtual,5,21)
        const d2 = new Date(anoAtual,8,24)
        const d3 = new Date(anoAtual,11,22)
        const d4 = new Date(anoAtual,2,21)
        const estouNoSul = latitude < 0

        if(data >= d1 && data < d2)
            return estouNoSul ? 'Inverno' : 'Verão'
        if(data >= d2 && data < d3)
            return estouNoSul ? 'Primavera' : 'Outono'
        if(data >= d3 || data < d4)
            return estouNoSul ? 'Verão' : 'Inverno'
        return estouNoSul ? 'Outono' : 'Primavera'
    }

    icones = {
        'Primavera': 'fa-solid fa-seedling',
        'Verão': 'fa-solid fa-sun',
        'Outono': 'fa-brands fa-canadian-maple-leaf',
        'Inverno': 'fa-solid fa-snowflake'
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
            //1. construir um objeto Date que representa a data atual do sistema
            let data = new Date()
            //2. obter a estacao climatica usando a funcao obterEstacao
            let estacao = this.obterEstacao(data, posicao.coords.latitude)
            //3.obter o icone, usando o mapa que a gente acabou de fazer
            let icone = this.icones[estacao]
            //4.atualizar o estado do componente usanto a funcao this.setState
            this.setState({
                latitude: posicao.coords.latitude,
                longitude: posicao.coords.longitude,
                estacao: estacao,
                data: data.toLocaleString(),
                icone: icone
            })
            },
            (erro) => {
                console.log(erro)
                this.setState({ mensagemDeErro: 'Tente novamente mais tarde' })
            }
        )
    }

    render(){
        console.log('Render')
        return (
            <div className='container p-4 border mt-2'>
                <div className='row justify-content-center'>
                    <div className="col-sm-12 col-md-8">
                        {
                            (!this.state.latitude && !this.state.mensagemDeErro) ?
                                <Loading 
                                    mensagem = "Por favor, responda à solicitação localizaçao"
                                />
                            :                         
                            this.state.mensagemDeErro ?
                                <p className="border rounded p-2 fs-1-text-center">
                                    É preciso dar permissão para acessar a sua localização
                                </p>
                                :
                                <EstacaoClimatica
                                    latitude={this.state.latitude}
                                    longitude={this.state.longitude}
                                    estacao={this.state.estacao}
                                    data={this.state.data}
                                    icone={this.state.icone}
                                    mensagemDeErro={this.state.mensagemDeErro}
                                    obterLocalizacao={this.obterLocalizacao}
                                />
                        }
                    </div>                  
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#root'))
export default App