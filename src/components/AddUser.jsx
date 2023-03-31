import React from 'react';
import Card from '../Ui/Card'
import Button from '../Ui/Button'
import { useState } from 'react';
import ErrorModal from './ErrorModal.jsx'

function Adduser(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorModal, setErrorModal] = useState(false)

    function namedChangeHandler(event){
        setLogin(event.target.value)
        console.log(login)
    }
    function passwordChangeHandler(event){
        setPassword(event.target.value)
    }
    function addUserhandler(event){
        event.preventDefault();
        console.log(login, password);
        setLogin('');
        setPassword('');
    }

    async function submit(event){
        event.preventDefault();
          
        if(login != "login"){
            setErrorModal({
                    title: "Invalid Login",
                    msg: "type correct data"
            });
           
            return ;
        }
       

        const user={
            name:login,
            password: password,
        }
        // console.log(user)

        // console.log(login);
        const res = await fetch('https://testowa-3a831-default-rtdb.firebaseio.com/testowa.json',
            {
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application.json'
            }
            
            }
        ) ;
        const data = await res.json() ;
        console.log(data) ;
        
    }

    function addUserHandler(event){
        event.preventDefault();

        

        setLogin('');
        setPassword('')

    }

    return(
        <>
            {errorModal && <ErrorModal title={errorModal.title} msg={errorModal.msg}/>}
            
                <form onSubmit={submit}>
                    <label>Login</label><br/>
                    <input type="text" id='username' onChange={namedChangeHandler} value={login}/><br/>
                    <label>password</label><br/>
                    <input type="password"  onChange={passwordChangeHandler} value={password}/><br/>
                    <Button myType="submit">Add User</Button>
                </form>
          
        </>
    )
}

export default Adduser;

// 

// setErrorModal({
//     title: "Invalid Login",
//     msg: "type correct data"
// });
