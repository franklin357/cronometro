import {useState} from 'react'
import './estilos/estilos.css'

function App(){

  const [valor, setValor] = useState(0)

  const [botao, setBotao] = useState('Iniciar')

  const [timer, setTimer] = useState(Boolean)

  function iniciar(){
    let contador = valor
    if(botao == 'Iniciar') {
      setTimer(setInterval(()=>{
        contador += 0.1
        setValor(contador)
      }, 100))
      setBotao('Pausar')
    } else {
      clearInterval(timer)
      setBotao('Iniciar')
    } 
  }

  function limpar(){
    setValor(0)
    setBotao('Iniciar')
    clearInterval(timer)
  }

  

  return(
    <div className='container'>
      <h1 className='titulo'>Cronômetro</h1>
      <img className='imagem' src={require('./assets/cronometro.png')} alt="cronômetro" />
      <p className='valor'>{valor.toFixed(1)}</p>
      <div className='containerBotao'>
        <button className='botao' type='button' onClick={iniciar}>{botao}</button>
        <button className='botao' type='button' onClick={limpar}>Limpar</button>
      </div>
    </div>
  ) 
}

export default App;