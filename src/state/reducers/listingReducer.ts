import { Listing } from "../../interfaces/listing";

export interface ListingsState {
  listings: Listing[];
}

type Remove = { type: "REMOVE"; payload: Listing };
type Add = { type: "ADD"; payload: Listing };
type RetrieveAll = { type: "GET-ALL" };
type Action = Add | Remove | RetrieveAll;

const initialState = {
  listings: [],
};

export const listingReducer = (
  state: ListingsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD":
      console.log("ADD", action.payload);
      return { ...state, listings: [...state.listings, action.payload] };
    case "REMOVE":
      return {
        ...state,
        listings: state.listings.filter(({ id }) => id !== action.payload.id),
      };
    default:
      return state;
  }
};
