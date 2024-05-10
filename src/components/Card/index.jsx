import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import "./styles.css";

export default function Card(props) {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={props.imagemUrl} alt="imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>{props.titulo}</h3>
                    <p>{props.resumo}</p>
                </div>
            </div>

            <div className="conteudo__rodape">
                <ul>
                    <li>
                        <img src={Code} alt="codigos" />
                        {props.linhasCodigo}
                    </li>
                    <li>
                        <img src={Share} alt="compartilhamentos" />
                        {props.compartilhamentos}
                    </li>
                    <li>
                        <img src={Chat} alt="comentarios" />
                        {props.comentarios}
                    </li>
                </ul>

                <div className="rodape__usuario">
                    <img src={props.usuarioImagem} alt="icone do usuario" />
                    {props.usuarioNome}
                </div>
            </div>
        </article>
    );
}
