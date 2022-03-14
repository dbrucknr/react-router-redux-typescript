import { Listing } from "../../interfaces/listing";

export interface ListingsState {
  listings: Listing[];
}

type Action = { type: "ADD"; payload: Listing };

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
    // case "remove":
    //   return state.listings.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

// export { reducer };
