import { GithubOutlined, PullRequestOutlined } from "@ant-design/icons";
import { Card, Collapse, Descriptions, Flex, Progress, Tag } from "antd";
import React from "react";

const PullRequestsCard = ({ pullRequests }) => {
  const { Panel } = Collapse;

  const getStatusTag = (state) => {
    switch (state) {
      case "open":
        return <Tag color="green">Open</Tag>;
      case "closed":
        return <Tag color="red">Closed</Tag>;
      case "merged":
        return <Tag color="purple">Merged</Tag>;
      default:
        return <Tag>{state}</Tag>;
    }
  };

  const renderProgress = (label, value) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Progress
        type="dashboard"
        percent={value}
        size="small"
        strokeWidth={10}
      />
      <p>{label}</p>
    </div>
  );

  return (
    <Card
      title={
        <span>
          <GithubOutlined style={{ marginRight: 8 }} />
          Pull Requests
        </span>
      }
    >
      {pullRequests.map((pr) => (
        <Card
          key={pr.id}
          type="inner"
          title={
            <span>
              <PullRequestOutlined style={{ marginRight: 8 }} />
              {`${pr.title} #${pr.number}`}
            </span>
          }
          extra={
            <a href={pr.html_url} target="_blank" rel="noopener noreferrer">
              More
            </a>
          }
          style={{ marginTop: 16 }}
        >
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Status">
              {getStatusTag(pr.state)}
            </Descriptions.Item>
            <Descriptions.Item label="Author">
              {pr.user.login}
            </Descriptions.Item>
            <Descriptions.Item label="Created at">
              {new Date(pr.created_at).toLocaleDateString()}
            </Descriptions.Item>
            {/* Add other important PR details here */}
          </Descriptions>
          <div className="pr-score-section" style={{ marginTop: 16 }}>
            {renderProgress(
              "Code Structure and Readability",
              pr?.pr_analysis?.codeStructureAndReadability
            )}
            {renderProgress(
              "Maintainability",
              pr?.pr_analysis?.maintainability
            )}
            {renderProgress(
              "Error Handling and Robustness",
              pr?.pr_analysis?.errorHandlingAndRobustness
            )}
            {renderProgress("Best Practices", pr?.pr_analysis?.bestPractices)}
            {renderProgress(
              "Overall Code Quality",
              pr?.pr_analysis?.overallCodeQuality
            )}
          </div>
          <Collapse style={{ marginTop: 16 }}>
            <Panel header="Analysis Details" key="1">
              <p>
                <strong>Code Structure and Readability:</strong>{" "}
                {pr?.pr_analysis?.explanation?.codeStructureAndReadability}
              </p>
              <p>
                <strong>Maintainability:</strong>{" "}
                {pr?.pr_analysis?.explanation?.maintainability}
              </p>
              <p>
                <strong>Error Handling and Robustness:</strong>{" "}
                {pr?.pr_analysis?.explanation?.errorHandlingAndRobustness}
              </p>
              <p>
                <strong>Best Practices:</strong>{" "}
                {pr?.pr_analysis?.explanation?.bestPractices}
              </p>
            </Panel>
          </Collapse>
        </Card>
      ))}
    </Card>
  );
};
export default PullRequestsCard;
