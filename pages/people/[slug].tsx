import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import styles from 'styles/PersonPage.module.scss';
import { useState } from 'react';
import { updatePerson } from 'store/actions/peopleActions';
import Navigation from 'components/Navigation';

export const PersonPage = () => {
  const person = useAppSelector((state) => state.people.currentPerson);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date_of_birth: '',
    industry: '',
    salary: 0,
    years_of_experience: 0,
    id: person.id,
  });

  const dispatch = useAppDispatch();

  const onFieldChange = (event: React.SyntheticEvent<EventTarget>) =>
    // @ts-ignore
    setFormData({ ...formData, [event.target.name]: event.target.value });

  return (
    <div className={styles.personPage}>
      <Navigation />
      <h1 className={styles.title}>Person Page</h1>
      <div className={styles.information}>
        <h2>{`${person.first_name} ${person.last_name}`}</h2>
        <h2>{person.date_of_birth}</h2>
        <h2>{person.email}</h2>
        <h2>{person.industry} industry</h2>
        <h2>{person.salary} salary</h2>
        <h2>{person.years_of_experience} years of experience</h2>
      </div>
      <div className={styles.container}>
        <form id="form" className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              name="first_name"
              onChange={(event) => onFieldChange(event)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="firstName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              name="last_name"
              onChange={(event) => onFieldChange(event)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              type="text"
              id="dateOfBirth"
              placeholder="Enter date of birth"
              name="date_of_birth"
              onChange={(event) => onFieldChange(event)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              name="email"
              onChange={(event) => onFieldChange(event)}
            />
            <small>Error message</small>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              id="industry"
              placeholder="Enter industry"
              name="industry"
              onChange={(event) => onFieldChange(event)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              placeholder="Enter salary"
              name="salary"
              onChange={(event) => onFieldChange(event)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="yearsOfExperience">Years of experience</label>
            <input
              type="text"
              id="yearsOfExperience"
              placeholder="Enter years of experience"
              name="years_of_experience"
              onChange={(event) => onFieldChange(event)}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log(formData);
              dispatch(updatePerson(formData));
            }}
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonPage;
