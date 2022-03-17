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

  const retrieve = () => {
    return listings;
  };

  return { create, retrieve };
};
