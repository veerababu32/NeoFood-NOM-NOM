import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BiBadgeCheck } from "react-icons/bi";
import {
  addItem,
  removeItem,
  clearCart,
} from "../../features/AddToCart/cartSlice";
import NavigationBar from "./NavgationBar";
import classes from "../../App.module.css";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cItems, setCItems] = useState([]);
  const [success, setToSuccess] = useState(false);

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartAmount = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    setCItems(cartProducts);
  }, [cart]);

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const clrCart = () => {
    dispatch(clearCart());
  };

  const backToCart = () => {
    navigate("/home");
  };

  const orderPlaced = () => {
    if (cItems.length === 0) {
    } else {
      setToSuccess(true);
      dispatch(clearCart());
    }
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
          <span className={classes["itemQuantityText"]}>Add</span>
        ) : (
          <span className={classes["itemQuantityText"]}>{value}</span>
        )}
      </>
    );
  };

  return (
    <>
      <NavigationBar />
      {success ? (
        <div className={classes["cart-success"]}>
          <div>
            <BiBadgeCheck className="text-success mb-2 fs-1 bx-burst" />
          </div>
          <h4>Your Order Is Placed!</h4>
        </div>
      ) : (
        <>
          <div style={{ height: "80px" }}></div>
          <Container fluid>
            <Row>
              {cItems.length === 0 ? (
                <div className="text-center">
                  <p>YOU HAVE NO ITEMS IN YOUR CART!</p>
                  <Button onClick={backToCart}>Feeling Too Lite</Button>
                </div>
              ) : (
                cItems.map((item) => (
                  <Col key={item.id}>
                    <div className={classes["cart-card"]}>
                      <div className={classes["cart-items"]}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className={classes["cart-items"]}>
                        <p>{item.title}</p>
                      </div>
                      <div className={classes["cart-items"]}>
                        <span>Quantity: {item.cartQuantity}</span>
                      </div>
                      <div className={classes["cart-items"]}>
                        price: ${item.pricePerServing}
                      </div>
                      <div
                        className={`${classes["cart-items"]} d-flex justify-content-center`}
                      >
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
                      <div className={classes["cart-items"]}>
                        ${(item.cartQuantity * item.pricePerServing).toFixed(2)}
                      </div>
                    </div>
                  </Col>
                ))
              )}
            </Row>
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-end mb-4">
                  <div>
                    <h6 className="mb-2">Total Amount: $ {cartAmount}</h6>
                    <Button
                      className="text-end me-3"
                      variant="danger"
                      style={{ cursor: "pointer" }}
                      onClick={clrCart}
                    >
                      Clear Cart
                    </Button>
                    <Button
                      className="text-end"
                      style={{ cursor: "pointer" }}
                      onClick={orderPlaced}
                    >
                      Proceed To Checkout
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Cart;
