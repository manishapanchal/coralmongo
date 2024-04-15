import React from "react";
import { Loader, Backdrop } from "./Style.style";

const ScreenLoader = () => {
  return (
    <Backdrop>
      <Loader />
    </Backdrop>
  );
};

export default ScreenLoader;
