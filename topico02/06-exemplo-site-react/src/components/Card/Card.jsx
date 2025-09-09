import "./cards.css"

const Card = ({product}) => {
    return (
        <div className="card_container">
            <a href="#">
                <div className="card_main">
                    <h3 className="card_name">{product.nome}</h3>
                    <div className="card_thumb">
                        <img className="card_thumb_image"
                            src={product.image}/>
                    </div>
                    <h4 className="card_price">{product.preco}</h4>
                    <p className="card_text">{product.descricao}</p>
                </div>
            </a>
        </div>
    )
}

export default Card
