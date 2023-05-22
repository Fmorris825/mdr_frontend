//util imports//
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_HOST } from "../../urlHost";
import Database from "../../Database";

//component imports//
import Banner from "./HomePageComponents/Banner/Banner";
import PropertySwiper from "../../components/PropertySwiper/PropertySwiper";
import ServicesRow from "./HomePageComponents/ServicesRow/ServicesRow";

//CSS imports//
import "./HomePage.css";
import Footer from "../../components/Footer/Footer";

const HomePage = ({
  selectedProperty,
  selectedPhoto,
  setSelectedPhoto,
  setSelectedProperty,
}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get(`${URL_HOST}/api/cars/`, {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  useEffect(() => {
    getProperties();
  }, []);

  async function getProperties() {
    // try {
    //   const response = await axios.get(`${URL_HOST}/api/properties/`);
    //   setProperties(response.data);
    // } catch (error) {
    //   console.log(error.response.data);
    // }
    setProperties(Database.properties);
  }

  function handleSelection(property) {
    setSelectedProperty(property);
    setSelectedPhoto(false);
    navigate("/properties");
  }
  console.log(properties);
  return (
    <>
      <Banner />
      <div className="row1">
        <PropertySwiper
          properties={properties}
          handleSelection={handleSelection}
        />
      </div>
      <div className="row">
        <ServicesRow />
      </div>
    </>
  );
};

export default HomePage;
