import React from "react";
import { Image } from "react-bootstrap";
import "./LargePhoto.css";

const LargePhoto = ({ selectedPhoto, show, selectedProperty }) => {
  console.log(show);
  console.log(selectedPhoto);
  return show ? (
    <div>
      <Image className="largePhoto" src={show.photo_url} />
    </div>
  ) : (
    <div>
      <Image className="largePhoto" src={selectedProperty.photo_url} />
    </div>
  );
};

export default LargePhoto;
