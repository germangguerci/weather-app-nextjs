import React, { createContext, useState } from 'react';

export const WheaterContext = createContext();
const WheaterContextProvider = (props) => {
  const [contextDataWeather, setContextDataWeather] = useState({});

  return (
    <WheaterContext.Provider value={{ contextDataWeather, setContextDataWeather }}>
      {props.children}
    </WheaterContext.Provider>
  );
};
export default WheaterContextProvider;
