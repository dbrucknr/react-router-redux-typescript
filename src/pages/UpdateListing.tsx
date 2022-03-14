import { ChangeEvent, useState } from "react";
import { Listing } from "../interfaces/listing";

export const UpdateListing = () => {
  const [listing, setListingProperties] = useState({});

  const updateListing = (event: ChangeEvent<HTMLInputElement>) => {
    setListingProperties(event.target.value);
  };
  return <>Update Listing</>;
};
