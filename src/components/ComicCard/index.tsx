import React from "react";
import { ComicsData } from "../../pages/Comics";
import { Card, Photo, CardContent, Name, Description } from "./styles";

export type CardHeroProps = {
  character: ComicsData;
};

export const ComicCard = (props: CardHeroProps) => {
  const { character } = props;
  return (
    <Card key={character.id}>
      <Photo
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={`Hero image${character.title}`}
      />
      <CardContent>
        <Name>{character.title}</Name>
        <Description>
          {character.description === ""
            ? "Quadrinho não possui descrição"
            : character.description}
        </Description>
      </CardContent>
    </Card>
  );
};