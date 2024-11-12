import "../Cadastro/Cadastro.css"
import React from "react"

import { Link } from "react-router-dom";

const Cadastro =()  =>{
  return (
    <div className="cadastro">
        <h2>Cadastro</h2>

        <form>
        <p className="tInformacoes">Insira seus dados para cadastro.</p>

        <label htmlFor="nome">Nome:  <textarea minlength="20" maxlength="27">
        </textarea></label>
        <label htmlFor="senha">Senha:  <textarea minlength="6" maxlength="10">
        </textarea></label>
        <label htmlFor="confirmação">Confirme a senha:  <textarea minlength="6" maxlength="10">
        </textarea></label>
        <input  className="salvar" type="submit" value="Salvar"></input>
        <button  id="bt8">
        <Link to="/login" > Login</Link></button> 
        <button  id="bt8">
        <Link to="/" >Inicio</Link></button> 
        </form>
    </div>
  ) 


}
export  default Cadastro