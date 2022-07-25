import type { NextPage } from 'next';
import Head from 'next/head';
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
          Welcome to <a href="/people">People App</a>
        </h1>
      </div>
    </div>
  );
};

export default Home;
