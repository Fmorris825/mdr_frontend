import React from "react";
import { Col, Row } from "react-bootstrap";
import PropertyCard from "../PropertyCard/PropertyCard";

const PropertyList = ({
  properties,
  setSelectedProperty,
  setSelectedPhoto,
  handleSelection,
}) => {
  return (
    <Row className="d-flex justify-content-center">
      {/* <div className="d-flex gap-4 m-3 p-3"> */}
      <div className="d-flex justify-content-center m-3">
        <h4>Properties on Market and for Rent or Sale</h4>
      </div>
      {properties.map((property, index) => {
        return (
          <PropertyCard
            property={property}
            setSelectedProperty={setSelectedProperty}
            setSelectedPhoto={setSelectedPhoto}
            handleSelection={handleSelection}
          />
        );
      })}
      {/* </div> */}
    </Row>
  );
};

export default PropertyList;
