import { Listing } from "../../interfaces/listing";

export interface ListingsState {
  listings: Listing[];
}

export enum ActionTypes {
  ALL = "ALL",
  SPECIFIC = "SPECIFIC",
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE = "UPDATE",
}

export interface Actions {
  type: ActionTypes;
  payload: Listing;
}

const initialState = {
  listings: [],
};

const actionTable = {
  ALL: (state: ListingsState) => state,
  SPECIFIC: (state: ListingsState) => state,
  ADD: (state: ListingsState, action: Actions) => ({
    ...state,
    listings: [...state.listings, action.payload],
  }),
  REMOVE: (state: ListingsState, action: Actions) => ({
    ...state,
    listings: state.listings.filter(({ id }) => id !== action.payload.id),
  }),
  UPDATE: (state: ListingsState, action: Actions) => ({
    ...state,
    listings: state.listings.map((listing: Listing) => {
      return listing.id === action.payload.id
        ? { ...listing, ...action.payload }
        : listing;
    }),
  }),
};

export const listingReducer = (
  state: ListingsState = initialState,
  action: Actions
) => {
  const { type } = action;
  const handler = actionTable[type];
  return handler ? handler(state, action) : state;
};
