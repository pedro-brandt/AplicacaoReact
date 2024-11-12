import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <h2 clasName="LoginT">Login</h2>
            <form>
                <p className="txInformacoes">Digite os seus dados de acesso.</p>
                <label className="labelNomeL" htmlFor="nome">Nome:<textarea minlength="20" maxlength="27">
                </textarea></label>
                <label className="labelSenhaL" htmlFor="senha">Senha:<textarea minlength="6" maxlength="8">
                </textarea></label>
                <button  id="bt8">
                <Link to="/" > Inicio</Link></button> 
            </form>
        </div>
    );
  
};

export default Login;
