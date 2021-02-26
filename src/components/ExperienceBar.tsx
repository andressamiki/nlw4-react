import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <header className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: '50%' }} />
          <span className="current-experience" style={{ left: '50%' }}>
          <span className={styles.currentExperience} style={{ left: '50%' }}>
            300 xp
          </span>
          </span>
        </div>
        <span>{styles.experienceToNextLevel} xp</span>
      </header>
    </header>
  );
}
