import React, { useState, createContext, useEffect, useMemo } from "react";

import { locationRequest, locationTransform } from "./api";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((res) => {
        setLocation(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
