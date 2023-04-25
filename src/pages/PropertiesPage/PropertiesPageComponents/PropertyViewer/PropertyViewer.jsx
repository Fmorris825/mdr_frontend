import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PropertyViewer.css";
import ImageCardViewer from "../ImageCardViewer/ImageCardViewer";
import LargePhoto from "../LargePhoto/LargePhoto";
import { Col, Container } from "react-bootstrap";
import EditRender from "../../../../components/CRUDCompoents/EditRender/EditRender";
import Database from "../../../../Database";
import { URL_HOST } from "../../../../urlHost";
const PropertyViewer = ({
  selectedProperty,
  selectedPhoto,
  setSelectedPhoto,
  getProperties,
  setScrollPhotoSelected,
  scrollPhotoSelected,
}) => {
  const [photos, setPhotos] = useState(false);

  useEffect(() => {
    getPhotosForProperties();
  }, [selectedProperty]);

  // useEffect(() => {
  //   setPhotos(Database.photos);
  // }, []);

  async function getPhotosForProperties() {
    const response = await axios.get(
      `${URL_HOST}/api/properties/${selectedProperty.id}/photos/`
    );
    setPhotos(response.data);
  }
  console.log(selectedPhoto);
  return photos ? (
    <div className="d-flex align-items-center propertyViewer">
      <div className="d-flex flex-column m-1 thumbnailContainer">
        {photos.map((photo, index) => {
          return (
            <ImageCardViewer
              photo={photo}
              selectedPhoto={selectedPhoto}
              setSelectedPhoto={setSelectedPhoto}
              setScrollPhotoSelected={setScrollPhotoSelected}
              selectedProperty={selectedProperty}
            />
          );
        })}
      </div>
      <LargePhoto
        selectedPhoto={selectedPhoto}
        show={scrollPhotoSelected}
        selectedProperty={selectedProperty}
      />
      <div className="propertyCardInfo">
        <div className="d-flex">
          <h4>{selectedProperty.address}</h4>
        </div>
        <div className="d-flex">
          <h5>${selectedProperty.listing_price}</h5>
        </div>
        <div className="d-flex">
          <h4> {selectedProperty.city}</h4>
        </div>
        <p>{selectedProperty.description}</p>
        <div className="card-bottom-liner">
          <b>Ref #:</b> {selectedProperty.id} <strong>|</strong>
          <b>Type:</b> {selectedProperty.type} <strong>|</strong> <b>Beds:</b>{" "}
          {selectedProperty.beds} <strong>|</strong> <b>Baths:</b>
          {selectedProperty.baths}
        </div>

        <EditRender
          selectedProperty={selectedProperty}
          getProperties={getProperties}
          selectedPhoto={selectedPhoto}
          // getPhotosForProperties={getPhotosForProperties}
        />
      </div>
    </div>
  ) : null;
};

export default PropertyViewer;
