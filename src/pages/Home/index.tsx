import React, { useState, useEffect, useCallback } from "react";
import { api, fetchHeroes } from "../../services/api";
import {
  Container,
  Wrapper,
  MapHeroes,
  ButtonWrapper,
  Menu,
  ButtonWrapperMenu,
  WrapperLoading,
} from "./styles";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import { CardHero } from "../../components/Card";
import { useNavigate } from "react-router-dom";
import RotateLoader from "react-spinners/ClipLoader";
import { HeroesData } from "../../types";

export const Home = () => {
  const [heroes, setHeroes] = useState<HeroesData[]>([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dataHeroes();
  }, [searchField]);

  const dataHeroes = async () => {
    setLoading(true);
    const dataSolicitaion = await fetchHeroes(searchField);
    setHeroes(dataSolicitaion);
    setLoading(false);
  };

  const handleSearch = (string: { target: { value: string } }) => {
    const { value } = string.target;
    setSearchField(value);
  };

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

  const handleComics = () => {
    setLoading(true);
    navigate("/comics");
    setLoading(false);
  };

  return (
    <Container>
      <Menu>
        <SearchInput
          placeholder="Search Heroes..."
          onChangeHandler={handleSearch}
          value={searchField}
        />
        <ButtonWrapperMenu>
          <Button text="Comics" onClick={handleComics} />
        </ButtonWrapperMenu>
      </Menu>
      {loading ? (
        <WrapperLoading>
          <RotateLoader size={100} />
        </WrapperLoading>
      ) : (
        <>
          <Wrapper>
            {heroes && heroes.length > 0 ? (
              <MapHeroes>
                {heroes.map((character) => {
                  return <CardHero character={character} key={character.id} />;
                })}
              </MapHeroes>
            ) : (
              <>
                {heroes && heroes.length === 0 && (
                  <p>Personagem não encontrado :( </p>
                )}
              </>
            )}
          </Wrapper>
          {!searchField && (
            <ButtonWrapper>
              <Button text="More Heroes" onClick={handleMoreHeroes} />
            </ButtonWrapper>
          )}
        </>
      )}
    </Container>
  );
};
