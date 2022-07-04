import styled from "styled-components";

export const MoreHeroes = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 15px;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 20px;
  -webkit-transition-duration: 0.4s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
