import { Col, Row } from "react-bootstrap";
import data from "../Constants/data";
import classes from "./../../App.module.css";

const PopularLocalities = () => {
  return (
    <Row className={classes["popular-locality-section"]}>
      <Col xs={12}>
        <h2 className={classes["popular-locality-title"]}>
          Popular localities in and around
          <span className={classes["popular-sub-title"]}> Mumbai</span>
        </h2>
      </Col>
      <>
        {data.localitiesData.map((locality) => (
          <Col
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className="mb-3 border-0"
            key={locality.id}
          >
            <div className="accordion" id="accordionExample">
              <div
                className={classes["popular-locality-accordion-item"]}
                key={locality.id}
              >
                <h2 className="accordion-header" id={`heading${locality.id}`}>
                  <button
                    className={`${classes["popular-locality-accordion-btn"]} accordion-button collapsed`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${locality.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${locality.id}`}
                  >
                    <p className={classes["popular-locality-name"]}>
                      {locality.city}
                      <br />
                      <span className={classes["popular-locality-places"]}>
                        {locality.num} places
                      </span>
                    </p>
                  </button>
                </h2>
                <div
                  id={`collapse${locality.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${locality.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{locality.description}</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
        <Col className="mb-3">
          <div className="accordion" id="accordionExample">
            <div className={classes["popular-locality-accordion-item"]}>
              <h2 className="accordion-header" id="headingNine">
                <button
                  className={`${classes["popular-locality-accordion-btn"]} ${classes["popular-locality-see-btn"]} accordion-button collapsed`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  See More
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  ad neque exercitationem earum accusantium cupiditate.
                </div>
              </div>
            </div>
          </div>
        </Col>
      </>
    </Row>
  );
};

export default PopularLocalities;
