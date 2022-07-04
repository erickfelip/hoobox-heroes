import React from "react";
import { HeroesData } from "../../pages/Home";
import { Card, Photo, CardContent, Name, Description } from "./styles";
import { useNavigate, Link, useParams } from "react-router-dom";

export type CardHeroProps = {
  character: HeroesData;
};

export const CardHero = (props: CardHeroProps) => {
  const params = useParams();
  const { character } = props;
  return (
    <Card key={character.id}>
      <Link
        to={`/herodetail/${character.id}`}
        state={character}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Photo
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`Heroe image${character.name}`}
        />
        <CardContent>
          <Name>{character.name}</Name>
          <Description>
            {character.description === ""
              ? "Personagem não possui descrição"
              : character.description}
          </Description>
        </CardContent>
      </Link>
    </Card>
  );
};
