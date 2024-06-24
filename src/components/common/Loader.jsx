import { Spin } from "antd";
import React from "react";

const Loader = ({ content }) => {
  return <Spin tip={`${content}`} size="large" />;
};

export default Loader;
