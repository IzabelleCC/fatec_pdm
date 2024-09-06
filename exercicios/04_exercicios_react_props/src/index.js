import React from 'react'
import ReactDOM from  'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Cartao from './componentes/Cartao'
import Feedback from './componentes/Feedback'
import Comentario from './componentes/Comentario'

const App = () => {
  const textoOK = 'Aprovar'
  const textoNOK = 'Não aprovar'
  const funcaoOK = () => alert('Agradecemos o seu comentário')
  const funcaoNOK = () => alert('Comentário não aprovado')
  const componenteFeedback = 
    <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit'});
    const dataHoraFormatada = `${dataFormatada} ${horaFormatada}`;

  return (
    <div className='container border mt-2 py-5'>
        <div className='col-12'>
          <h1 className='display-5 text-center'>COMENTÁRIOS</h1>
        </div>
        <div className='col-sm-12 col-lg-12 col-xl-12 border py-5'>
          <Cartao rodape={dataHoraFormatada}>
            <Comentario 
              foto='./imagens/pessoa.png'
              nome="Mary.Lockman69"
              texto="Tempo e culpa pertencem àquele que os dá. Eles desejam ser. Eles buscam um certo prazer que a dor pode proporcionar. E por essa razão, no momento, o prazer dessa dor é rejeitado. A dureza ou a escolha e o desejo de prazer às vezes são repudiados."
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-12 col-xl-12 border  py-5'>
          <Cartao rodape={dataHoraFormatada}>
            <Comentario
              foto='./imagens/pessoa.png'
              nome="Brock_Reichel18"
              texto="Os problemas que são maiores do que qualquer um de nós cuidarão deles e os evitarão. Consequência mesmo e os prazeres. Quem de nós não comete erro deve cuidar das falhas muito graves porque elas surgem pelo mesmo erro. Omnis ou omnis é ou não o ofício, mas a própria dor."
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className='col-sm-12 col-lg-12 col-xl-12 border  py-5'>
          <Cartao rodape={dataHoraFormatada}>
            <Comentario 
              foto='./imagens/pessoa.png'
              nome="Nils_Steuber"
              texto="Deve-se dizer que tudo isso é porque desejam fugir da dor em si e das consequências. Corruptos porque o repelem com o tempo. A escolha foge do trabalho da mollitia."
            />
            {componenteFeedback}
          </Cartao>
        </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)