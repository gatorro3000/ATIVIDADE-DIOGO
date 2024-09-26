import './App.css';
import Botao from './components/botao.jsx';
import Contador from './components/contador.jsx';
import { useState } from 'react';



function App() {
  const [count,setCount] = useState(0);

  function aumentarNum(){
    setCount(count + 1) 
  }
  function diminuirNum(){
    if(count>0){setCount(count - 1)}
  }

  return(
    <>
      <div className="container">
        <Botao texto="-" onclick={diminuirNum}/>
        <Contador valor={count}/>
        <Botao texto="+" onclick={aumentarNum}/>
      </div>
    </>
  )
}

export default App
