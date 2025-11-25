import { Suspense, use } from "react";
import { Cards } from "../../components/products/Cards";

const API_URL = import.meta.env.VITE_API_URL;

export function Produtos({ produtosPromise }) {

  const produtosContent = use(produtosPromise);

  return <>
    {produtosContent.map((product, i) => (
      <Cards key={`prod_key_${i}`} item={product} />
    ))}
  </>;
}

const promiseProdutos =
  fetch(`${API_URL}/produtos`)
    .then(response => response.json())
    .then(json => {
      console.log({ json })
      return json?.data
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Exemplo com fetch!!"))

const Home = () => {

  return (
    <div>
      <div className="w-full 2xl:max-w-screen-xl">
        <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
          <Suspense fallback={<p>Carregando...</p>}>
            <Produtos produtosPromise={promiseProdutos} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
