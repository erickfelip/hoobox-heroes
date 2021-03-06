import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Photo = styled.img`
  max-width: 100%;
  min-height: 400px;
  background-size: contain;
`;

export const CardContent = styled.div`
  padding: 20px;
  font-size: 16px;
`;

export const Name = styled.div`
  padding-bottom: 10px;
`;

export const Description = styled.div`
  font-weight: lighter;

`;