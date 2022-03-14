import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Listing } from "./interfaces/listing";
import { Listings, CreateListing, UpdateListing, RemoveListing } from "./pages";
import { ListingsState } from "./state/reducers/listingReducer";

export const App = () => {
  const listings = useSelector<ListingsState, ListingsState["listings"]>(
    (state) => state.listings
  );
  const dispatch = useDispatch();
  const create = (listing: Listing) => {
    console.log("Create", listing);
    dispatch({ type: "ADD", payload: listing });
    console.log(listings);
  };
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/create-listing">Create</Link>
        <Routes>
          <Route path="/" element={<Listings listingsArray={listings} />} />
          <Route path="/update-listing/:id" element={<UpdateListing />} />
          <Route path="/remove-listing/:id" element={<RemoveListing />} />
          <Route
            path="/create-listing"
            element={<CreateListing create={create} />}
          />
        </Routes>
      </Router>
    </>
  );
};

// export default App;
