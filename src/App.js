import styles from './App.module.scss';
import { ReactComponent as LookaLogo } from './images/LookaLogo.svg';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigationBar}>
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
          <div className={styles.navButtons}>
            <a href="/#">Log in</a>
            <a href="/#">Sign up</a>
          </div>
        </nav>
      </header>
      <main>
        <section className={styles.main}>
          <div>
            <h1 className={styles.mainTitle}>Make a logo with Looka</h1>
            <p className={styles.mainParagraph}>
              Looka Logo Maker combines your logo design preferences with
              Artificial Intelligence to help you create a custom logo you'll
              love. All it takes is a few clicks and five minutes.
            </p>
          </div>
          <form>
            <input
              className={styles.mainInputBox}
              defaultValue="Enter your company name"
            />
            <button className={styles.mainButton}>Let's make a logo!</button>
          </form>
        </section>
        <section className={styles.layoutSection}>
          <img
            className={styles.layoutImg}
            src="https://cdn.logojoy.com/wp-content/uploads/20201123121721/Surge-Select-Still.png"
            loading="eager"
            alt="Surge Select Still"
          />
          <div className={styles.layoutContent}>
            <h2 className={styles.h2}>
              <span className={styles.span}>01.</span>
              Our logo maker is easy
            </h2>
            <p className={styles.layoutParagraph}>
              Start by entering your company name and industry, then select the
              perfect logo styles, colors, and symbols that you like the best.
              Looka Logo Maker will use these as inspiration and start to
              generate custom logo designs.
            </p>
          </div>
        </section>
        <section className={styles.layoutSection}>
          <div className={styles.layoutContent}>
            <h2 className={styles.h2}>
              <span>02.</span>
              Our logo maker is fun
            </h2>
            <p className={styles.layoutParagraph}>
              Finalize your colors, fonts, and layouts in our easy-to-use logo
              editor to make sure you get exactly what you want. Undo any edits
              you make and then click Save when you’ve created your perfect logo
              design.
            </p>
          </div>
          <img
            className={styles.layoutImg}
            src="https://cdn.logojoy.com/wp-content/uploads/20201123121758/Surge-Color-Still.png"
            loading="eager"
            alt="Surge Select Still"
          />
        </section>
        <section className={styles.layoutSection}>
          <img
            className={styles.layoutImg}
            src="https://cdn.logojoy.com/wp-content/uploads/20201123121842/Surge-Folder-Still.png"
            loading="eager"
            alt="Surge Select Still"
          />
          <div className={styles.layoutContent}>
            <h2 className={styles.h2}>
              <span className={styles.span}>03.</span>
              Our logo maker delivers
            </h2>
            <p className={styles.layoutParagraph}>
              Looka’s online logo maker delivers the goods, including vector
              logo files and color variations. Your Brand Kit includes
              everything that a logo designer would deliver, and more.
            </p>
          </div>
        </section>
      </main>

      <footer>my footer</footer>
    </>
  );
}
