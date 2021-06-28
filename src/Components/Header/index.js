import './style.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link className = "Logo" to="/">Banca de Filmes</Link>
            <Link className = "Favs" to="/Salvos">Salvos</Link>
        </header>
    )
}

//#291840
//#371E59
//#6E6F73
//#A6A6A6
//#262626