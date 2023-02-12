import './Card.css'

const Card = (props) => {
    return(
        
        <div className="card-container">
            
            
            <figure>
                <img src={props.urlImagem} alt="Foto de um amigo"></img>
            </figure>
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>

        
    );
} 

export default Card;