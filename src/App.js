// General Imports
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RealtorsPage from "./pages/RealtorsPage/RealtorsPage";
import PropertiesPage from "./pages/PropertiesPage/PropertiesPage";
import SophiaMorrisPage from "./pages/RealtorsPage/SophiaMorrisPage/SophiaMorrisPage";
import DavidVernonPage from "./pages/RealtorsPage/DavidVernonPage/DavidVernonPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import MapsAndNeighborsHoods from "./pages/MapsAndNeighborhoodsPage/MapsAndNeighborhoodsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
function App() {
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(false);
  const [scrollPhotoSelected, setScrollPhotoSelected] = useState(false);

  function handleSelection(property) {
    console.log(property);
    setSelectedProperty(property);
    setScrollPhotoSelected(false);
    setSelectedPhoto(property.photo_url);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setSelectedPhoto={setSelectedPhoto}
              selectedProperty={selectedProperty}
              selectedPhoto={selectedPhoto}
              setSelectedProperty={setSelectedProperty}
              handleSelection={handleSelection}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/realtors" element={<RealtorsPage />} />
        <Route
          path="mapsandneighborhoods"
          element={<MapsAndNeighborsHoods handleSelection={handleSelection} />}
        />
        <Route path="/realtors/sophiamorris" element={<SophiaMorrisPage />} />
        <Route path="/realtors/davidvernon" element={<DavidVernonPage />} />
        <Route
          path="/properties"
          element={
            <PropertiesPage
              setSelectedPhoto={setSelectedPhoto}
              selectedProperty={selectedProperty}
              selectedPhoto={selectedPhoto}
              setSelectedProperty={setSelectedProperty}
              handleSelection={handleSelection}
              scrollPhotoSelected={scrollPhotoSelected}
              setScrollPhotoSelected={setScrollPhotoSelected}
            />
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
