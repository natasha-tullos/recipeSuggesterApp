import React, { useState } from 'react';

const NavContext = React.createContext();

const NavContextProvider = (props) => {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <NavContext.Provider value={[isAuthenticated, setAuth]}>
      {/* <NavContext.Consumer> */}
        {props.children}
      {/* </NavContext.Consumer> */}
    </NavContext.Provider>
  );
}

export { NavContext, NavContextProvider };