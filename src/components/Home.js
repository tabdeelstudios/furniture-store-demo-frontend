import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import IndividualFurniture from "./IndividualFurniture";
import { fetchFurniture } from "./../redux/furnitureSlice";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const furnitureData = useSelector((state) => state.furniture);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://course-api.com/react-store-products").then((res) => {
      dispatch(fetchFurniture(res.data));
    });
  }, []);
  return (
    <section id="allFurniture">
      {furnitureData.furniture &&
        furnitureData.furniture.map((furniture) => (
          <IndividualFurniture
            id={furniture.id}
            name={furniture.name}
            price={furniture.price}
            imgSrc={furniture.image}
          />
        ))}
    </section>
  );
};

export default Home;
