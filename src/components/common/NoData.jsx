import React from "react";
import { Empty } from "antd";

function NoData() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 200,
      }}
      description={<span>Please Select a Repository</span>}
    />
  );
}

export default NoData;
