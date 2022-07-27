import { useAppSelector } from 'hooks/reduxHooks';
import styles from 'styles/PersonPage.module.scss';
import React from 'react';

export const PersonPage = () => {
  const person = useAppSelector((state) => state.people.currentPerson);

  return <div className={styles.title}>Person Page</div>;
};

export default PersonPage;
