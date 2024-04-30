import $ from 'jquery';
import { debounce } from 'lodash';


$('body').append(`
<p>Holberton Dashboard</p>
<p>Dashboard data for the students</p>
<button>Click here to get started</button>
<p id='count'>0</p>
<p>Copyright - Holberton School</p>
`);

const updateCounter = (() => {
  let count = 0;
  return () => {
    count += 1;
    $('#count').text(count);
  }
})();

$('button').on('click', debounce(updateCounter, 500));
