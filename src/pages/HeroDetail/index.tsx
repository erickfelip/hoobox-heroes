import React, { useEffect, useState } from "react";
import {
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
  HeroDetailsContainer,
  GoBack,
  Comic,
  Event,
} from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { getHero } from "../../services/api";
import { HeroesData } from "../Home";
import { Rating } from "react-simple-star-rating";
import { BiArrowBack } from "react-icons/bi";
import RingLoader from "react-spinners/ClipLoader";

interface Params {
  id: string;
}

export const HeroDetail = () => {
  const { id } = useParams<keyof Params>() as Params;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);

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
      items: [
        {
          name: "",
        },
      ],
    },
    events: {
      items: [
        {
          name: "",
        },
      ],
    },
    urls: [
      {
        type: "",
        url: "",
      },
    ],
  });

  useEffect(() => {
    const rating = localStorage.getItem(id);
    setRatingValue(Number(rating) || 0);
  }, []);

  useEffect(() => {
    dataHeroes();
  }, [id]);

  const dataHeroes = async () => {
    setLoading(true);
    const dataSolicitaion = await getHero(id);
    setHero(dataSolicitaion[0]);
    setLoading(false);
  };

  const handleRating = (rate: number) => {
    localStorage.setItem(id, String(rate));
  };

  return (
    <Wrapper>
      {loading ? (
        <RingLoader size={100} />
      ) : (
        <HeroDetailsContainer>
          <GoBack>
            <BiArrowBack onClick={() => navigate(-1)} size={30} />
          </GoBack>
          <Info>
            <Photo
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={`Hero image${hero.name}`}
            />
            <RatingStatus>
              <Rating ratingValue={ratingValue} onClick={handleRating} />
            </RatingStatus>
            <Name>{hero.name}</Name>
            <Name>{hero.comics.available}</Name>
            <MoreInfo>
              {hero.urls.map((url, index) => (
                <Links href={url.url} target="_blank" key={index}>
                  {url.type}
                </Links>
              ))}
            </MoreInfo>
          </Info>
          <WrapperDetailsHero>
            <Events>
              {`Eventos:`}
              {hero.events.items.map((item, index) => (
                <Event key={index}>{item?.name}</Event>
              ))}
            </Events>
            <Comics>
              {`Quadrinhos:`}
              {hero.comics.items.map((item, index) => (
                <Comic key={index}>{item?.name}</Comic>
              ))}
            </Comics>
          </WrapperDetailsHero>
        </HeroDetailsContainer>
      )}
    </Wrapper>
  );
};
