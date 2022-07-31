import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setFormData } from 'store/actions/peopleActions';
import { getAllPeople, getPerson } from 'selectors/peopleSelectors';
import styles from 'styles/PersonPage.module.scss';

export const PersonForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    industry: '',
    salary: '',
    yearsOfExperience: '',
  });

  const people = useAppSelector(getAllPeople);
  const formData = useAppSelector(getPerson);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const industries = people
    .filter((person) => Boolean(person.industry))
    .map((person) => person.industry);

  useEffect(() => {
    const queryId = router.query.slug;
    const person = people.find((person) => person.id === Number(queryId));

    dispatch(setFormData(person!));
  }, [dispatch, people, router.query.slug]);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setFormData({ ...formData, [event.target.name]: event.target.value })
    );

  const validateInput = (inputType: string, value: any) => {
    if (inputType === 'firstName') {
      return value.length >= 3
        ? setErrorMessage({ ...errorMessage, firstName: '' })
        : setErrorMessage({
            ...errorMessage,
            firstName: 'Please add more than 2 characters.',
          });
    }
    if (inputType === 'lastName') {
      return value.length >= 3
        ? setErrorMessage({ ...errorMessage, lastName: '' })
        : setErrorMessage({
            ...errorMessage,
            lastName: 'Please add more than 2 characters.',
          });
    }

    if (inputType === 'dateOfBirth') {
      const dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;
      return !value.match(dateRegex)
        ? setErrorMessage({
            ...errorMessage,
            dateOfBirth: 'Please provide the format DD/MM/YY.',
          })
        : setErrorMessage({ ...errorMessage, dateOfBirth: '' });
    }

    if (inputType === 'email') {
      return !String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? setErrorMessage({
            ...errorMessage,
            email: 'Please provide a valid email.',
          })
        : setErrorMessage({
            ...errorMessage,
            email: '',
          });
    }

    if (inputType === 'industry') {
      return !industries.includes(value)
        ? setErrorMessage({
            ...errorMessage,
            industry: 'Please provide a valid industry.',
          })
        : setErrorMessage({
            ...errorMessage,
            industry: '',
          });
    }
  };

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
          onChange={(event) => {
            validateInput('firstName', event.target.value);
            onFieldChange(event);
          }}
        />
        {errorMessage.firstName ? (
          <p className={styles.errorMessage}>{errorMessage.firstName}</p>
        ) : null}
      </div>
      <div className={styles.formControl}>
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter last name"
          name="last_name"
          value={formData?.last_name}
          onChange={(event) => {
            validateInput('lastName', event.target.value);
            onFieldChange(event);
          }}
        />
        {errorMessage.lastName ? (
          <p className={styles.errorMessage}>{errorMessage.lastName}</p>
        ) : null}
      </div>
      <div className={styles.formControl}>
        <label htmlFor="dateOfBirth">Date of birth</label>
        <input
          type="string"
          id="dateOfBirth"
          placeholder="Enter date of birth"
          name="date_of_birth"
          value={formData?.date_of_birth}
          onChange={(event) => {
            validateInput('dateOfBirth', event.target.value);
            onFieldChange(event);
          }}
        />
        {errorMessage.dateOfBirth ? (
          <p className={styles.errorMessage}>{errorMessage.dateOfBirth}</p>
        ) : null}
      </div>
      <div className={styles.formControl}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          name="email"
          value={formData?.email}
          onChange={(event) => {
            validateInput('email', event.target.value);
            onFieldChange(event);
          }}
        />
        {errorMessage.email ? (
          <p className={styles.errorMessage}>{errorMessage.email}</p>
        ) : null}
      </div>
      <div className={styles.formControl}>
        <label htmlFor="industry">Industry</label>
        <input
          type="text"
          id="industry"
          placeholder="Enter industry"
          name="industry"
          value={formData?.industry}
          onChange={(event) => {
            validateInput('industry', event.target.value);
            onFieldChange(event);
          }}
        />
        {errorMessage.industry ? (
          <p className={styles.errorMessage}>{errorMessage.industry}</p>
        ) : null}
      </div>
      <div className={styles.formControl}>
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
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
          type="number"
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
