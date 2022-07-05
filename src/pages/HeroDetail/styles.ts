import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
  width: 100%;
  padding: 5%;
  gap: 2.5rem;
`;

export const Photo = styled.img.attrs({
  width: 355,
  height: 355,
})`
  max-width: 100%;
`;

export const Info = styled.div`
  padding: 20px;
  font-size: 16px;
  background-color: grey;
  width: 100%;
`;

export const RatingStatus = styled.div`
  width: 70px;
  height: 70px;
`;

export const Name = styled.div`
  padding-bottom: 10px;
`;

export const Links = styled.a`
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  width: 85px;
  height: 25px;
  border-radius: 20px;
  background-color: #005fb7;
  cursor: pointer;
  color: #fff !important;
  :link {
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :hover {
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  gap: 5px;
`;

export const Events = styled.div`
  font-size: 16px;
  background-color: salmon;
  overflow: auto;
  padding: 20px;
  height: 50%;
  width: 100%;
`;
export const Comics = styled.div`
  font-size: 16px;
  background-color: yellowgreen;
  overflow: auto;
  padding: 20px;
  height: 50%;
  width: 100%;
`;

export const WrapperDetailsHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35rem;
`;
