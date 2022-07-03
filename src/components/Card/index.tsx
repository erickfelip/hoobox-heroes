import React from "react";
import { HeroesData } from "../../pages/Home";
import { Card, Photo, CardContent, Name, Description } from "./styles";

export type CardHeroProps = {
  character: HeroesData;
};

export const CardHero = (props: CardHeroProps) => {
  const { character } = props;
  return (
    <Card key={character.id}>
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
    </Card>
  );
};
