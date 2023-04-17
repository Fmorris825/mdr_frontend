import React from "react";
import { Col } from "react-bootstrap";

const PropertyCard = ({ property, setSelectedProperty, setSelectedPhoto }) => {
  function handleSelection() {
    setSelectedProperty(property);
    setSelectedPhoto(false);
  }

  return (
    <div className="d-flex m-2 propertycards" onClick={handleSelection}>
      <div className="d-flex flex-column">
        <div className="card-bottom-liner">
          <b>{property.address}</b> <strong>|</strong>
          <b>${property.listing_price}</b> <strong>|</strong>{" "}
          <b>{property.city}</b>
        </div>
        <div className="d-flex justify-content-center img-info">
          <img
            className="cardimg"
            src={property.photo_url}
            alt={property.address}
          />
          {/* <Col className="cardinfo">
            <h3 className="cardaddress">{property.address}</h3>
            <h3 className="cardaddress">${property.listing_price}</h3>
            <h3 className="cardaddress">{property.city}</h3>
            <p className="carddesc">{property.description}</p>
          </Col> */}
        </div>
        <div className="card-bottom-liner">
          {/* <b>Ref #:</b> {property.id} <strong>|</strong> */}
          <b>Type:</b> {property.type} <strong>|</strong> <b>Beds:</b>{" "}
          {property.beds} <strong>|</strong> <b>Baths:</b>
          {property.baths}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
