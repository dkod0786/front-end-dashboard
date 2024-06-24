import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../../assets/logos/916659.jpg";

const HeaderContainer = ({ loadingRepos, options, handleRepoSelect }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <SearchBar
        loadingRepos={loadingRepos}
        options={options}
        handleRepoSelect={handleRepoSelect}
      />
    </div>
  );
};

export default HeaderContainer;
