import React, { useContext } from "react";
import { getFooterCopy } from "../utils/utils.js";
import AppContext from '../App/AppContext.js';
import './Footer.css';


export default function Footer() {
  const { user } = useContext(AppContext);
  return (
    <footer>
      <p>Copyright 2020 - {getFooterCopy(true)}</p>
      {user.isLoggedIn ? <p><a href="#">Contact us</a></p> : null}
    </footer>
  )
}