import React from 'react';
import HolbertonLogo from '../assets/holberton_logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img
        src={HolbertonLogo}
        alt="Holberton Logo"
        width={256}
        height={256}
      ></img>
      <h1>School Dashboard</h1>
    </header>
  );
}
