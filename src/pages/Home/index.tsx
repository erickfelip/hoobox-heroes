import React, { useState, useEffect } from "react";
import { fetchHeroes } from "../../services/api";
import {
  Container,
  Wrapper,
  MapHeroes,
  Card,
  Photo,
  CardContent,
  Description,
  Name,
} from "./styles";

interface HeroesData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export const Home = () => {
  const [heroes, setHeroes] = useState<HeroesData[]>([]);

  async function dataHeroes() {
    const dataSolicitaion = await fetchHeroes();
    setHeroes(dataSolicitaion);
    console.log("Ta vindo oq DA API", dataSolicitaion);
  }

  useEffect(() => {
    dataHeroes();
  }, []);

  return (
    <Container>
      <Wrapper>
        <MapHeroes>
          {heroes.map((character) => {
            return (
              <Card key={character.id}>
                <Photo
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={`Heroe image${character.name}`}
                />
                <CardContent>
                  <Name>{character.name}</Name>
                  <Description>{character.description}</Description>
                </CardContent>
              </Card>
            );
          })}
        </MapHeroes>
      </Wrapper>
    </Container>
  );
};
