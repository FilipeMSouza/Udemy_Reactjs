import api from "../../Services/api";
import './Sinopse.css';
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

export default function Sinopse() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [load, setLoad] = useState(true);


    useEffect(() => {

        async function loadFilm() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length == 0) {
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoad(false);
        }
        loadFilm();
    }, [history, id]);



    if (load) {
        return (
            <div className="Filme_Info">
                <h1>
                    Um minutinho, estamos trabalhado no seu filme...
                </h1>
            </div>
        );
    }

    return (
        <div className="Filme_Info">
            <article>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome} />
                <h3>Sinopse</h3>
                {filme.sinopse}

                <div className="BTS">
                    <button onClick={() => { }}>Salvar</button>
                    <button>
                        <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} trailer`}>
                            Trailer
                        </a>
                    </button>
                </div>
            </article>

        </div>
    );
}
