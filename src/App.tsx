import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Listings,
  CreateListing,
  UpdateListing,
  RemoveListing,
  ListingDetail,
} from "./pages";

const NoPageFound = () => <div>404 Page Not Found</div>;

export const App = () => {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/create-listing">Create</Link>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/detail-listing/:id" element={<ListingDetail />} />
          <Route path="/update-listing/:id" element={<UpdateListing />} />
          <Route path="/remove-listing/:id" element={<RemoveListing />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </>
  );
};

// export default App;
