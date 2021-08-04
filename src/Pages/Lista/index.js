import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './Fav-Style.css';
import {toast} from 'react-toastify';

export default function Favs(){

    const [film, setFilm] = useState([]);

    useEffect(()=>{

        const MyList = localStorage.getItem('filmes');

        setFilm(JSON.parse(MyList) || []);
    
    }, []);

    function HandleDeleter(id){
        let Filter = film.filter((item)=>{
            return(item.id !== id)
        })

        setFilm(Filter);
        localStorage.setItem('filmes', JSON.stringify(Filter));
        toast.success('Removido com sucesso')
    }


    return(
        <div id="My_films">
            <h1>Meus Flimes </h1>
            {film.length === 0 && <span>Você ainda não tem nenhum filme salvo</span>}

            <ul>
                {film.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/Sinopse/${item.id}`}>See details</Link>
                                <button className="btn" onClick={ ()=> HandleDeleter(item.id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}