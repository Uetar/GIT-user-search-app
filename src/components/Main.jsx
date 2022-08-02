import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";

// const dummyData = {
//   login: "Uetar",
//   id: 107671314,
//   node_id: "U_kgDOBmrvEg",
//   avatar_url: "https://avatars.githubusercontent.com/u/107671314?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/Uetar",
//   html_url: "https://github.com/Uetar",
//   followers_url: "https://api.github.com/users/Uetar/followers",
//   following_url: "https://api.github.com/users/Uetar/following{/other_user}",
//   gists_url: "https://api.github.com/users/Uetar/gists{/gist_id}",
//   starred_url: "https://api.github.com/users/Uetar/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/Uetar/subscriptions",
//   organizations_url: "https://api.github.com/users/Uetar/orgs",
//   repos_url: "https://api.github.com/users/Uetar/repos",
//   events_url: "https://api.github.com/users/Uetar/events{/privacy}",
//   received_events_url: "https://api.github.com/users/Uetar/received_events",
//   type: "User",
//   site_admin: false,
//   name: "Utkarsh Etar",
//   company: "Remotestate",
//   blog: "",
//   location: "Noida",
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 2,
//   public_gists: 0,
//   followers: 0,
//   following: 0,
//   created_at: "2022-06-17T06:49:39Z",
//   updated_at: "2022-07-08T07:30:34Z",
// };

function Main(props) {
  const [userData, setUserData] = useState();
  console.log(userData);
  return (
    <main>
      <SearchBar setUserData={setUserData} userData={userData} />
      {/* <ListItem  /> */}
      
    </main>
  );
}

export default Main;
