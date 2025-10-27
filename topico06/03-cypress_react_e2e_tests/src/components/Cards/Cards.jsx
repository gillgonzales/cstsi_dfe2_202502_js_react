import { Link } from "react-router-dom";

export const Cards = ({ item }) => {
  return (
    <div className="mx-auto aspect-[3/4] w-11/12 h-130 rounded-lg border-2 border-blue-700 bg-green-400 shadow-md shadow-green-700 sm:w-full sm:h-120 md:h-80 md:overflow-hidden overflow-ellipsis">
      <Link data-test='result-id' data-value={item.id} to={`/produto/${item.id}`}>
        <div className="w-full py-3 pt-[10px] h-full overflow-clip ">
          <h3 className="mb-3 text-center font-bold">{item.nome}</h3>
          <div className="flex h-[350px] w-full items-center bg-sky-100 md:h-[200px] md:w-full">
            <img className="h-5/6 w-full object-fill" src={`https://v3ll3s3laravelsdisk.s3.sa-east-1.amazonaws.com/produtos/${item.image}`} />
          </div>
          <h4 className="text-center font-bold text-blue-800 shadow-gray-100">
            R$ {item.preco}
          </h4>
          <p className="h-[100px] sm:h-[50px] overflow-hidden text-ellipsis text-center px-2">
            {item.descricao}
          </p>
        </div>
      </Link>
    </div>
  );
};
