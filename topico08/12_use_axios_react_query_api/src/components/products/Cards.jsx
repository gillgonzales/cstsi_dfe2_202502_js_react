import { Link } from 'react-router';
import imgThumb from '/img/cards-thumbnail.jpg?url'

export const Cards = ({ item }) => {
  return (
    <div className="mx-auto aspect-3/4 w-11/12 h-130 rounded-lg border-2 border-blue-700 bg-green-400 shadow-md shadow-green-700 sm:w-full sm:h-120 md:h-80 md:overflow-hidden">
     <Link to={`/produto/${item.id}`}>
        <div className="w-full py-3 pt-2.5">
          <h3 className="mb-3 text-center font-bold">{item.nome}</h3>
          <div className="flex h-[350px] w-full items-center bg-sky-100 md:h-[200px] md:w-full">
            <img className="h-5/6 w-full object-fill" src={`${item?.image?item.image:imgThumb}`} />
          </div>
          <h4 className="text-center font-bold text-blue-800 shadow-gray-100">
            R$ {item.preco}
          </h4>
          <p className="h-full text-ellipsis text-wrap text-center">
            {item.descricao}
          </p>
        </div>
      </Link>
    </div>
  );
};
