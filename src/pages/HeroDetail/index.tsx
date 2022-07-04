import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Photo,
  Info,
  RatingStatus,
  Name,
  Links,
  MoreInfo,
  Events,
  Comics,
  WrapperDetailsHero,
} from "./styles";
import { useParams } from "react-router-dom";
import { getHero } from "../../services/api";
import { HeroesData } from "../Home";

interface Params {
  id: string;
}

export const HeroDetail = () => {
  const { id } = useParams<keyof Params>() as Params;
  const [loading, setLoading] = useState(false);
  const [hero, setHero] = useState<HeroesData>({
    id: "",
    name: "",
    description: "",
    thumbnail: {
      extension: "",
      path: "",
    },
    comics: {
      available: "",
    },
  });

  const dataHeroes = async () => {
    setLoading(true);
    const dataSolicitaion = await getHero(id);
    console.log("!!!", dataSolicitaion);
    setHero(dataSolicitaion[0]);
    setLoading(false);
  };

  useEffect(() => {
    dataHeroes();
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <Info>
          <Photo
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={`Heroe image${hero.name}`}
          />
          <RatingStatus />
          <Name>{hero.name}</Name>
          <Name>{hero.comics.available}</Name>
          <MoreInfo>
            <Links>WIKI</Links>
            <Links>COMIC</Links>
            <Links>DETAIL</Links>
          </MoreInfo>
        </Info>
        <WrapperDetailsHero>
          <Events> Eventos </Events>
          <Comics> Quadrinhos </Comics>
        </WrapperDetailsHero>
      </Wrapper>
    </Container>
  );
};
