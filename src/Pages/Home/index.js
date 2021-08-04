import api from '../../Services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function App() {
    const[filmes, steFilmes]=useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            // Usando a URL base criada na api.js usando a lib axios
            // essa funcao concatena o restante do link da API
            // me retornando as informacoes que eu requisito
            const response = await api.get('r-api/?api=filmes')
            steFilmes(response.data);
        }
        loadFilmes();
    },[]);
    
    
    
    return (
        <div className="container">
            <div className ="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome}></img>
                            <Link to={`/Sinopse/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
  }