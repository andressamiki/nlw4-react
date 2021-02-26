import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andressamiki.png" alt="Andressa Miki" />
      <div>
        <strong>Andressa Miki</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
        </p>
      </div>
    </div>
  );
}