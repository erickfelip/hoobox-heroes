import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
  width: 100%;
  min-height: 100vh;
  padding: 5%;
  gap: 2.5rem;
`;

export const ComicsDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 85%;
  border-radius: 20px;
  padding: 10px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const GoBack = styled.div`
  color: black;
  height: 557px;
  cursor: pointer;

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 2rem;
    padding-right: 20rem;
  }
`;

export const Photo = styled.img.attrs({
  width: 375,
  height: 367,
})`
  max-width: 100%;
  border-radius: 10px;
`;

export const Info = styled.div`
  padding: 20px;
  font-size: 16px;
  width: 100%;

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const RatingStatus = styled.div`
  width: 70px;
  height: 70px;
  padding-top: 10px;

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  background-color: #eee;
  border-radius: 10px;
  overflow: auto;
  padding: 20px;
  height: 50%;
  width: 100%;
`;
export const Comics = styled.div`
  font-size: 16px;
  background-color: #eee;
  border-radius: 10px;
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
  gap: 1.25rem;
`;

export const Creators = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-bottom: 10px;

  @media screen and (max-width: 363px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 10px;
  }
`;

export const Creator = styled.div``;
