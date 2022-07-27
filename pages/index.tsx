import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>People System App</title>
        <meta name="description" content="People App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Welcome to <span>People App</span>
        </h1>
        <div className={styles.buttons}>
          <Link href="/people">
            <a>
              <button>Go to People Page</button>
            </a>
          </Link>
          <Link href="/analytics">
            <a>
              {' '}
              <button>Go to Analytics Page</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
