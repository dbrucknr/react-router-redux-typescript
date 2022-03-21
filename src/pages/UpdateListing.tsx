import { useParams } from "react-router-dom";
import { ChangeEvent, useState, useEffect } from "react";
import { Listing } from "../interfaces/listing";
import { Actions } from "../state/actions/listingActions";

export const UpdateListing = () => {
  const { id } = useParams<{ id: string }>();
  const { retrieveSpecific, update } = Actions();
  const [loaded, setLoadedValue] = useState(false);
  const [listing, setListing] = useState<Listing>({
    id: "",
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

  const updateListing = () => {
    update(listing);
  };

  useEffect(() => {
    if (!loaded) {
      const data = retrieveSpecific(id);
      setListing(data as Listing);
      setLoadedValue(true);
    }
  }, [id, loaded, retrieveSpecific]);

  return (
    <>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={listing?.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={listing?.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={listing?.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={listing?.price}
        onChange={handleChange}
      />
      <button onClick={updateListing}>Update Listing</button>
    </>
  );
};
