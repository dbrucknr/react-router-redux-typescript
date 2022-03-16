import { Listing } from "../../interfaces/listing";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";

export const Actions = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state: RootState) => state.listings);

  const create = (listing: Listing) => {
    return dispatch({ type: "ADD", payload: listing });
  };
  const retrieve = () => {
    console.log("retrieve", listings);
    return listings;
  };

  return { create, retrieve };
};
