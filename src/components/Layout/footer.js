import { Link } from "react-router-dom";
import { data, images } from "../Constants/index";
import Dropdown from "../UI/Dropdown/index";
import classes from "./../../App.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-nav-section"]}>
        <div className={classes["footer-nav-left-section"]}>
          <img
            src={images.FooterFoodIcon}
            alt="FoodIcon"
            className={classes["footer-nav-img"]}
          />
          <h2 className={classes["footer-nav-title"]}> NOM - NOM </h2>
        </div>
        <div className="d-flex">
          <Dropdown country={data.countries} />
          <Dropdown country={data.languages} />
        </div>
      </div>
      <div className={classes["footer-bottom-section"]}>
        <div className={classes["footer-links-section"]}>
          <h6 className={classes["footer-links-title"]}> ABOUT NOM - NOM </h6>
          <ul className={classes["footer-links-unordered-list"]}>
            {data.aboutNomNomUl.map((option) => (
              <li
                className={classes["footer-list-item-link"]}
                key={option.value}
              >
                <Link to="/home">{option.value}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["footer-links-section"]}>
          <h6 className={classes["footer-links-title"]}> NOMVERSE </h6>
          <ul className={classes["footer-links-unordered-list"]}>
            {data.nomVerseUl.map((option) => (
              <li
                className={classes["footer-list-item-link"]}
                key={option.value}
              >
                <Link to="/home">{option.value}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["footer-links-section"]}>
          <div className={classes["footer-links-restaurants"]}>
            <h6 className={classes["footer-links-title"]}> FOR RESTURANTS </h6>
            <ul className={classes["footer-links-unordered-list"]}>
              {data.forRestaurantsUl.map((option) => (
                <li
                  className={classes["footer-list-item-link"]}
                  key={option.value}
                >
                  <Link to="/home">{option.value}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes["footer-links-enterprises"]}>
            <h6 className={classes["footer-links-title"]}> FOR ENTERPRISES </h6>
            <ul className={classes["footer-links-unordered-list"]}>
              <li className={classes["footer-list-item-link"]}>
                <Link to="/home"> NOM - NOM For Work </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["footer-links-section"]}>
          <h6 className={classes["footer-links-title"]}> LEARN MORE </h6>
          <ul className={classes["footer-links-unordered-list"]}>
            {data.learnMoreUl.map((option) => (
              <li
                className={classes["footer-list-item-link"]}
                key={option.value}
              >
                <Link to="/home">{option.value}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["footer-links-section"]}>
          <h6 className={classes["footer-links-title"]}> SOCIAL LINKS </h6>
          <div className={classes["footer-social-links-section"]}>
            {data.socialIcons.map((icon) => (
              <Link
                to="/home"
                className={classes["footer-social-link"]}
                key={icon.img}
              >
                <icon.img />
              </Link>
            ))}
          </div>
          <div className={classes["footer-social-app-store"]}>
            <Link
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.AppStore} alt="AppStore" />
            </Link>
          </div>
          <div className={classes["footer-social-app-store"]}>
            <Link
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images.GooglePlay} alt="GooglePlay" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
