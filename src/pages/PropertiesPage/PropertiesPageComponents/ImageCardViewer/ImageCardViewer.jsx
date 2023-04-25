import React from "react";
import { Image } from "react-bootstrap";

const ImageCardViewer = ({
  photo,
  setSelectedPhoto,
  setScrollPhotoSelected,
  selectedProperty,
}) => {
  function handleSelection() {
    // setSelectedPhoto(selectedProperty.photo_url);
    setScrollPhotoSelected(photo);
  }
  return (
    <Image
      className="thumbnails"
      thumbnail={true}
      src={photo.photo_url}
      alt="Property Photo"
      onClick={handleSelection}
    />
  );
};

export default ImageCardViewer;
