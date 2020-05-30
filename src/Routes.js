import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import Historia from './pages/Historia';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Cadastrar from './pages/Cadastrar';
import Login from './pages/Login';
import Calculadora from './pages/Calculadora';
import Redefinir from './pages/Redefinir';
import Recuperar from './pages/Recuperar';

export default () => {
    return(
        <Switch>
            <RouteHandler exact path='/'>
                <Home />
            </RouteHandler>
            <RouteHandler exact path='/historia'>
                <Historia />
            </RouteHandler>
            <RouteHandler exact path='/Produtos'>
                <Produtos />
            </RouteHandler>
            <RouteHandler exact path='/Contato'>
                <Contato />
            </RouteHandler>
            <RouteHandler exact path='/Cadastrar'>
                <Cadastrar />
            </RouteHandler>
            <RouteHandler exact path='/Login'>
                <Login />
            </RouteHandler>
            <RouteHandler exact path='/Calculadora'>
                <Calculadora />
            </RouteHandler>
            <RouteHandler exact path='/Redefinir'>
                <Redefinir />
            </RouteHandler>
            <RouteHandler exact path='/Recuperar'>
                <Recuperar />
            </RouteHandler>
            <RouteHandler>
                <Login />
            </RouteHandler>
        </Switch>
    )
}