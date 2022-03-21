import { Listing } from "../../interfaces/listing";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { ActionTypes } from "../reducers/listingReducer";

export const Actions = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state: RootState) => state.listings);

  const create = (listing: Listing) => {
    return dispatch({ type: ActionTypes.ADD, payload: listing });
  };

  const retrieveAll = () => {
    // return dispatch({ type: ActionTypes.ALL }); // Add this once API call is added
    return listings;
  };

  const retrieveSpecific = (id: string | undefined) => {
    // return dispatch({ type: ActionTypes.SPECIFIC, payload: id }) // Add this once API call is added
    return listings.listings.find((listing: Listing) => listing.id === id);
  };

  const update = (listing: Listing) => {
    return dispatch({ type: ActionTypes.UPDATE, payload: listing });
  };

  const remove = (listing: Listing) => {
    return dispatch({ type: ActionTypes.REMOVE, payload: listing });
  };

  return { create, retrieveAll, retrieveSpecific, update, remove };
};
