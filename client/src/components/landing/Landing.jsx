/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allVideogames, getGenres } from "../../redux/actions";
import { useDispatch } from "react-redux";

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
    <div>
      <h1>This is the Landing Page</h1>
      <h2>and it is working ok</h2>
      <button onClick={buttonHandler}>Continue to the home</button>
    </div>
  );
}
