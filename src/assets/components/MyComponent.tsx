import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./MyComponent.css";
const MyComponent = () => {
  return (
    <Carousel className="main">
      <div className="box">
        <img src="images/placement1.jpg" width="200px" height="200px" />
      </div>
      <div className="box">
        <img src="images/placement2.jpg" width="200px" height="200px" />
      </div>
      <div className="box">
        <img src="images/offer.jpg" width="200px" height="200px" />
      </div>
    </Carousel>
  );
};

export default MyComponent;
