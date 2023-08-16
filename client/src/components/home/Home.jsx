/* eslint-disable no-unused-vars */
//*Hooks and actions
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allVideogames, getGenres } from "../../redux/actions/actions";
//*components
import SearchBar from "./searchBar/SearchBar";
import Container from "./container/Container";
import ConfigurationBar from "./configurationBar/ConfigurationBar";
import PaginateBar from "./paginateBar/PaginateBar";
//*style
import styles from "./Home.module.css";

export default function Home(props) {
  const { shownVideogames, genres, page } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (shownVideogames.length === 0) {
      dispatch(allVideogames());
      dispatch(getGenres());
    }
  });
  const vgPerPage = 15;
  let totalPages = Math.floor(shownVideogames?.length / vgPerPage);
  const from = (page - 1) * vgPerPage;
  const to = page * vgPerPage;
  const displayedVideogames = shownVideogames?.slice(from, to);

  return (
    <div className={styles.home}>
      <h1>Videogames House</h1>
      <SearchBar />
      <ConfigurationBar genres={genres} />
      <PaginateBar totalPages={totalPages}></PaginateBar>
      <Container videogames={displayedVideogames} />
      <PaginateBar totalPages={totalPages}></PaginateBar>
    </div>
  );
}
