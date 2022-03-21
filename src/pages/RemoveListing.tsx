import { useState, useEffect } from "react";
import { Listing } from "../interfaces/listing";
import { useParams } from "react-router-dom";
import { Actions } from "../state/actions/listingActions";

export const RemoveListing = () => {
  const { id } = useParams<{ id: string }>();
  const { retrieveSpecific, remove } = Actions();
  const [loaded, setLoadedValue] = useState(false);
  const [listing, setListing] = useState<Listing>({
    id: "",
    title: "",
    description: "",
    price: "",
  });

  const handleConfirm = () => remove(listing);

  useEffect(() => {
    if (!loaded) {
      const data = retrieveSpecific(id);
      setListing(data as Listing);
      setLoadedValue(true);
    }
  }, [id, loaded, retrieveSpecific]);

  return (
    <>
      <h1>Are you sure you want to remove this listing?</h1>
      {listing?.id} {listing?.title} {listing?.description} {listing?.price}
      <button onClick={handleConfirm}>Confirm</button>
      <button>Cancel</button>
    </>
  );
};
