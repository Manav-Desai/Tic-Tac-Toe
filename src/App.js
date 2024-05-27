import React, { useState } from "react";
import MainComponent from "./MainComponent";
import ThemeContext from "./ThemeContext";

function App() {
  
  const [theme , setTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={ {theme : theme , setTheme : setTheme} }>
         <MainComponent />      
      </ThemeContext.Provider>    
    </>
  );

}

export default App;
