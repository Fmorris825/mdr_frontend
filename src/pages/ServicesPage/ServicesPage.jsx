import Card from "react-bootstrap/Card";
import svg from "./excavator.gif";

import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center back">
      <Card style={{ width: "30rem" }} className="m-3">
        <Card.Img variant="top" src={svg} className="servicesSvg" />
        <Card.Body>
          <Card.Title>Page Under Construction</Card.Title>
          <Card.Text>
            The Services Page is temporarily unavailble. It will be back up
            shortly.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesPage;
