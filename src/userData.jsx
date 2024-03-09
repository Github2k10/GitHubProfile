import { useEffect } from "react";

export function getUserData(username) {

  useEffect(() => {
    try {
      const userdata = fetch(url, {
        headers: {
          Authorization: token,
        },
      }).then((response) => response.json());

      // console.log(userdata);

      return {
        name: userdata.name || "Not Found",
        bio: userdata.bio || "Not Found",
        blog: userdata.blog || "Not Found",
        public_repos: userdata.public_repos || 0,
        followers: userdata.followers || 0,
        following: userdata.following || 0,
        avatar_url: userdata.avatar_url || null,
        repos_url: userdata.repos_url || null,
        location: userdata.location || "Not Found",
      };
    } catch {
      console.log(error);
      return {};
    }
  }, []);
}
