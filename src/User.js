import React from 'react';
import { useHistory } from "react-router-dom";

function User() {
    const history = useHistory();
    const clearLocalStorage = () => {
        localStorage.removeItem('auth-token');
        history.push('/home');
    }
    return (
        <div>
            <h1>I am User</h1>
            <button onClick={clearLocalStorage}>LOGOUT</button>
        </div>
    )
}

export default User
