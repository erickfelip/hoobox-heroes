import React, { ChangeEventHandler } from "react";
import { SearchContainer, Input } from "./style";

interface ISearchInput {
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
}

export const SearchInput = ({
  onChangeHandler,
  placeholder,
  className,
}: ISearchInput) => {
  return (
    <SearchContainer>
      <Input
        onChange={onChangeHandler}
        type="search"
        placeholder={placeholder}
        className={className}
      />
    </SearchContainer>
  );
};
