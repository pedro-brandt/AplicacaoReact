import React from "react";

const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <p>Digite os seus dados de acesso.</p>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
                
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required />
                
                <input type="submit" value="Salvar" />
            </form>
        </div>
    );
  
};

export default Login;
