import { useState } from 'react'
import '../styles/ChoiceBar.css'
import Cursos from '../components/Cursos'

export default function ChoiceBar() {
    const[corBarraEsquerda, setCorBarraEsquerda] = useState('#274472')
    const[corBarraDireita, setCorBarraDireita] = useState('#EBEBE8')
    const[corBotaoConcluidos, setCorBotaoConcluidos] = useState("#274472") 
    const[corBotaoProximos, setCorBotaoProximos] = useState("#94DFE6")
    
    function handleBotaoConcluido() {
        setCorBarraEsquerda('#274472')
        setCorBarraDireita('#EBEBE8')
        setCorBotaoConcluidos("#274472")
        setCorBotaoProximos("#94DFE6")
    }

    function handleBotaoProximo() {
        setCorBarraDireita('#274472')
        setCorBarraEsquerda('#EBEBE8')
        setCorBotaoConcluidos("#94DFE6")
        setCorBotaoProximos("#274472")
    }

    return(
        <>
            <div className="container">
                <div className="containerChoiceBar">
                    <button className="botao" style={{color: corBotaoConcluidos}} onClick={handleBotaoConcluido}>Concluídos</button>
                    <button className="botao" style={{color: corBotaoProximos}} onClick={handleBotaoProximo}>Próximos</button>
                </div>
                
                <div className="barContainer">
                    <div className="bar" style={{backgroundColor: corBarraEsquerda}}></div>
                    <div className="bar" style={{backgroundColor: corBarraDireita}}></div>
                </div>

                <div className="cursosContainer">
                    <Cursos/>
                </div>
            </div>
        </>
    )
}