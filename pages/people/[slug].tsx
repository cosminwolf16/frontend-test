import { useAppSelector } from 'hooks/reduxHooks';
import styles from 'styles/PersonPage.module.scss';
import { useState } from 'react';
import Link from 'next/link';

export const PersonPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const person = useAppSelector((state) => state.people.currentPerson);

  const renderSubmitButton = () => {
    if (isEditing) {
      return <button type="submit">Save changes</button>;
    }

    return (
      <button type="submit" onClick={() => setIsEditing(true)}>
        Enter edit mode
      </button>
    );
  };

  return (
    <>
      <h1 className={styles.title}>Person Page</h1>
      <Link href="/people">
        <a>
          <button className={styles.backToPeopleButton}>
            Go back to People
          </button>
        </a>
      </Link>
      <div className={styles.container}>
        <form id="form" className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              value={person?.first_name}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="firstName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              value={person?.last_name}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="dateOfBirth">Last Name</label>
            <input
              type="text"
              id="dateOfBirth"
              placeholder="Enter date of birth"
              value={person.date_of_birth}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              value={person.email}
            />
            <small>Error message</small>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              id="industry"
              placeholder="Enter industry"
              value={person.industry}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              placeholder="Enter salary"
              value={person.salary}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="yearsOfExperience">Years of experience</label>
            <input
              type="text"
              id="yearsOfExperience"
              placeholder="Enter years of experience"
              value={person.years_of_experience}
            />
          </div>
          {renderSubmitButton()}
        </form>
      </div>
    </>
  );
};

export default PersonPage;
