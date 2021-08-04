import api from "../../Services/api";
import './Sinopse.css';
import { useState, useEffect } from "react";
import {useParams, useHistory } from "react-router-dom";
import {toast} from 'react-toastify';

export default function Sinopse() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [load, setLoad] = useState(true);


    useEffect(() => {

        async function loadFilm() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoad(false);
        }
        loadFilm();
    }, [history, id]);

    function addlist() {


        const mylist = localStorage.getItem('filmes');
        let list = JSON.parse(mylist) || [];

        const hasfilm = list.some((list) => list.id === filme.id)

        if (hasfilm) {
            toast.error('Esse filme ja esta na sua lista');
            return;
        }

        list.push(filme);
        localStorage.setItem('filmes', JSON.stringify(list));
        toast.success('Adicionado com sucesso')

    }

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
                    <button onClick={addlist}>Salvar</button>
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
