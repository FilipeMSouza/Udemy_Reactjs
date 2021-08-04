import './Styles.css';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css'
import{ToastContainer} from 'react-toastify';

export default function App() {
    // https://sujeitoprogramador.com/r-api/?api=filmes/
 
    return (
    <div className = "app">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Routes/>
        <ToastContainer autoClose={3000}/>
    </div>
  );
}