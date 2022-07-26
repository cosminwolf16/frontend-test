import { useAppSelector } from 'hooks/reduxHooks';
import React from 'react';

export const PersonPage = () => {
  const person = useAppSelector((state) => state.people.currentPerson);
  console.log(person);

  return <div>Person Page</div>;
};

export default PersonPage;
