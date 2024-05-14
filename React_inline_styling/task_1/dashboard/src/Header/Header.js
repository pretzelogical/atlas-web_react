import React from 'react';
import HolbertonLogo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const headerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  h1: {
    color: '#dd283f'
  }
})

export default function Header() {
  return (
    <header className={css(headerStyles.header)}>
      <img
        src={HolbertonLogo}
        alt="Holberton Logo"
        width={256}
        height={256}
      ></img>
      <h1 className={css(headerStyles.h1)}>School Dashboard</h1>
    </header>
  );
}
