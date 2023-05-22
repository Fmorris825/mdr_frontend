import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SwiperCard = ({ property, handleSelection }) => {
  console.log(property);
  return (
    <Card
      className="swiperCards shadow"
      onClick={(event) => handleSelection(property)}
    >
      <Card.Img className="cardImg" variant="top" src={property.photo_url} />
      <Card.Body>
        <Card.Title>
          ${property.listing_price.toLocaleString("en-US")}
        </Card.Title>
        <Card.Text>{property.address}</Card.Text>
        <Card.Subtitle>{property.description}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default SwiperCard;
