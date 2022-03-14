import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Listings, CreateListing, UpdateListing, RemoveListing } from "./pages";

export const App = () => {
  return (
    <>
      <Router>
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
