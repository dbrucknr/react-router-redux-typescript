import { combineReducers } from "redux";
import { listingReducer } from "./listingReducer";

export const rootReducer = combineReducers({
  listings: listingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
