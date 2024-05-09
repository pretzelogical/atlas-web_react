import React from "react";
import { getFooterCopy } from "../utils/utils.js";
import './Footer.css';


export default function Footer() {
  return (
    <footer>
      <p>Copyright 2020 - {getFooterCopy(true)}</p>
    </footer>
  )
}