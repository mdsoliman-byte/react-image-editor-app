import React from "react";
import "./style/main.scss";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoMdUndo, IoMdRedo, IoIosImage } from "react-icons/io";
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
              <div className="filter__slider">
                <div className="label__bar">
                  <label htmlFor="range">Rotate</label>
                  <span>100%</span>
                </div>
                <input type="range" name="" id="" />
              </div>
              <div className="rotate">
                <label htmlFor="">Rotate & Flip</label>
                <div className="icon">
                  <div>
                    {" "}
                    <GrRotateLeft />{" "}
                  </div>
                  <div>
                    {" "}
                    <GrRotateRight />{" "}
                  </div>
                  <div>
                    {" "}
                    <CgMergeVertical />{" "}
                  </div>
                  <div>
                    {" "}
                    <CgMergeHorizontal />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image__section">
            <div className="image">
              <label htmlFor="choose">
                <IoIosImage />
                <span>Choose Image </span>
              </label>
            </div>
            <div className="image_select">
              <button>
                <IoMdUndo />
              </button>
              <button>
                <IoMdRedo />
              </button>
              <button>
                <IoMdRedo />
              </button>
              <button>Crop Image</button>
              <label htmlFor="choose">Choose Image </label>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
