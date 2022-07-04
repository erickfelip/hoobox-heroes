import React, { useState, useEffect, useCallback } from "react";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";
import {
  Container,
  Wrapper,
  MapHeroes,
  ButtonWrapper,
  Menu,
  ButtonWrapperMenu,
} from "./styles";
import { ComicCard } from "../../components/ComicCard";
import { api, fetchComics } from "../../services/api";
import { useNavigate } from "react-router-dom";

export type ComicsData = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  creators: {
    avaliable: string;
    collectionURI: string;
    items: [
      {
        name: string;
        role: string;
      }
    ];
  };
};

export const Comics = () => {
  const [comics, setComics] = useState<ComicsData[]>([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dataComics();
  }, [searchField]);

  const dataComics = async () => {
    setLoading(true);
    const dataSolicitaion = await fetchComics(searchField);
    setComics(dataSolicitaion);
    setLoading(false);
  };

  const handleSearch = (string: { target: { value: string } }) => {
    const { value } = string.target;
    setSearchField(value);
  };

  const handleMoreComics = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get("comics", {
        params: {
          offset,
        },
      });
      setComics([...comics, ...response.data.data.results]);
    } catch (error) {}
  }, [comics]);

  const handleHeroes = () => {
    navigate("/");
  };

  return (
    <Container>
      <Menu>
        <SearchInput
          placeholder="Search Comics..."
          onChangeHandler={handleSearch}
          value={searchField}
        />
        <ButtonWrapperMenu>
          <Button text="Heroes" onClick={handleHeroes} />
        </ButtonWrapperMenu>
      </Menu>
      <Wrapper>
        {comics && comics.length > 0 ? (
          <MapHeroes>
            {comics.map((character) => {
              return <ComicCard character={character} key={character.id} />;
            })}
          </MapHeroes>
        ) : (
          <>
            {comics && comics.length === 0 && (
              <p>Quadrinho não encontrado :( </p>
            )}
          </>
        )}
      </Wrapper>
      {!searchField && (
        <ButtonWrapper>
          <Button text="More Comics" onClick={handleMoreComics} />
        </ButtonWrapper>
      )}
    </Container>
  );
};