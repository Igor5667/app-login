import React from 'react';
import Card from '../Ui/Card'
import Button from '../Ui/Button'
import { useState } from 'react';
import ErrorModal from './ErrorModal.jsx'

function Adduser(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorModal, setErrorModal] = useState('')

    function namedChangeHandler(event){
        setLogin(event.target.value)
    }
    function passwordChangeHandler(event){
        setLogin(event.target.value)
    }
    function addUserhandler(event){
        event.preventDefault();
        console.log(login, password);
        setLogin('');
        setPassword('');
    }

    function addUserHandler(event){
        event.preventDefault();

        if(login != "login"){
            setErrorModal({
                title: "Invalid Login",
                msg: "type correct data"
            })
        }

        setLogin('');
        setPassword('')

    }

    return(
        <>
        {errorModal && <ErrorModal title={errorModal.title} msg={errorModal.msg}/>}
            
                <form>
                    <label>Login</label>
                    <input type="text" id='username' onChange={namedChangeHandler} value='login'/>
                    <label>password</label>
                    <input type="password"  onChange={passwordChangeHandler} value='password'/>
                    <Button myType="submit">Add User</Button>
                </form>
          
        </>
    )
}

export default Adduser;