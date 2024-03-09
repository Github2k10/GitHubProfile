import React, { useState, useEffect } from "react";

import "./Repo.scss";
import Loading from "./Loading";
import star from "../assets/Star.svg";
import fork from "../assets/Nesting.svg";

function differenceInDays(date2) {
  const date1 = new Date();
  const date1InMs = date1.getTime();
  const date2InMs = date2.getTime();

  const differenceInMs = Math.abs(date2InMs - date1InMs);
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

const Repo = ({ repos_url }) => {
  const [repo, setRepo] = useState({});
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(repos_url);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();

        let repoData = data.map((item) => {
          return {
            name: item.name,
            description: item.description,
            forks: item.forks,
            watchers: item.watchers,
            updated_at: differenceInDays(new Date(item.updated_at)),
          };
        });

        repoData.sort((a, b) => b.watchers - a.watchers);

        if (!showMore) repoData = repoData.slice(0, 4);
        setRepo(repoData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [showMore, repos_url]);

  return (
    <>
      <div className="repo">
        {repo[0] ? (
          <>
            <ul className="repo_list">
              {repo.map((item) => (
                <li className="repo_item" key={item.name}>
                  <p className="repo_name">{item.name}</p>
                  <p className="repo_desc">{item.description}</p>
                  <div className="repo_stat">
                    <p className="repo_forks">
                      <img src={fork} alt="" /> {item.forks}
                    </p>
                    <p className="repo_watch">
                      <img src={star} alt="" />
                      {item.watchers}
                    </p>
                    <p className="repo_updated">
                      updated {item.updated_at} days ago
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <p className="showMore" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "View More repositories"}
              </p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Repo;
