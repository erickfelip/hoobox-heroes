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
  WrapperLoading,
} from "./styles";
import { ComicCard } from "../../components/ComicCard";
import { api, fetchComics } from "../../services/api";
import { useNavigate } from "react-router-dom";
import RotateLoader from "react-spinners/ClipLoader";
import { ComicsData } from "../../types";
import { debounce } from "lodash";

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

  const handleSearch = debounce((string: { target: { value: string } }) => {
    const { value } = string.target;
    setSearchField(value);
  }, 350);

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
    setLoading(true);
    navigate("/");
    setLoading(false);
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
      {loading ? (
        <WrapperLoading>
          <RotateLoader size={100} />
        </WrapperLoading>
      ) : (
        <>
          <Wrapper>
            {comics && comics.length > 0 ? (
              <MapHeroes>
                {comics.map((comics, index) => {
                  return <ComicCard comics={comics} key={index} />;
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
        </>
      )}
    </Container>
  );
};
