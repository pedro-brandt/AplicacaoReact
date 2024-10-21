import "../Home/Home.css"

function Home() {
  return (
    <div className="App-pai">

<div className="menu-container">
  
     <div className="menu">
     <p>
      Menu
     </p>
     <div className="bts">
     <button id="bt3">Login</button>
     <button id="bt4">Cadastro</button>
     </div>
     </div>
     </div>
  
     <h1>Estoque P G!</h1>
     <br></br>
     <div className="App">
      <h3>Quem nos somos:</h3>
      <br></br>
       <p><img src="https://roldao.com.br/wp-content/uploads/2020/03/Gest%C3%A3o-de-estoque-Blog-do-Rold%C3%A3o.jpg" width={600} height={400}></img>Somos uma empresa focada no ramo de gerenciamento de estoque.  <br></br> Fundada em 2024, facilitamos a vida dos nossos clientes com
        a nossa simplicidade e objetividade.<br></br> Gerenciamos uma gama de produtos, de alimentos até itens de luxo. <br></br>Estamos sempre focando em nossa eficiencia,
         satisfação dos nossos clientes e preços acessíveis para os fornecedores.

     </p>
     
     </div>
     </div>
  );
}

