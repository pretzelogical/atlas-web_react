import '../css/main.css';


async function get_modules() {
  const [$, debounce] = await Promise.all([
    import('jquery'),
    import('lodash/debounce')
  ]);
  // The default export is on the default property
  return [$.default, debounce.default];
}


const [$, debounce] = await get_modules();

$('body').append(`
<div id="logo" width="200" height="200"></div>
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
