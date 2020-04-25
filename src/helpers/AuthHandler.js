import Cookies from 'js-cookie';

export const isLogged = () =>{
    let token = Cookies.get('token');
    return (token) ? true: false;
}

export const doLogin = (token, rememberPassword = false, NmPessoa = '', hash = '') =>{
    if(rememberPassword){
        Cookies.set('token', token, { expires:999 });
        Cookies.set('NmPessoa', NmPessoa, { expires:999 });
        Cookies.set('hash', hash, { expires:999 });
    }else{
        Cookies.set('token', token);
        Cookies.set('NmPessoa', NmPessoa);
        Cookies.set('hash', hash);
    }
}

export const doLogout = () => {
    Cookies.remove('token');
    Cookies.remove('NmPessoa');
    Cookies.remove('hash');
}