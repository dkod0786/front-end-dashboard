export const convertReposToOptions = (repos) => {
  return repos.map((repo) => ({
    value: repo?.id,
    label: repo?.name,
  }));
};
