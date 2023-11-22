import React from "react";

import { NavigationContainer } from "@react-navigation/native"

import Tabs from "./src/components/Tabs";

import Counter from "./src/demonstration/counter";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Counter />
    </NavigationContainer>
    
  );
};

export default App;

// 2:00:46 11/17/2023
