import './header.css';
const $ = (await import('jquery')).default;


$('header').append(`
<div id="logo" width="200" height="200"></div>
<p>Holberton Dashboard</p>
`);
console.log('Init header');

