import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Pages/Home';
import Lista from './Pages/Lista';
import Sinopse from './Pages/Sinopse';
import error from './Pages/Notfound';

import Header from "./Components/Header";

const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Sinopse/:id" component={Sinopse}/>
                <Route exact path="/Salvos" component={Lista}/>
                <Route path="/*" component={error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;