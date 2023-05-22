import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyList from "../PropertiesPage/PropertiesPageComponents/PropertyList/PropertyList";
import GoogleMapsContainer from "../../components/GoogleMapsContainer/GoogleMapsContainer";
import MapIFrameCopy from "../../components/MapIFrame/MapIFrame_copy";
import MorrisDeltaHeader from "../../components/MorrisDeltaHeader/MorrisDeltaHeader";
import Database from "../../Database";
import { URL_HOST } from "../../urlHost";

const MapsAndNeighborsHoods = ({ handleSelection }) => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  useEffect(() => {
    getProperties(properties);
  }, []);

  async function getProperties() {
    // try {
    //   const response = await axios.get(`${URL_HOST}/api/properties/`);
    //   setProperties(response.data);
    // } catch (error) {
    //   console.log(error.response.data);
    // }
    setProperties(Database.properties);
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
        handleSelection={handleSelection}
      />
    </div>
  ) : (
    <div>
      <MorrisDeltaHeader />
      <MapIFrameCopy setSelectedProperty={setSelectedProperty} />
      <PropertyList
        properties={properties}
        setSelectedProperty={setSelectedProperty}
        setSelectedPhoto={setSelectedPhoto}
        handleSelection={handleSelection}
      />
    </div>
  );
};

export default MapsAndNeighborsHoods;
