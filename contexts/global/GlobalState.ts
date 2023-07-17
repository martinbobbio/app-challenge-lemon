export interface FilterGlobalState {
  search?: string;
}

export interface GlobalState {
  theme: "light" | "dark";
  filters: FilterGlobalState;
}

export type Action =
  | { type: "SET_THEME"; payload: "light" | "dark" }
  | { type: "SET_FILTERS"; payload: FilterGlobalState }
  | { type: "TOGGLE_THEME" };

export const initialGlobalState: GlobalState = {
  theme: "dark",
  filters: {},
};
