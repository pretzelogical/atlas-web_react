import React from "react";
import './Footer.css';
import { getFooterCopy } from "../utils/utils.js";


export default function Footer() {
  return (
    <footer>
      <p>Copyright 2020 - {getFooterCopy(true)}</p>
    </footer>
  )
}