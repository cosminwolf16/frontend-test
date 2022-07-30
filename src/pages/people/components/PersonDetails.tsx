import { useAppSelector } from 'hooks/reduxHooks';
import { getPerson } from 'selectors/peopleSelectors';
import styles from 'styles/PersonDetails.module.scss';

export const PersonDetails = () => {
  const person = useAppSelector(getPerson);

  return (
    <div className={styles.personDetails}>
      <h2>Person Details</h2>
      <div className={styles.detailsContainer}>
        <h3>
          Full name:{' '}
          <span
            className={styles.detail}
          >{`${person?.first_name} ${person?.last_name}`}</span>
        </h3>
        <h3>
          Date of birth:{' '}
          <span className={styles.detail}>{person?.date_of_birth}</span>
        </h3>
        <h3>
          Email: <span className={styles.detail}>{person?.email}</span>
        </h3>
        <h3>
          Industry: <span className={styles.detail}>{person?.industry}</span>
        </h3>
        <h3>
          Salary: <span className={styles.detail}>{person?.salary}</span>
        </h3>
        <h3>
          Years of experience:{' '}
          <span className={styles.detail}>{person?.years_of_experience}</span>
        </h3>
      </div>
    </div>
  );
};

export default PersonDetails;
