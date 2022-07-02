import React, { useState, useEffect, useCallback } from "react";
import { api, fetchHeroes } from "../../services/api";
import {
  Container,
  Wrapper,
  MapHeroes,
  Card,
  CardContent,
  Description,
  Name,
  ButtonWrapper,
  Photo,
} from "./styles";
import { Button } from "../../components/Button";

export interface HeroesData {
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
  }

  const handleMoreHeroes = useCallback(async () => {
    try {
      const offset = heroes.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });
      setHeroes([...heroes, ...response.data.data.results]);
    } catch (error) {}
  }, [heroes]);

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
      <ButtonWrapper>
        <Button text="More Heroes" onClick={handleMoreHeroes} />
      </ButtonWrapper>
    </Container>
  );
};
