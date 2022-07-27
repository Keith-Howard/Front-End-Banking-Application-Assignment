import React from 'react';
import contextExports from './context.js';

function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(contextExports.UserContext);
    

    function validate(field, label) {
        if (!field) {
            alert('Empty ' + label + ' entry');
            return false;
        } 
        return true;
    }
    function emailExists() {
        if (Object.keys(ctx.users).length === 0) return false;
        for (const user of ctx.users) {
            if (user.email === email) {
                alert('Email Already Exists');
                setShow(true)
                return true
            }
        }
        return false;
    }

    function passwordValidLen() {
        const minValidLen = 8;
        if (password.length >= minValidLen) {
            return true;
        }
        alert(`Password Must Be ${minValidLen} Or More Characters`);
        return false;
    }

    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        if (!passwordValidLen()) return;
        if (emailExists()) return;
        ctx.users.push({name, email, password, balance: 0})
        setShow(false);
        console.log('current users ' + JSON.stringify(ctx.users));
    }

    function clearForm() {
        setName('');
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
            header="Create Account"
            headerDisplay='flex'
            headerJustifyContent='center'
            titleDisplay='flex'
            titleJustify='center'
            bodyAlign="center"
            bodyContentAlign='center'
            imgDisplay='flex'
            imgJustify='center'
            body={show ? (
                <>
                <br/><input style={{maxWidth: '300px', margin: 'auto'}} type="input" className="form-control" id="name"
                placeholder="NAME" value={name} onChange={e => setName(e.currentTarget.value)} />
                <br/><input style={{maxWidth: '300px', margin: 'auto'}} type="input" className="form-control" id="email"
                placeholder="EMAIL" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                <br/><input style={{maxWidth: '300px', margin: 'auto'}} type="password" className="form-control" id="password"
                placeholder="PASSWORD" value={password} onChange={e => {setPassword(e.currentTarget.value)}} />
                <br/><button id='submitButton' type="submit" className="btn btn-light" onClick=
                {handleCreate} disabled={password === ''}>Create</button>
                </>
            ):(
                <>
                <h5>Success {name}'s Account Created</h5>
                <button type="submit" className="btn btn-light" onClick=
                {clearForm}>Add another account</button>
                </>
            )}

        />
    );
}

export default CreateAccount;