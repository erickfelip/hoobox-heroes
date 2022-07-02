import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const Input = styled.input.attrs({})`
  display: flex;
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
