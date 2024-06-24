import { Select } from "antd";
import React from "react";

function SearchBar({ loadingRepos, options, handleRepoSelect }) {
  return (
    <Select
      showSearch
      style={{
        width: 400,
      }}
      loading={loadingRepos}
      placeholder="Search to Select the Repository"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      onChange={handleRepoSelect}
      options={options}
    />
  );
}

export default SearchBar;
