import Card from "react-bootstrap/Card";
import "../../HomePage.css";
import { CardImg } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServicesCard = ({ title, subtitle, text, href, svg }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="text-center m-3 servicesCard grow"
      style={{ height: "24rem", width: "20rem" }}
      onClick={(event) => navigate("/services")}
    >
      <Card.Body>
        <CardImg className="svg" src={svg} alt="Bootstrap" />
        <Card.Title className="cardText">{title}</Card.Title>
        <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        {/* <Card.Link href={href}>Learn More</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;
