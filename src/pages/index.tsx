import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navigation from 'components/Navigation';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.homePage}>
      <Head>
        <title>People System App</title>
        <meta name="description" content="People App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Welcome to <span>People App</span>
        </h1>
        <div className={styles.buttons}>
          <button onClick={() => router.push('/people')}>
            Go to People Page
          </button>

          <button onClick={() => router.push('/analytics')}>
            Go to Analytics Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
