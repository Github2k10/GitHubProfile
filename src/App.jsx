import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Loading from "./components/Loading";
import Main from "./components/Main";
import "./App.scss";

function App() {
  const [userName, setUserName] = useState("Github2k10");
  const [userData, setUserData] = useState();

  const token = "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";
  const url = `https://api.github.com/users/${userName || "Github2k10"}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        const user = {
          username: data.login || "Not Found",
          name: data.name || "Not Found",
          bio: data.bio || "Not Found",
          blog: data.blog || "Not Found",
          public_repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
          avatar_url: data.avatar_url || null,
          repos_url: data.repos_url || null,
          location: data.location || "Not Found",
        };
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userName, userData]);

  return (
    <>
      <Header setUserName={setUserName} />
      {userData ? <Main user={userData} /> : <Loading />}
    </>
  );
}

export default App;
