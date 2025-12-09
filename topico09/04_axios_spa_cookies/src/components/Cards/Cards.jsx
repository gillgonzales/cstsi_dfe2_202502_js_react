/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { CardContainer, CardImage, CardMain } from "./card.styled";
import thumbImage from "../../assets/img/cards-thumbnail.jpg"

export const Cards = ({ item }) => {
    const srcImage = item?.media?.length?item.media[0]:thumbImage;

  return (
    <CardContainer>
      <Link to={`/produto/${item.id}`}>
        <CardMain>
          <h3>{item.nome}</h3>
          <CardImage>
            <img src={srcImage} />
          </CardImage>
          <h4>
            R$ {item.preco}
          </h4>
          <p>
            {item.descricao}
          </p>
        </CardMain>
      </Link>
    </CardContainer>
  );
};
