import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { data } from "../../Constants";
import classes from "../../../App.module.css";

const Dropdown = (props) => {
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState();
  const [selectedOption, setSelectedOption] = useState(props.country[0]);

  const getCountry = (country) => {
    setSelectedOption(country);
    setActive(false);
  };

  useEffect(() => {
    if (props.country[0].label === "India") {
      setDropdown("true");
    }
  }, [props]);

  return (
    <div className={classes["custom-dropdown"]}>
      <div
        onClick={() => setActive(!active)}
        className={`${classes["dropdown-btn"]} d-flex justify-content-between align-items-center`}
      >
        <div className="d-flex align-items-center">
          <img
            src={selectedOption.img}
            className={`${classes["dropdown-img"]} me-2`}
            alt={selectedOption.label}
          />
          <p className={classes["dropdown-option-name"]}>
            {selectedOption.label}
          </p>
        </div>

        <BiChevronDown />
      </div>

      {active ? (
        <div className={classes["dropdown-content"]} id="dropdownContent">
          {(dropdown ? data.countries : data.languages).map((data) => (
            <div
              className={`${classes["dropdown-list-item"]} d-flex align-items-center`}
              onClick={() => getCountry(data)}
              key={data.label}
            >
              <img
                src={data.img}
                alt={data.label}
                className={`${classes["dropdown-img"]} me-2`}
              />
              <p className={classes["dropdown-option-name"]}>{data.label}</p>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
