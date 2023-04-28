import Card from "react-bootstrap/Card";
import "../../HomePage.css";
import { CardImg } from "react-bootstrap";

const ServicesCard = ({ title, subtitle, text, href, svg }) => {
  return (
    <Card
      className="text-center m-3 "
      style={{ height: "18rem", width: "16rem" }}
    >
      <Card.Body>
        <CardImg className="svg" src={svg} alt="Bootstrap" />
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        {/* <Card.Link href={href}>Learn More</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;
