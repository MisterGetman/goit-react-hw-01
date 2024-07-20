import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.cardInfo}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.textSecondary}>@{tag}</p>
        <p className={css.textSecondary}>{location}</p>
      </div>
      <ul className={css.cardStats}>
        <li className={css.stats}>
          <span className={css.statsText}>Followers</span>
          <span className={clsx(css.statsText, css.bold)}>
            {stats.followers}
          </span>
        </li>
        <li>
          <span className={css.statsText}>Views</span>
          <span className={clsx(css.statsText, css.bold)}>{stats.views}</span>
        </li>
        <li>
          <span className={css.statsText}>Likes</span>
          <span className={clsx(css.statsText, css.bold)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
