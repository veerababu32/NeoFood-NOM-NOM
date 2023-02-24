import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addItem, removeItem } from "../../../features/AddToCart/cartSlice";
import Footer from "../../Layout/footer";
import NavigationBar from "../../Layout/NavgationBar";
import Banner from "../../Layout/banner";
import classes from "../../../App.module.css";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const fetchItems = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchParams.get(
          "name"
        )}&addRecipeInformation=true&apiKey=${
          process.env.REACT_APP_API_KEY
        }&number=12`
      );

      const data = await api.json();

      setItems(data.results);
    };

    fetchItems();
    // eslint-disable-next-line
  }, [searchParams.get("name")]);

  const errorMsg = (
    <h4 className="fw-bold text-center col-12 fs-2 text-danger">
      Please Search Again!
    </h4>
  );
  return (
    <>
      <NavigationBar />
      <Banner />
      <Container>
        <Row className="mt-5 mb-5">
          <>
            {items.length === 0 ? (
              errorMsg
            ) : (
              <>
                <h2 className={`${classes["search-title"]} m-0 col-12`}>
                  Here You Go Your Favourite Foodddd!
                </h2>
                <>
                  {items.map((item) => (
                    <Col lg={4} md={6} sm={6} xs={12} className={"g-4"}>
                      <div className={`${classes.card} card`} key={item.id}>
                        <div className={classes["search-card-img-container"]}>
                          <img
                            className="card-img-top"
                            src={item.image}
                            alt={item.title}
                          />
                        </div>
                        <div
                          className={`${classes["search-card-body"]} card-body d-flex flex-column justify-content-between p-3`}
                        >
                          <h5 className={classes["search-card-title"]}>
                            {item.title}
                          </h5>
                          <div
                            className={classes["search-card-inside-container"]}
                          >
                            <p
                              className={`${classes["search-card-text"]} pb-2 pb-md-0 pb-lg-0 pb-xl-0 pb-xxl-0`}
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
              </>
            )}
          </>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
