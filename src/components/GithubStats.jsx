import React from "react";

import "./GithubStats.scss";

const GithubStats = ({ username }) => {
  const trophy = `https://github-profile-trophy.vercel.app/?username=${username}&&theme=flat&column=5&margin-w=15&margin-h=15`;

  const mostlangUse = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=10&theme=dark`;

  const stats = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark`;

  const streak = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark`;

  if (!username) {
    return null;
  }

  return (
    <>
      <div className="github_stats">
        <div className="github_stats_first">
          <img
            className="trophy"
            src={trophy}
            alt="trophy"
            onError={(event) => {
              event.target.src = "https://default-image-link-goes-here";
              event.onerror = null;
            }}
          />
          <img
            className="mostlang"
            src={mostlangUse}
            alt="most languages used"
            onError={(event) => {
              event.target.src = "https://default-image-link-goes-here";
              event.onerror = null;
            }}
          />
        </div>
        <div className="github_stats_second">
          <img
            className="stats"
            src={stats}
            alt="github stats"
            onError={(event) => {
              event.target.src = "https://default-image-link-goes-here";
              event.onerror = null;
            }}
          />
          <img
            className="streak"
            src={streak}
            alt="github streak"
            onError={(event) => {
              event.target.src = "";
            }}
          />
        </div>
      </div>
    </>
  );
};

export default GithubStats;
