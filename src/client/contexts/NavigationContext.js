import React, { useState } from 'react';

const NavContext = React.createContext();

const NavContextProvider = (props) => {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <NavContext.Provider value={[isAuthenticated, setAuth]}>
      {props.children}
    </NavContext.Provider>
  );
}

export { NavContext, NavContextProvider };