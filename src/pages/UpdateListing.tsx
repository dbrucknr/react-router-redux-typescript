import { ChangeEvent, useState } from "react";
import { Listing } from "../interfaces/listing";

export const UpdateListing: React.FC<Listing> = ({
  title,
  description,
  price,
}) => {
  const [listing, setListingProperties] = useState({});

  const updateListing = (event: ChangeEvent<HTMLInputElement>) => {
    setListingProperties(event.target.value);
  };
  return <>Update Listing</>;
};
