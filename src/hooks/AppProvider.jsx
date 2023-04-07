import React, {  useState } from 'react';

import { AppContext } from './AppContext';
 
 const AppProvider = ({ children }) => {
    const [userData, setUserData] =useState({
      name: '',
      email: '',
      phone: '',
      selectedPlan:0,
      isYearly: true,
      addons: []
    });
  
    return (
      <AppContext.Provider value={{ userData, setUserData }}>
        {children}
      </AppContext.Provider>
    );
  };
  export default AppProvider;
  