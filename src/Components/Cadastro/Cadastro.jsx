import "../Cadastro/Cadastro.css"
import React from "react"

const Cadastro =()  =>{
  return (
    <div className="cadastro">
        <h2>Cadastro</h2>

        <form>
        <p>Insira seus dados para cadastro.</p>

        <label htmlFor="nome">Nome:</label>
        <label htmlFor="senha">Senha:</label>
        <label htmlFor="confirmação">Confirme a senha:</label>
        <input type="submit" value="Salvar"></input>
        </form>
    </div>
  ) 


}
export  default Cadastro