import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const date = new Date().toISOString().slice(0, 10);

  const [searchData, setSearchData] = useState("");
  const [locationSelect, setLocationSelect] = useState("All");
  const [startPriceSelect, setStartPriceSelect] = useState(0);
  const [endPriceSelect, setEndPriceSelect] = useState(100000);
  const [dateSelect, setDateSelect] = useState(date);
  const [propertyTypeSelect, setPropertyTypeSelect] = useState("All");

  return (
    <ThemeContext.Provider
      value={{
        searchData,
        setSearchData,
        dateSelect,
        setDateSelect,
        locationSelect,
        setLocationSelect,
        startPriceSelect,
        setStartPriceSelect,
        endPriceSelect,
        setEndPriceSelect,
        propertyTypeSelect,
        setPropertyTypeSelect,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
