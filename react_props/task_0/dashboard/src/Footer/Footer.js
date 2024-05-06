import React from "react";
import './Footer.css';
import { getFooterCopy } from "../utils/utils.js";


export default function Footer() {
  return (
    <div className="App-footer">
        <p>Copyright 2020 - {getFooterCopy(true)}</p>
    </div>
  )
}