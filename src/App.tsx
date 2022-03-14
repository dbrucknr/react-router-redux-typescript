import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Listings, CreateListing, UpdateListing, RemoveListing } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:id" element={<UpdateListing />} />
          <Route path="/remove-listing/:id" element={<RemoveListing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
