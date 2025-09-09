import Card from "../components/Card/Card"

const Home = ({products}) => {
    return (
        <div className="home">
            <div className="products_grid_container">
            {products
                ?products
                    .map((product,key) => 
                        <Card key={key} product={product}/>)
                :"Falha ao carregar produtos..."}
            </div>
        </div>
    )
}

export default Home
