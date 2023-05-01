//component imports//
import ServicesCard from "../ServicesCard/ServicesCard";
import { Row } from "react-bootstrap";

//svg imports//
import buy from "../ServicesCard/buy.gif";
import finance from "../ServicesCard/finance.gif";
import sale from "../ServicesCard/sale.gif";
import search from "../ServicesCard/search.gif";

const ServicesRow = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div>
        <h3>Services</h3>
      </div>
      <div className="d-flex">
        <ServicesCard
          title="Buy Property"
          // subtitle="Buy Property"
          subtitle="Find and purchase property."
          svg={buy}
        />
        <ServicesCard
          title="Sell"
          // subtitle="Buy Property"
          subtitle="Sell your property."
          svg={sale}
        />
        <ServicesCard
          title="Finance"
          // subtitle="Buy Property"
          subtitle="Get a home loan or investment loan."
          svg={finance}
        />
        <ServicesCard
          title="Inspection"
          // subtitle="Buy Property"
          subtitle="Get an inspection for an owned home or new home."
          svg={search}
        />
      </div>
    </div>
  );
};

export default ServicesRow;
