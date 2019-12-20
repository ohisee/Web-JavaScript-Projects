/**
 * @fileoverview Store using React hook
 */
import { useState, useEffect } from "react";

let globalState = {};

// A list of setStoreState functions
let listeners = [];

// A list of functions
let actions = {};

/**
 * Custom useStore hook
 */
export const useStore = (shouldListen = true) => {
  const [_, setStoreState] = useState(globalState);

  const dispatch = (actionIdenifiter, payload) => {
    const newState = actions[actionIdenifiter](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (let listener of listeners) {
      listener(globalState);
    }
  };

  // setStoreState will never change
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setStoreState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(l => l !== setStoreState);
      }
    };
  }, [setStoreState, shouldListen]);

  return [globalState, dispatch];
};

export const initialStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  if (userActions) {
    actions = { ...actions, ...userActions };
  }
};
