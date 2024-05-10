import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Sidebar from "./components/Sidebar";
import Filtro from "./components/Filtro";
import Card from "./components/Card";
import Ordenacao from "./components/Ordenacao";
import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        // const busca = axios.get("https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes")
        // setDados(busca)
        fetch(
            "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
        )
            .then((resp) => resp.json())
            .then((data) => setDados(data));
    }, []);

    console.log(dados);

    return (
        <div className="container">
            <Sidebar />
            <div>
                <BarraDePesquisa />
                <Filtro />
                <Ordenacao />
                <ul className="lista-cards">
                    {dados
                        ? dados.map((item, key) => (
                              <li key={key}>
                                  <Card
                                      id={item.id}
                                      imagemUrl={item.imagem_capa}
                                      titulo={item.titulo}
                                      resumo={item.resumo}
                                      linhasCodigo={item.linhas_de_codigo}
                                      compartilhamentos={item.compartilhamentos}
                                      comentarios={item.comentarios}
                                      usuarioNome={item.usuario.nome}
                                      usuarioImagem={item.usuario.imagem}
                                  />
                              </li>
                          ))
                        : null}
                </ul>
            </div>
        </div>
    );
}

export default App;
