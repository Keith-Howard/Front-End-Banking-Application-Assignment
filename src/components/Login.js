import React from 'react';
import contextExports from './context.js';


function Login() {
    const [show, setShow] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(contextExports.UserContext);
    const currentUserCtx = React.useContext(contextExports.currentUserContext);

    function getUser() {
        const users = ctx.users;
        for (const [index, user] of Object.entries(users)) {
            if (email === user.email & password === user.password) {
                clearForm();
                return [index, user];
            }
        }
        alert('One or more of your credientials is not correct');
        clearForm();
        return {};
    }

    function updateCurrentUser(name, email, password, balance, index, loginStatus) {
        currentUserCtx.name = name;
        currentUserCtx.email = email;
        currentUserCtx.password = password;
        currentUserCtx.balance = balance;
        currentUserCtx.index = index;
        currentUserCtx.loginStatus = loginStatus 
    }
    
    function login() {
        console.log('Login email is ' + email + ' password is ' + password);
        const user = getUser();
        if (user.length > 0) {
            if (Object.keys(user[1]).length > 0) {
                updateCurrentUser(user[1].name, user[1].email, user[1].password, user[1].balance, user[0], true);
                setShow(false);
            } else {
                updateCurrentUser('', '', '', 0, 0, false);
            }
            console.log('user ' + JSON.stringify(currentUserCtx));  
        }else {
            alert('No Valid User');
        }
    }


    function clearForm() {
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <contextExports.CardBootstrap
        cardWidth='45%'
        bgcolor="info"
        txtcolor="white"
        fontSizeHeader="3.95"
        headerBgColor="#F65058FF"
        header="Login"
        headerDisplay='flex'
        headerJustifyContent='center'
        bodyAlign="center"
        bodyContentAlign='center'
        body={show ? (
            <>
                <br/><input style={{maxWidth: '275px', margin: 'auto'}} type="input" className="form-control" id="email"
                placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                <br/><input style={{maxWidth: '275px', margin: 'auto'}} type="password" className="form-control" id="password"
                placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                <br/><button style={{justifyContent: 'center'}}type="submit" className="btn btn-light" onClick={login}>Login</button>
            </>
        ):(
            <>
                <h5 style={{textAlign: 'center'}}>Success, {currentUserCtx.name} has logged in </h5>
            </>
        )}   
        />        
    )
}
 export default Login;