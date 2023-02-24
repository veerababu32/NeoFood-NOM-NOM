import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Axios from "axios";
import { addItem, removeItem } from "../../features/AddToCart/cartSlice";
import classes from "./../../App.module.css";

const TodaysHotPick = () => {
  const dispatch = useDispatch();
  const [foodItem, setFoodItem] = useState([]);

  const randomTrendingFood = async () => {
    const response = await Axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setFoodItem(response.data.recipes);
  };

  useEffect(() => {
    randomTrendingFood();
  }, []);

  const handleAddToCart = (addedItem) => {
    dispatch(addItem(addedItem));
  };

  const handleRemoveFromCart = (removedItem) => {
    dispatch(removeItem(removedItem));
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
          <span className="text-dark itemQuantityText">Add</span>
        ) : (
          <span className="text-dark itemQuantityText">{value}</span>
        )}
      </>
    );
  };

  return (
    <>
      <Row className={classes["today-items-section"]}>
        <Col xs={12}>
          <h2 className={classes["today-items-title"]}>Today's Hot Pick</h2>
        </Col>
        {foodItem.length === 0 ? (
          ""
        ) : (
          <Col xs={12}>
            <div className="d-flex flex-column flex-md-row">
              <div className={classes["today-items-img-container"]}>
                <img src={foodItem[0].image} alt={foodItem[0].title} />
              </div>

              <div className={classes["today-items-hot-picks-container"]}>
                <div className="d-flex align-items-start align-items-sm-center align-items-md-start flex-column flex-sm-row flex-md-column mb-2 mb-md-0">
                  <h3 className="m-0 mb-2 mb-md-0">{foodItem[0].title}</h3>
                  <p className="m-0 ms-sm-3 mb-2 mb-md-0 ms-md-0">
                    ${foodItem[0].pricePerServing}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span
                    className={`${classes["today-items-btn-text"]} d-inline-block me-3`}
                  >
                    Select Quantity:
                  </span>
                  <div className="btn-group" role="group" aria-label="...">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleRemoveFromCart(foodItem[0])}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-light">
                      {renderButton(foodItem[0])}
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(foodItem[0])}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};

export default TodaysHotPick;
