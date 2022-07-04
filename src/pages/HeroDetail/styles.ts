import styled from "styled-components";
import teste from "../../assets/teste.jpg";
import px2vw from "../../utils/index";

export const Container = styled.main`
  min-height: 100vh;
  background: #eee;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1350px;
  height: 675px;
  background-color: #fff;
  border-radius: 20px;
`;

export const Photo = styled.img.attrs({
  width: 375,
  height: 375,
})`
  max-width: 100%;
  height: auto;
`;

export const Info = styled.div`
  padding: 20px;
  font-size: 16px;
  background-color: red;
`;

export const RatingStatus = styled.div`
  width: 100px;
  height: 70px;
  background-color: yellow;
`;

export const Name = styled.div`
  padding-bottom: 10px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 25px;
  border-radius: 20px;
  background-color: #005fb7;
`;

export const MoreInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const Events = styled.div`
  height: 230px;
  width: 700px;
  background-color: green;
`;
export const Comics = styled.div`
  height: 230px;
  width: 700px;
  background-color: yellowgreen;
`;

export const WrapperDetailsHero = styled.div`
  display: columns;
  justify-content: center;
  align-items: center;
`;

/* export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  height: 300px;
  background-color: #f5f5;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: red;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.div`
  color: #333;
  font-size: 2rem;
  text-align: center;
  background-color: yellowgreen;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.div`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;
  background-color: blue;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`; */
