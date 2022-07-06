import React, { useEffect, useState } from "react";
import {
  Wrapper,
  ComicsDetailContainer,
  GoBack,
  Info,
  Photo,
  RatingStatus,
  Name,
  MoreInfo,
  Links,
  WrapperDetailsHero,
  Events,
  Comics,
  Creators,
  Creator,
} from "./styles";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ComicsData } from "../Comics";
import { getComics } from "../../services/api";
import RingLoader from "react-spinners/ClipLoader";

interface Params {
  id: string;
}

export const ComicsDetail = () => {
  const { id } = useParams<keyof Params>() as Params;
  const navigate = useNavigate();
  const [ratingValue, setRatingValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<ComicsData>({
    id: "string",
    title: "",
    description: "",
    thumbnail: {
      extension: "",
      path: "",
    },
    creators: {
      avaliable: "",
      collectionURI: "",
      items: [
        {
          name: "",
          role: "",
        },
      ],
    },
    urls: [
      {
        type: "",
        url: "",
      },
    ],
    series: {
      name: "",
    },
    characters: {
      items: [
        {
          name: "",
        },
      ],
    },
  });

  useEffect(() => {
    const rating = localStorage.getItem(id);
    setRatingValue(Number(rating) || 0);
  }, []);

  useEffect(() => {
    dataComics();
  }, [id]);

  const dataComics = async () => {
    setLoading(true);
    const dataSolicitaion = await getComics(id);
    setComics(dataSolicitaion[0]);
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
        <ComicsDetailContainer>
          <GoBack>
            <BiArrowBack onClick={() => navigate(-1)} size={30} />
          </GoBack>
          <Info>
            <Photo
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt={`Hero image${comics.title}`}
            />
            <RatingStatus>
              <Rating ratingValue={ratingValue} onClick={handleRating} />
            </RatingStatus>
            <Name>{comics.title}</Name>
            <Creators>
              {`Criador: `}
              {comics.creators.items.slice(0, 3).map((item, index) => (
                <Creator key={index}>{item?.name}</Creator>
              ))}
            </Creators>
            <MoreInfo>
              {comics.urls.map((url, index) => (
                <Links href={url.url} target="_blank" key={index}>
                  {url.type}
                </Links>
              ))}
            </MoreInfo>
          </Info>
          <WrapperDetailsHero>
            <Events>
              {`Descrição: `}
              {comics.description === "" || null
                ? "Quadrinho não possui descrição"
                : comics.description}
            </Events>
            <Comics>
              {`Serie que o quadrinho percetence: `}
              {comics.series.name}
            </Comics>
            <Comics>
              {`Cross-over de personagens: `}
              {comics.characters.items.map((item, index) => (
                <div key={index}>{item?.name}</div>
              ))}
            </Comics>
          </WrapperDetailsHero>
        </ComicsDetailContainer>
      )}
    </Wrapper>
  );
};
