import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Listing } from "./interfaces/listing";
import { Listings, CreateListing, UpdateListing, RemoveListing } from "./pages";
import { ListingsState } from "./state/reducers/listingReducer";

export const App = () => {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/create-listing">Create</Link>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/update-listing/:id" element={<UpdateListing />} />
          <Route path="/remove-listing/:id" element={<RemoveListing />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </Router>
    </>
  );
};

// export default App;
