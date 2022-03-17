import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListingsState } from "../state/reducers/listingReducer";
import { Actions } from "../state/actions/listingActions";

export const ListingDetail = () => {
  const { id } = useParams();
  const { retrieveSpecific } = Actions();
  const [listing, setListing] = useState<ListingsState["listings"] | any>();

  useEffect(() => {
    const data = retrieveSpecific(id);
    console.log(data);
    setListing(data);
  }, [id, retrieveSpecific]);
  return (
    <>
      <div>
        Detail Page {listing?.id} {listing?.title} {listing?.description}{" "}
        {listing?.price}
      </div>
    </>
  );
};
