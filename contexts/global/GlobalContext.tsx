// React
import { createContext, Dispatch, useReducer } from 'react';
// State
import { Action, GlobalState, initialGlobalState } from './GlobalState';
import { globalReducer } from './GlobalReducer';

interface GlobalContextType {
  state: GlobalState;
  dispatch: Dispatch<Action>;
}

export const GlobalContext = createContext<GlobalContextType>({
  state: initialGlobalState,
  dispatch: () => true,
});

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  const contextValue: GlobalContextType = {
    state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
