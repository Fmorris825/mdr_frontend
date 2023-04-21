import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyList from "../PropertiesPage/PropertiesPageComponents/PropertyList/PropertyList";
import GoogleMapsContainer from "../../components/GoogleMapsContainer/GoogleMapsContainer";
import MapIFrameCopy from "../../components/MapIFrame/MapIFrame_copy";
import MorrisDeltaHeader from "../../components/MorrisDeltaHeader/MorrisDeltaHeader";
import Database from "../../Database";
import { URL_HOST } from "../../urlHost";

const MapsAndNeighborsHoods = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  useEffect(() => {
    setProperties(Database.properties);
  }, []);

  async function getProperties() {
    try {
      const response = await axios.get(`${URL_HOST}/api/properties/`);
      setProperties(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return selectedProperty ? (
    <div>
      <MorrisDeltaHeader />
      <GoogleMapsContainer
        selectedProperty={selectedProperty}
        setSelectedProperty={setSelectedProperty}
      />{" "}
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  ) : (
    <div>
      <MorrisDeltaHeader />
      <MapIFrameCopy />
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
};

export default MapsAndNeighborsHoods;
