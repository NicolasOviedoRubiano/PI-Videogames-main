/* eslint-disable no-unused-vars */
//*Hooks and actions
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allVideogames, getGenres } from "../../redux/actions/actions";
//*Styles
import styles from "./Landing.module.css";

export default function Landing(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allVideogames());
    dispatch(getGenres());
  }, []);
  const buttonHandler = async () => {
    navigate("/home");
  };
  return (
    <div className={styles.landing}>
      <h1>¿Do yo want to enter to the playzone?</h1>
      <button onClick={buttonHandler}>Continue to the home</button>
    </div>
  );
}
