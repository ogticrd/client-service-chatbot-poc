import React from "react";
import { BiReset } from "react-icons/bi";
import styled from "styled-components";
import { ButtonContainer } from "../styled/Button";

const SearchRoomsContainer = styled.div`
  display: flex;
  background: #fff;
  width: 30%;
  padding-left: 1.2em;
  border-radius: 10px;

  & input {
    width: 85%;
    background: transparent;
    border: none;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const SearchRooms = ({ query, setQuery }) => {
  return (
    <>
      {/* <img src="/logo-ogtic.svg" alt="logo ogtic" width="155" /> */}
      {/* <SearchRoomsContainer>
        <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />

        <ButtonContainer padding="0" active={true} size="3em" borderRadius="60px">
            <a href="#">
            <BiReset fill="#fff" size={"1.5em"}></BiReset>
            </a>
        </ButtonContainer>
        </SearchRoomsContainer> */}
    </>
  );
};

export default SearchRooms;
