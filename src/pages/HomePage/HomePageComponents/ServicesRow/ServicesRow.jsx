//component imports//
import ServicesCard from "../ServicesCard/ServicesCard";

//svg imports//
import house from "../ServicesCard/house-heart.svg";
import cash from "../ServicesCard/cash.svg";
import bank from "../ServicesCard/bank.svg";
import search from "../ServicesCard/search.svg";

const ServicesRow = () => {
  return (
    <div className="d-flex justify-content-center">
      <ServicesCard
        title="Buy Property"
        // subtitle="Buy Property"
        text="Find and purchase property."
        svg={house}
      />
      <ServicesCard
        title="Sell"
        // subtitle="Buy Property"
        text="Sell your property."
        svg={cash}
      />
      <ServicesCard
        title="Property Loan"
        // subtitle="Buy Property"
        text="Get a home loan or investment loan."
        svg={bank}
      />
      <ServicesCard
        title="Inspect Property"
        // subtitle="Buy Property"
        text="Get an inspection for an owned home or new home."
        svg={search}
      />
    </div>
  );
};

export default ServicesRow;
