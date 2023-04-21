import picture from "./banner1.png";
import "./Banner.css";
import { Image } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Image className="banner" src={picture} alt="Dallas Skyline" />
      {/* <h1 className="text_one">Morris Delta Realty</h1>
      <h3 className="text_two">
        The Best Real Estate Experience in the Dallas Area
      </h3>
      <h3 className="text_three">
        For All Your Commercial & Residential Real Estate Needs
      </h3> */}
    </div>
  );
};

export default Banner;
