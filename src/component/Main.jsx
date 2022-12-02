import React, { useState } from "react";
import "./style/main.scss";
import { GrRotateLeft, GrRotateRight } from "react-icons/gr";
import { CgMergeVertical, CgMergeHorizontal } from "react-icons/cg";
import { IoMdUndo, IoMdRedo, IoIosImage } from "react-icons/io";
import filterElement from "./style/filterElement";
const Main = () => {
  const [maxValue, setMaxValue] = useState({});
  const [state, setState] = useState({
    image: "",
    Brightness: 200,
    Grayscale: 0,
    Sepia: 0,
    Saturate: 100,
    Contrast: 100,
    HueRotate: 0,
    rotate: 0,
    varTical: 1,
    horiZental: 1,
  });
  const imagehandel = (e) => {
    if (e.target.files.length !== 0) {
      const fileReder = new FileReader();
      fileReder.onload = () => {
        setState({
          ...state,
          image: fileReder.result,
        });
      };
      fileReder.readAsDataURL(e.target.files[0]);
    }
  };
  const inputHandel = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state);
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
                    <button
                      onClick={() => setMaxValue(element)}
                      key={index}
                      className={maxValue.name === element.name ? "active" : ""}
                    >
                      {element.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="filter__slider">
                <div className="label__bar">
                  <label htmlFor="range">Rotate</label>
                  <span>{maxValue.maxValue}%</span>
                </div>
                <input
                  type="range"
                  value={state[maxValue.name]}
                  max={maxValue.maxValue}
                  onChange={inputHandel}
                  name={maxValue.name}
                  id=""
                />
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
            <div className="reset">
              <button>Reset</button>
              <button>Save Image </button>
            </div>
          </div>
          <div className="image__section">
            <div className="image">
              {state.image ? (
                <img
                  style={{
                    filter: `brightness(${state.Brightness}%) grayscale(${state.Grayscale}%) sepia(${state.Sepia}%) saturate(${state.Saturate}%) contrast(${state.Contrast}%) hue-rotate(${state.HueRotate}deg)`,
                    transform: `rotate(${state.rotate} deg) scale(${state.varTical}, scale(${state.horiZental}))`,
                  }}
                  src={state.image}
                  alt=""
                />
              ) : (
                <label htmlFor="choose">
                  <IoIosImage />
                  <span>Choose Image </span>
                </label>
              )}
            </div>
            <div className="image_select">
              <button className="unDoButton">
                <IoMdUndo />
              </button>
              <button className="reDeButton">
                <IoMdRedo />
              </button>

              <button className="cropButton">Crop Image</button>
              <label htmlFor="choose">Choose Image </label>
              <input type="file" onChange={imagehandel} id="choose" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
