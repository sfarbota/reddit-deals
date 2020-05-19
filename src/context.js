import React, { useState, createContext } from "react";

export const Context = createContext();

export function Provider(props) {
  let initialState = {
    deals: [],
    category: ""
  };

  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
}

export const Consumer = Context.Consumer;
