import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background: #eee;
  padding: 20px;
`;

export const Wrapper = styled.h1``;

export const MapHeroes = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;

export const Photo = styled.img`
  max-width: 100%;
`;

export const CardContent = styled.div`
  padding: 20px;
  font-size: 16px;
`;

export const Name = styled.div`
  padding-bottom: 10px;
`;

export const Description = styled.div``;
