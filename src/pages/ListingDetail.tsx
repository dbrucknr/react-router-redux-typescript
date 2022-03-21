import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Listing } from "../interfaces/listing";
import { Actions } from "../state/actions/listingActions";

export const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { retrieveSpecific } = Actions();
  const [listing, setListing] = useState<Listing>();

  useEffect(() => {
    const data = retrieveSpecific(id);
    setListing(data);
  }, [id, retrieveSpecific]);

  return (
    <>
      <div>
        Detail Page {listing?.id} {listing?.title} {listing?.description}{" "}
        {listing?.price}
        <Link to={`/update-listing/${listing?.id}`}>Update</Link>
      </div>
    </>
  );
};
