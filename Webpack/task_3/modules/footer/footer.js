import './footer.css';
const $ = (await import('jquery')).default;


$('footer').append(`
<p>Copyright - Holberton School</p>
`);
console.log('Init footer');

