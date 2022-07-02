import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
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
import { SearchInput } from "../../components/SearchInput";

export type HeroesData = {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

export const Home = () => {
  const [heroes, setHeroes] = useState<HeroesData[]>([]);
  const [filteredHeroes, setFilteredHeroes] = useState(heroes);
  const [searchField, setSearchField] = useState("");

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

  useEffect(() => {
    const filteredHeroes = heroes.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredHeroes(filteredHeroes);
  }, [heroes, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    console.log("@@@#@#", searchFieldString);
    setSearchField(searchFieldString);
  };

  return (
    <Container>
      <Wrapper>
        <SearchInput
          placeholder="Search Heroes..."
          onChangeHandler={onSearchChange}
        />
        {filteredHeroes.length > 0 ? (
          <MapHeroes>
            {filteredHeroes.map((character) => {
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
            })}
          </MapHeroes>
        ) : (
          <>
            {filteredHeroes.length === 0 && <p>Personagem não encontrado :(</p>}
          </>
        )}
      </Wrapper>
      <ButtonWrapper>
        <Button text="More Heroes" onClick={handleMoreHeroes} />
      </ButtonWrapper>
    </Container>
  );
};
