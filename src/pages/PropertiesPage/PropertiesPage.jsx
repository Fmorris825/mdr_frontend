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
const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  useEffect(() => {
    getProperties();
  }, []);

  // async function getProperties() {
  //   try {
  //     const response = await axios.get(`${URL_HOST}/api/properties/`);
  //     setProperties(response.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // }

  async function getProperties() {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
      };
      const response = await axios.get(`${URL_HOST}/api/properties/`, config);
      setProperties(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  console.log(properties);
  return selectedProperty ? (
    <div>
      <MorrisDeltaHeader />
      <div className="d-flex flex-column align-items-center bodyBackground">
        <PropertyViewer
          selectedProperty={selectedProperty}
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          getProperties={getProperties}
        />

        <PropertyList
          properties={properties}
          setSelectedProperty={setSelectedProperty}
          setSelectedPhoto={setSelectedPhoto}
        />
      </div>
    </div>
  ) : (
    <div>
      <MorrisDeltaHeader />
      <Row className="bodyBackground">
        <Col>
          <PropertyCarousel />
        </Col>
        <Col>
          <PropertyList
            properties={properties}
            setSelectedProperty={setSelectedProperty}
            setSelectedPhoto={setSelectedPhoto}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PropertiesPage;
