import React, { useState, useEffect, useSyncExternalStore } from "react";
import PropertyCarousel from "./PropertiesPageComponents/PropertyCarousel/PropertyCarousel";
import axios from "axios";
import "./PropertiesPage.css";
import PropertyList from "./PropertiesPageComponents/PropertyList/PropertyList";
import PropertyViewer from "./PropertiesPageComponents/PropertyViewer/PropertyViewer";
import { Col, Row } from "react-bootstrap";
import PropertiesIFrame from "../../components/PropertiesIFrame/PropertiesIFrame";
import MorrisDeltaHeader from "../../components/MorrisDeltaHeader/MorrisDeltaHeader";
import Database from "../../Database";
import { URL_HOST } from "../../urlHost";
const PropertiesPage = ({
  selectedProperty,
  selectedPhoto,
  setSelectedPhoto,
  setSelectedProperty,
  handleSelection,
  setScrollPhotoSelected,
  scrollPhotoSelected,
}) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties();
    console.log(selectedProperty, selectedPhoto);
  }, []);

  async function getProperties() {
    try {
      const response = await axios.get(`${URL_HOST}/api/properties/`);
      setProperties(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  // async function getProperties() {
  //   try {
  //     const config = {
  //       headers: {
  //         "Access-Control-Allow-Methods": "*",
  //         "Access-Control-Allow-Headers": "*",
  //       },
  //     };
  //     const response = await axios.get(`${URL_HOST}/api/properties/`, config);
  //     setProperties(response.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // }
  console.log(selectedProperty);
  return selectedProperty ? (
    <div>
      <MorrisDeltaHeader />
      <div className="d-flex flex-column align-items-center bodyBackground">
        <PropertyViewer
          selectedProperty={selectedProperty}
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          getProperties={getProperties}
          handleSelection={handleSelection}
          setScrollPhotoSelected={setScrollPhotoSelected}
          scrollPhotoSelected={scrollPhotoSelected}
        />

        <PropertyList
          properties={properties}
          setSelectedProperty={setSelectedProperty}
          setSelectedPhoto={setSelectedPhoto}
          handleSelection={handleSelection}
        />
      </div>
    </div>
  ) : (
    <div>
      <MorrisDeltaHeader />
      <Row className="bodyBackground">
        <Col sm={5}>
          <PropertyCarousel properties={properties} />
        </Col>
        <Col sm={7}>
          <PropertyList
            properties={properties}
            setSelectedProperty={setSelectedProperty}
            setSelectedPhoto={setSelectedPhoto}
            handleSelection={handleSelection}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PropertiesPage;
