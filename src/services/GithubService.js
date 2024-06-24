import axios from "axios";

const BASE_URL = "http://localhost:3001/api/github";

export const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/repos/DemoGithubOrganization`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
};

export const fetchPullRequests = async (repoName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pulls/DemoGithubOrganization/${repoName}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    throw error;
  }
};

export const fetchAnalyzedPullRequests = async (repoName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/analyze/DemoGithubOrganization/${repoName}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching pull requests:", error);
    throw error;
  }
};
