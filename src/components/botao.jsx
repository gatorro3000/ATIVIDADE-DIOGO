import './botao.css'

function Botao(props){
    return(
        <>
        <button onClick={props.onclick}>{props.texto}</button>
        </>
        
    )
    
}

export default Botao
