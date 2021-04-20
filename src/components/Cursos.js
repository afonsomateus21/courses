import '../styles/Cursos.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Cursos(props) {
    const[cursos, setCursos] = useState([])

    useEffect(() => {
        fetch('./assets/db/cursos.json', {
            header: {
                Accept: "application/json"
            }
        }).then(res => res.json())
          .then(res => setCursos(res))
    }, [])

    function getCursos() {
        return cursos.map(curso => {
            return (
            <Link key={curso.id} 
                to={{
                    pathname: "/detalhes",
                    state: { curso }
                }}
            >
                <div className="containerCursos">
                    <img className="iconeCurso" src={curso.img_icon} alt="Ícone do curso"/>
                    <div className="titulosCursosContainer">
                        <span>{curso.nome}</span>
                        <span>Realizado em: {curso.dt_realizacao}</span>
                        <hr/>
                    </div>
                </div>
            </Link>
            )
        })
    }

    return (
        <div>
            {getCursos()}
        </div>
    )
}