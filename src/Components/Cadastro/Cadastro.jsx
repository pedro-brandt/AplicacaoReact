
import React from "react"

const Cadastro =()  =>{
  return (
    <div class name="cadastro">
        <h2>Cadastro</h2>

        <form>
        <p>Insira seus dados para cadastro.</p>
        <label for="nome">Nome:</label>
        <label for="senha">Senha:</label>
        <label for="confirmação">Comfirme a senha:</label>
        <input type="submit" value="Salvar"></input>
        </form>
    </div>
  )
}
export  default Cadastro