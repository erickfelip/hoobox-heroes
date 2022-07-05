import React from "react";
import { ComicsData } from "../../pages/Comics";
import { Card, Photo, CardContent, Name, Description } from "./styles";
import { Link } from "react-router-dom";

export type CardHeroProps = {
  comics: ComicsData;
};

export const ComicCard = (props: CardHeroProps) => {
  const { comics } = props;
  return (
    <Card key={comics.id}>
      <Link
        to={`/comicsdetail/${comics.id}`}
        state={comics}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Photo
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt={`Comic-image${comics.title}`}
        />
        <CardContent>
          <Name>{comics.title}</Name>
          <Description>
            {comics.description === "" || null
              ? "Quadrinho não possui descrição"
              : comics.description}
          </Description>
        </CardContent>
      </Link>
    </Card>
  );
};
