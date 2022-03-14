import { useState, ChangeEvent } from "react";
import { Listing } from "../interfaces/listing";

interface CreateListingProps {
  create(listing: Listing): void;
}

export const CreateListing: React.FC<CreateListingProps> = ({ create }) => {
  const [listing, setListing] = useState({
    id: "3",
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setListing((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addListing = () => {
    create(listing);
  };
  return (
    <>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={listing.id}
        onChange={handleChange}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={listing.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={listing.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="price"
        placeholder="Price"
        value={listing.price}
        onChange={handleChange}
      />

      <button onClick={addListing}>Add Listing</button>
    </>
  );
};
