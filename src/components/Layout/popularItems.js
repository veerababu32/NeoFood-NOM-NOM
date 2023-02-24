import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Axios from "axios";
import { addItem, removeItem } from "../../features/AddToCart/cartSlice";
import { images } from "../Constants";
import classes from "./../../App.module.css";

const PopularItems = () => {
  const dispatch = useDispatch();
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    // const check = localStorage.getItem("popular");
    // if (check) {
    //   setPopular(JSON.parse(check));
    // } else {
    //   const response = await Axios.get(
    //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
    //   );
    //   localStorage.setItem("popular", JSON.stringify(response.data.recipes));
    //   setPopular(response.data.recipes);
    // }

    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
    );
    setPopular(response.data.recipes);
    // console.log(response.data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const itemsInCart = useSelector((state) => state.cart.cartItems);

  const renderButton = (item) => {
    let value = 0;
    itemsInCart.forEach((foodItem) => {
      if (foodItem.id === item.id) {
        value = foodItem.cartQuantity;
      }
    });
    return (
      <>
        {value === 0 ? (
          <span className={`${classes["itemQuantityText"]}`}>Add</span>
        ) : (
          <span className={`${classes["itemQuantityText"]}`}>{value}</span>
        )}
      </>
    );
  };
  return (
    <>
      <Row className={classes["popular-items-section"]}>
        <Col xs={12}>
          <h2 className={classes["popular-items-title"]}>Popular items</h2>
          <p className={classes["popular-items-description"]}>
            Most Ordered Items
          </p>
        </Col>
        <>
          {popular?.map((item) => (
            <Col lg={4} md={6} sm={6} xs={12} className={"g-4"} key={item.id}>
              <div className={`${classes.card} card`}>
                <div className={classes["popular-items-card-img-container"]}>
                  <img
                    className="card-img-top"
                    src={item?.image || images.InvalidImg}
                    alt={item.title}
                  />
                </div>
                <div
                  className={`${classes["popular-items-card-body"]} card-body d-flex flex-column justify-content-between p-3`}
                >
                  <h5 className={classes["popular-items-card-title"]}>
                    {item.title}
                  </h5>
                  <div
                    className={classes["popular-items-card-inside-container"]}
                  >
                    <p
                      className={`${classes["popular-items-card-text"]} pb-2 pb-xl-0 pb-xxl-0`}
                    >
                      {" "}
                      price: ${item.pricePerServing}{" "}
                    </p>
                    <div
                      className="btn-group w-50"
                      role="group"
                      aria-label="..."
                    >
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </button>
                      <button type="button" className="btn btn-light">
                        {renderButton(item)}
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </>
      </Row>
    </>
  );
};

export default PopularItems;
