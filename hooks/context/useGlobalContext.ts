// React
import { useContext } from "react";
// Context
import { FilterGlobalState, GlobalContext } from "../../contexts";

/**
 * Hook that facility global contexts calls.
 *
 */
const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { theme, filters } = state;

  const setTheme = (payload: "light" | "dark") => {
    dispatch({ type: "SET_THEME", payload });
  };

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setFilters = (payload: FilterGlobalState) => {
    dispatch({ type: "SET_FILTERS", payload });
  };

  return { filters, theme, setFilters, setTheme, toggleTheme };
};

export default useGlobalContext;
