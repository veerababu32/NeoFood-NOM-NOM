import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { BiCaretDown } from "react-icons/bi";
import { useRef, useState } from "react";
import images from "../Constants/images";
import classes from "./../../App.module.css";

const Header = () => {
  const cities = ["Mumbai", "Pune", "Hyderabad"];
  const [cityActive, setCityActive] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const searchRef = useRef();
  const navigate = useNavigate();

  const getCity = (city) => {
    setSelectedCity(city);
    setCityActive(false);
  };

  function searchItems(e) {
    e.preventDefault();
    navigate("/search?name=" + searchRef.current.value);
  }

  return (
    <>
      <div className={classes["banner-bg"]}>
        <div className={classes["banner-content"]}>
          <div className="d-flex mb-3">
            <div className="me-3">
              <img
                src={images.HeaderFoodIcon}
                className={classes["header-logo"]}
                alt="header logo"
              />
            </div>
            <h2 className={classes["header-title"]}>
              NOM-<span className={classes["header-sub-title"]}>NOM</span>
            </h2>
          </div>

          <p className={classes["banner-desc"]}>
            Discover the best food & drinks in {selectedCity}
          </p>
          <div className={`${classes["search-container"]} d-flex`}>
            <div className={classes["banner-dropdown-container"]}>
              <div
                onClick={() => setCityActive(!cityActive)}
                id="dropdownEle"
                className={`${classes["banner-dropdown"]} d-flex justify-content-between align-items-center`}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={images.Location}
                    className={classes["location"]}
                    alt="location"
                  />
                  <p className={`${classes["city-name"]} ms-3`}>
                    {selectedCity}
                  </p>
                </div>

                <BiCaretDown />
              </div>

              {cityActive ? (
                <div
                  className={classes["dropdown-content"]}
                  id="dropdownContent"
                >
                  {cities.map((city) => (
                    <div
                      className={`${classes["dropdown-list-item"]} d-flex`}
                      onClick={() => getCity(city)}
                      key={city.id}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <form
              className={`${classes["input-search-container"]} w-100 d-flex`}
              onSubmit={searchItems}
            >
              <div>
                <RiSearchLine className={classes["search-icon"]} />
              </div>
              <div className="w-100">
                <input
                  type="search"
                  className={`${classes["search-input"]} ms-2`}
                  placeholder="Search for restaurant, cuisine or a dish"
                  ref={searchRef}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
