import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setFormData } from 'store/actions/peopleActions';
import styles from 'styles/PersonPage.module.scss';
import { useRouter } from 'next/router';
import { getAllPeople, getPerson } from 'selectors/peopleSelectors';

export const PersonForm: React.FC = () => {
  const people = useAppSelector(getAllPeople);
  const formData = useAppSelector(getPerson);

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const queryId = router.query.slug;
    const person = people.find((person) => person.id === Number(queryId));

    dispatch(setFormData(person!));
  }, [dispatch, people, router.query.slug]);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setFormData({ ...formData, [event.target.name]: event.target.value })
    );

  return (
    <form id="form" className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter first name"
          name="first_name"
          value={formData?.first_name}
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
          value={formData?.last_name}
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
          value={formData?.date_of_birth}
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
          value={formData?.email}
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
          value={formData?.industry}
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
          value={formData?.salary}
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
          value={formData?.years_of_experience}
          onChange={(event) => onFieldChange(event)}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setFormData(formData));
        }}
      >
        Save changes
      </button>
    </form>
  );
};

export default PersonForm;
