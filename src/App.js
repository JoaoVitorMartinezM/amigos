import Banner from "./components/Banner";
import Card from "./components/cards";
import Rodape from "./components/footer";

import './index.css'

function App() {

  const amigos = [
    {
      nome: "Ju Vieira",
      urlImagem: "https://bit.ly/3K30jrC",
      descricao: "Minha namorada"

    },
    {
      nome: "Silas Pierri",
      urlImagem: "https://bit.ly/3RRiIJR",
      descricao: "Meu melhor amigo"

    },
    {
      nome: "Zé Vitor",
      urlImagem: "https://bit.ly/3IjIdjK",
      descricao: "Meu amigo de infância"

    },
    {
      nome: "Fernando Bertoldo",
      urlImagem: "https://bit.ly/3RT3HHi",
      descricao: "Meu melhor amigo"

    },
  ]
  return (
    
    <div className="App">
      <Banner/>
      
      <div className="flex-container">

        {amigos.map((amigo) => <Card key={amigo.nome} urlImagem={amigo.urlImagem} nome={amigo.nome} descricao={amigo.descricao}/>)}
        
       
      </div>
      <Rodape/>
      
      
    </div>
  );
}

export default App;
