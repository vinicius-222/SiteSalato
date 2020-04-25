import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

//adicionare islogger apos o private 
export default({ children, ...rest}) => {
    let logged = isLogged();
    let authorized = (rest.private && !logged ? false : true);

    return(
        <Route
            {...rest}
            render={()=>
                authorized ? children : <Redirect to='Login'/>
            }
        />
    )

}