import React, { useContext } from "react";
import { getFooterCopy } from "../utils/utils.js";
import { useSelector } from 'react-redux';
import './Footer.css';


export default function Footer() {
  const isLoggedIn = useSelector((state) => state.getIn(['user', 'isLoggedIn']));

  return (
    <footer>
      <p>Copyright 2020 - {getFooterCopy(true)}</p>
      {isLoggedIn ? <p><a href="#">Contact us</a></p> : null}
    </footer>
  )
}