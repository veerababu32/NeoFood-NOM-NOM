import data from "../../Constants/data";
import "./index.css";

const ExploreOptions = () => {
  return (
    <div className="explore-container row">
      <h2 className="explore-title">Explore options near me</h2>
      <div className="col-12">
        {data.exploreAccordianOptionsData.map((data) => (
          <div className="accordion" id="accordionExample" key={data.id}>
            <div className="explore-accordion-item">
              <h2 className="accordion-header" id={`heading${data.id}`}>
                <button
                  className="explore-accordion-button accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${data.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${data.id}`}
                >
                  {data.title}
                </button>
              </h2>
              <div
                id={`collapse${data.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${data.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{data.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOptions;
