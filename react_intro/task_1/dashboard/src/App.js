import './App.css';
import Notifications from './Notifications';
import HolbertonLogo from './holberton_logo.jpg';
import { getFooterCopy } from './utils';


function App() {
  return (
    <>
      <div className='App-header'>
        <img
        src={HolbertonLogo}
        alt='Holberton Logo'
        width={256}
        height={256}></img>
        <h1>School Dashboard</h1>
        <div className="root-notifications">
          <Notifications />
        </div>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
