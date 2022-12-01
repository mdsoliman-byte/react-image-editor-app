import React from "react";
import "./style/main.scss";
const Main = () => {
  const filterElement = [
    {
      name: "Brightness",
    },
    {
      name: "Grayscale",
    },
    {
      name: "Sepia",
    },
    {
      name: "Saturate",
    },
    {
      name: "Contrast",
    },
    {
      name: "HueRotate",
    },
  ];

  return (
    <div className="image__editor">
      <div className="card">
        <div className="card__header">
          <h2>_______Image Editor _______</h2>
        </div>
        <div className="card__body">
          <div className="sidebar">
            <div className="side__body">
              <div className="filter__section">
                <span>Filters</span>
                <div className="filter__key">
                  {filterElement.map((element, index) => (
                    <button key={index}>{element.name}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
