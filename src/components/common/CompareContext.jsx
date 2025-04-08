import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (property) => {
    if (compareList.length < 5 && !compareList.some(p => p.title === property.title)) {
      setCompareList([...compareList, property]);
    }
  };

  const removeFromCompare = (title) => {
    setCompareList(compareList.filter(p => p.title !== title));
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);

