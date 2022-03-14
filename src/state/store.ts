import { createStore } from "redux";
import { listingReducer } from "./reducers/listingReducer";

const store = createStore(listingReducer);

export default store;
