import { Link } from "react-router-dom"
import "../styles/TopBar.css"

export default function TopBar(props) {
    return (
        <header className="topBar">
            <h1 className="titulo">{props.titulo}</h1>
            <div className="containerBotao">
                <Link to={{pathname: "/"}}>
                    <button className="botaoVoltar" style={{display: props.visivel}}>x</button>
                </Link>
            </div>
        </header>
    )
}