import styles from './App.module.scss';
import { ReactComponent as LookaLogo } from './images/LookaLogo.svg';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.container} ${styles.navigationBar}`}>
          <LookaLogo className={styles.logo} />
          <div className={styles.navBar}>
            <ul>
              <li>
                <a href="/#">Logo Maker</a>
              </li>
              <li>
                <a href="/#">Brand Kit</a>
              </li>
              <li>
                <a href="/#">How It Works</a>
              </li>
              <li>
                <a href="/#">Reviews</a>
              </li>
              <li>
                <a href="/#">Logo Ideas</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
            </ul>
          </div>
          <div className={styles.headerButtonsContainer}>
            <a href="/#">Log in</a>
            <a href="/#">Sign up</a>
          </div>
        </nav>
      </header>
      <main>main content</main>
      <footer>my footer</footer>
    </>
  );
}
