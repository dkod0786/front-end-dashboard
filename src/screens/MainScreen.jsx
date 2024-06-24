import React, { useState } from "react";
import Empty from "../components/common/NoData";
import Loader from "../components/common/Loader";
import NoData from "../components/common/NoData";
import PullRequestsCard from "../components/mainContent/PullRequestsCard";
import { Button } from "antd";
import { SearchOutlined, SendOutlined } from "@ant-design/icons";

const MainScreen = ({
  loadingRepos,
  loadingPullRequests,
  repos,
  pullRequests,
}) => {
  if (loadingRepos) {
    return <Loader content="Repositories are Loading" />;
  }
  if (repos && loadingPullRequests) {
    return <Loader content="Pull Requests are Loading" />;
  }
  if (repos && pullRequests) {
    return (
      <div className="pull-requests-main-content">
        <PullRequestsCard pullRequests={pullRequests} />
        {/* <div className="analyze-content">
          <Button type="primary" icon={<SendOutlined />}>
            Analyze Pull Requests
          </Button>
        </div> */}
      </div>
    );
  }
  return <NoData />;
};

export default MainScreen;
