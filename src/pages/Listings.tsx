import { useEffect, useState } from "react";
import { Listing } from "../interfaces/listing";
import { ListingsState } from "../state/reducers/listingReducer";
import { Actions } from "../state/actions/listingActions";

export const Listings = () => {
  const { retrieve } = Actions();
  const [listings, setListings] = useState<ListingsState["listings"]>([]);

  useEffect(() => {
    const data = retrieve();
    setListings(data.listings);
  }, [retrieve]);

  return (
    <>
      {listings?.map((listing: Listing) => {
        return <div key={listing.id}>{listing.title}</div>;
      })}
    </>
  );
};
