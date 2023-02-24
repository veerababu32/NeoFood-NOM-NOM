import { Link } from "react-router-dom";
import { images } from "../Constants";
import Navbar from "./NavgationBar/index";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-4 pb-3">
        <img src={images.NotFoundImg} alt="Not-Found" />
        <h2
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "50px",
            marginBottom: "0",
          }}
        >
          Not Found
        </h2>
        <Link to="/home" className="btn btn-primary btn-lg">
          GO Back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
