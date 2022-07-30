import Link from 'next/link';
import styles from 'styles/Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <header>
        <Link href="/">
          <a className={styles.logo}>People App</a>
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/people">People Page</Link>
            </li>
            <li>
              <Link href="/analytics">Analytics Page</Link>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
};

export default Navigation;
