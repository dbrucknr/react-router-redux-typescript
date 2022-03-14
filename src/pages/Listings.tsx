import { Listing } from "../interfaces/listing";

export const Listings = ({ listingsArray }: { listingsArray: Listing[] }) => {
  return (
    <>
      {listingsArray.map((listing: Listing) => {
        return <li key={listing.id}>{listing.title}</li>;
      })}
    </>
  );
};
