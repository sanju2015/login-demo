import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

function Login() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const emailChangeHandler = (e) => {
        setemail(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'sanju@gmail.com',
            password: '123456'
        }
    
        if ((email === hardcodedCred.email) && (password === hardcodedCred.password)) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            localStorage.setItem('auth-token', token);
            //go to www.website.com/todo
            history.push('/home');
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }
    return (
        <div>
            <h1>I am login page</h1>
            {email}
            <form onSubmit={submitHandler}>
                <input type="email" value={email} name="email" onChange={emailChangeHandler} placeholder="Enter Email" />
                <input type="password" value={password} name="password" onChange={passwordChangeHandler} placeholder="Enter Password" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
