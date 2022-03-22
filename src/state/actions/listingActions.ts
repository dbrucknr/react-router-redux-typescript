import { Listing } from "../../interfaces/listing";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { ActionTypes } from "../reducers/listingReducer";
import { ListingService } from "../../services/listingService";

export const Actions = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state: RootState) => state.listings);

  const create = async (listing: Listing) => {
    try {
      const response = await ListingService.Create(listing);
      // if (response.ok) {
      //   dispatch({ type: ActionTypes.ADD, payload: response.body });
      // }
      // Mocked:
      dispatch({ type: ActionTypes.ADD, payload: response });
    } catch (error) {
      console.error(error);
    }
  };

  const retrieveAll = async () => {
    // try {
    //   const response = await ListingService.RetrieveAll();
    //   if (response.ok) {
    //     dispatch({ type: ActionTypes.ALL, payload: response.body });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
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
