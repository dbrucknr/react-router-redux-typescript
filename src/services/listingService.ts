import { Listing } from "../interfaces/listing";

const Create = async (listing: Listing) => {
  console.log("CREATE SERVICE");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return listing;
};

const RetrieveAll = () => fetch("");

const RetrieveSpecific = () => {};

const Update = () => {};

const Remove = () => {};

export const ListingService = {
  Create,
  RetrieveAll,
  RetrieveSpecific,
  Update,
  Remove,
};
