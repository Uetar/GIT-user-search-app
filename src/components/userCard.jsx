import React from "react";
import styles from "../styles/userCard.module.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";
function UserCard(props) {
  const { data } = props;
  return (
    <div className={styles.userCard}>
      {/* <div className={styles.userCardUser}> */}
      <div className={styles.userCardUserAvatarWraper}>
        <img
          className={styles.userCardUserAvatar}
          src={data.avatar_url}
          alt=""
        />
        <div className={styles.userCardUserInfo}>
          <h2 className={styles.userCardTitle}>{data.name}</h2>
          <h3 className={styles.userInfoUsername}>{data.login}</h3>
          <p className={styles.userInfoJoinedDate}>{data.created_at}</p>
        </div>
      </div>

      <div className={styles.userCardBio}>
        <p>{data.bio || "This profile has no bio"}</p>
      </div>

      <div className={styles.userCardStats}>
        <div className={styles.userRepos}>
          <p className={styles.userStatTitle}>Repos</p>
          <p className={styles.userStatNumber}>{data.public_repos}</p>
        </div>
        <div className={styles.userFollowers}>
          <p className={styles.userStatTitle}>Followers</p>
          <p className={styles.userStatNumber}>{data.followers}</p>
        </div>
        <div className={styles.userFollowing}>
          <p className={styles.userStatTitle}>Following</p>
          <p className={styles.userStatNumber}>{data.following}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.userCardContact}>
          <li>
            <LocationOnIcon />
            {data.location || "not available"}
          </li>
          <li>
            <LanguageIcon />
            {data.blog || "not available"}
          </li>
          <li>
            <TwitterIcon />
            {data.twitter || "not available"}
          </li>
          <li>
            <BusinessIcon />
            {data.company || "not available"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
