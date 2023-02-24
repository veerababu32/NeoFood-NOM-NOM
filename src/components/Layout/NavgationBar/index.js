import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../../features/AddToCart/cartSlice";
import { authActions } from "../../../features/AddToCart/authSlice";
import "./index.css";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [navbarActive, setNavbarActive] = useState(false);
  const orderQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <Navbar expand="lg" fixed="top" className={navbarActive ? "active" : ""}>
        <Container fluid>
          <Navbar.Brand href="/home">NeoFood</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                NeoFood
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {authState && authState.isLoggedIn ? (
                <Nav className="navbar-alignment flex-grow-1 pe-3">
                  <div>
                    <Nav.Link as={Link} to="/home" className="navbar-brandname">
                      NeoFood
                    </Nav.Link>
                  </div>
                  <div className="d-flex flex-lg-row flex-column">
                    {authState && authState.isLoggedIn ? (
                      <>
                        <Nav.Link as={Link} to="/home">
                          Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/menu">
                          Menu
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart">
                          Cart
                          <sup>
                            <span className="rounded-circle badge bg-danger">
                              {orderQuantity}
                            </span>
                          </sup>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={logoutHandler}>
                          Logout
                        </Nav.Link>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Nav>
              ) : (
                <Nav className="login-alignment flex-grow-1 pe-3">
                  {authState && authState.isLoggedIn ? (
                    ""
                  ) : (
                    <>
                      <Nav.Link
                        href="/"
                        className="login-alignment align-self-end"
                      >
                        Login
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
