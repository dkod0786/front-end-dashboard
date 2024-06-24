import "./App.css";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderContainer from "./components/header/HeaderContainer";
import MainScreen from "./screens/MainScreen";
import { useEffect, useState } from "react";
import {
  fetchAnalyzedPullRequests,
  fetchGitHubRepos,
  fetchPullRequests,
} from "./services/GithubService";
import { convertReposToOptions } from "./utils/ConvertDataUtils";

function App() {
  const [repos, setRepos] = useState(null);
  const [pullRequests, setPullRequests] = useState(null);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [loadingPullRequests, setLoadingPullRequests] = useState(false);

  const handleRepoSelect = async (repoId) => {
    setLoadingPullRequests(true);
    try {
      const selectedRepo = repos.find((repo) => repo.value === repoId);
      const data = await fetchAnalyzedPullRequests(selectedRepo.label);
      setPullRequests(data);
    } catch (error) {
      console.error("Failed to fetch pull requests:", error);
    } finally {
      setLoadingPullRequests(false);
    }
  };

  useEffect(() => {
    const getRepos = async () => {
      setLoadingRepos(true);
      try {
        const data = await fetchGitHubRepos();
        const options = convertReposToOptions(data);
        setRepos(options);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoadingRepos(false);
      }
    };

    getRepos();
  }, []);

  return (
    <Layout className="layout">
      <Header className="header">
        <HeaderContainer
          loadingRepos={loadingRepos}
          options={repos}
          handleRepoSelect={handleRepoSelect}
        />
      </Header>
      <Content className="content">
        <MainScreen
          loadingRepos={loadingRepos}
          loadingPullRequests={loadingPullRequests}
          repos={repos}
          pullRequests={pullRequests}
        />
      </Content>
      <Footer className="footer"></Footer>
    </Layout>
  );
}

export default App;
