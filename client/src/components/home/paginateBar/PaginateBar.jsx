/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
//*Hooks and actions
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../redux/actions/actions";
//*Styles
import styles from "./PaginateBar.module.css";

export default function PaginateBar({ totalPages }) {
  const { page } = useSelector((s) => s);
  const dispatch = useDispatch();
  const handlerPrev = () => {
    dispatch(changePage(page - 1));
  };
  const handlerNext = () => {
    dispatch(changePage(page + 1));
  };
  return (
    <div className={styles.barContainer}>
      {page > 1 ? <button onClick={handlerPrev}>PREV</button> : null}
      {/* {page > 2 ? <h3>...</h3> : null} */}
      <div>
        {/* <h3 onClick={handlerPrev}>{page - 1}</h3> */}
        <h3>{page}</h3>
        {/* <h3 onClick={handlerNext}>{page + 1}</h3> */}
      </div>
      {/* {page < totalPages - 1 ? <h3>...</h3> : null} */}
      {page < totalPages ? <button onClick={handlerNext}>NEXT</button> : null}
    </div>
  );
}
