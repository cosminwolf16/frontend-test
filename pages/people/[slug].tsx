import styles from 'styles/PersonPage.module.scss';
import Navigation from 'components/Navigation';
import PersonForm from './components/PersonForm';
import PersonDetails from './components/PersonDetails';

export const PersonPage = () => {
  return (
    <div className={styles.personPage}>
      <Navigation />
      <h1 className={styles.title}>Person Page</h1>
      <PersonDetails />
      <div className={styles.container}>
        <PersonForm />
      </div>
    </div>
  );
};

export default PersonPage;
