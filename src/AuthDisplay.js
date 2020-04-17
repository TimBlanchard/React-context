import React, {useContext} from 'react';
import AuthContext from "./AuthContext";

export default function AuthAction() {
    const {isAuth, setAuth} = useContext(AuthContext);
    return (
        <div>
            { isAuth ? <div>Oui</div> : <div> Non </div>}
        </div>

    );
}