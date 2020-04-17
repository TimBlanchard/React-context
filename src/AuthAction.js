import React, {useContext} from 'react';
import AuthContext from "./AuthContext";

export default function AuthAction() {

    const {isAuth, setAuth} = useContext(AuthContext);
    return (
        <button onClick={() => {setAuth({isAuth: true})}}>
            S'authentifier
        </button>

    );
}