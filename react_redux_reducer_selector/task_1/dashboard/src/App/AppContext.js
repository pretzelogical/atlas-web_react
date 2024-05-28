import { createContext } from 'react';

const AppContext = createContext({
  user: {
    email: '',
    password: '',
    isLoggedIn: false
  },
  logOut: () => void(0)
});

export default AppContext;
