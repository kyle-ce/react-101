import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);
const initialState = {
  page: "home",
  material: {
    sqft: 0,
    width: 0,
    length: 0,
    total: "",
  },
  labor: {
    sqft: 0,
    width: 0,
    length: 0,
    total: "",
  },
};

const AppProvider = ({ children }) => {
  const [app, setApp] = useState(initialState);

  return (
    <AppContext.Provider value={[app, setApp]}>{children}</AppContext.Provider>
  );
};
export default AppProvider;
