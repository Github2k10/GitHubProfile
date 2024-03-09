import React from "react";

import GithubStats from "./GithubStats";
import Loading from "./Loading";
import Repo from "./Repo";
import "./Main.scss";

const Main = ({ user }) => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="profile">
            <div className="profile_img">
              <img src={user.avatar_url} alt="profile_image" />
            </div>
            <div className="profile_stat">
              <div className="profile_item">
                <span className="profile_name">Followers</span>
                <span className="profile_bar"></span>
                <span className="profile_value">{user.followers}</span>
              </div>
              <div className="profile_item">
                <span className="profile_name">Following</span>
                <span className="profile_bar"></span>
                <span className="profile_value">{user.following}</span>
              </div>
              <div className="profile_item">
                <span className="profile_name">Location</span>
                <span className="profile_bar"></span>
                <span className="profile_value">{user.location}</span>
              </div>
            </div>
          </div>

          <p className="heading-1">{user.name}</p>
          <p className="para-1">{user.bio}</p>
          <GithubStats username={user.username} />
          <Repo repos_url={user.repos_url} />
        </div>
      </div>
    </>
  );
};

export default Main;
