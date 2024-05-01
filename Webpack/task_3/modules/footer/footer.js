import './footer.css';
const $ = (await import('jquery')).default;


$('body').append(`
<p>Copyright - Holberton School</p>
`);
console.log('Init footer');

