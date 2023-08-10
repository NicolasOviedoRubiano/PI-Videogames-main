/* eslint-disable no-unused-vars */
//*libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//*components
import SearchBar from "./searchBar/searchBar";
import Container from "./container/Container";
import ConfigurationBar from "./configurationBar/ConfigurationBar";
import PaginateBar from "./paginateBar/PaginateBar";
//*actions
import { allVideogames, getGenres } from "../../redux/actions";

export default function Home(props) {
  const { shownVideogames, genres, page } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (shownVideogames.length === 0) {
      dispatch(allVideogames());
      dispatch(getGenres());
    }
  });
  const vgPerPage = 5;
  let totalPages = Math.floor(shownVideogames?.length / vgPerPage);
  const from = (page - 1) * vgPerPage;
  const to = page * vgPerPage;
  const displayedVideogames = shownVideogames?.slice(from, to);

  return (
    <div>
      <h1>This is the Home Page</h1>
      <h2>and it is working ok</h2>
      <SearchBar />
      <ConfigurationBar genres={genres} />
      <Container videogames={displayedVideogames} />
      <PaginateBar totalPages={totalPages}></PaginateBar>
    </div>
  );
}
