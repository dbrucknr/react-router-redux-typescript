import { useEffect, useState } from "react";
import { Listing } from "../interfaces/listing";
import { ListingsState } from "../state/reducers/listingReducer";
import { Actions } from "../state/actions/listingActions";
import { Link } from "react-router-dom";

export const Listings = () => {
  const { retrieveAll } = Actions();
  const [listings, setListings] = useState<ListingsState["listings"]>([]);

  useEffect(() => {
    const data = retrieveAll();
    setListings(data.listings);
  }, [retrieveAll]);

  return (
    <>
      {listings?.map((listing: Listing) => {
        return (
          <div key={listing.id}>
            <Link to={`/detail-listing/${listing.id}`}>{listing.title}</Link>
          </div>
        );
      })}
    </>
  );
};
