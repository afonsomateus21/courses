import '../styles/Detalhes.css'
import React from 'react'
import TopBar from '../components/TopBar'

export default function Detalhes(props) {
    let curso = props.location.state.curso;

    function getConteudo() {
        return curso.conteudo.forEach(c => {
            return (
                <ul>
                    <li className="listaConteudo">{c}</li>
                </ul>
            )
        });
    }
    
    return (
        <>  
            <TopBar titulo="Informações do Curso" />
            <div className="detalhesContainer">
                <hr/>
                <div className="detalhesCursoContainer">
                    <div className="imagem">
                        <img className="iconeCursoDetalhes" src={curso.img_icon} alt="Ícone do curso"/>
                        <div className="tituloSubtitulo">
                            <h1>{curso.nome}</h1>
                            <span className="subtitulo">Facilitador: {curso.professor}</span>
                        </div>
                    </div>
                </div>
                
                <div className="conteudo">
                    <div className="imagem">
                        <div className="containerIcon">
                            <img className="icon" src="./assets/imgs/date_icon.png" alt="Ícone data"/>
                        </div>
                        <div className="tituloSubtituloRealizacao">
                            <span className="subtitulo">Realizado em</span>
                            <strong>{curso.dt_realizacao}</strong>
                        </div>
                    </div>
                </div>

                <div className="conteudo">
                    <div className="imagem">
                        <div className="containerIcon">
                            <img className="icon" src="./assets/imgs/time_icon.png" alt="Ícone carga horária"/>
                        </div>
                        <div className="tituloSubtituloRealizacao">
                            <span className="subtitulo">Carga Horária</span>
                            <strong>{curso.carga_horaria} horas</strong>
                        </div>
                    </div>
                </div>

                <div className="conteudo">
                    <div className="imagem">
                        <div className="containerIcon">
                            <img className="icon" src="./assets/imgs/content_icon.png" alt="Ícone conteúdo"/>
                        </div>
                        <div className="tituloSubtituloRealizacao">
                            <span className="subtitulo">Conteúdo</span>
                            <strong>{getConteudo()}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}