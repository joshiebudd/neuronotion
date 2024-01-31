import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CrossIcon from "../Icons/CrossIcon";

const ImageViewer = ({ src, onClose }) => {
  useEffect(() => {
    document.getElementsByClassName(
      "react-transform-wrapper"
    )[0].style.height = `${innerHeight}px`;
    document.getElementsByClassName(
      "react-transform-wrapper"
    )[0].style.width = `100%`;
  });
  return (
    <>
      <div
        className="fixed left-0 top-0 right-0 bottom-0"
        style={{ backgroundColor: "#00000066", zIndex: 10 }}
      >
        <div
          onClick={onClose}
          className="fixed right-0 top-0 mt-5 mr-5 bg-white  rounded-full p-1 cursor-pointer opacity-90 hover:opacity-100"
          style={{ zIndex: 11 }}
        >
          <CrossIcon color="black" />
        </div>
        <div>
          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <TransformComponent>
                  <div
                    className="flex justify-center"
                    style={{ width: "100vw" }}
                  >
                    <img src={src} alt="test" />
                  </div>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
