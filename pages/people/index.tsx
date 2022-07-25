import { Person } from 'models/models';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';

interface PeopleProps {
  peopleData: Person[];
}

const People: React.FC<PeopleProps> = ({ peopleData }) => {
  useEffect(() => {
    console.log(peopleData);
  }, []);

  if (!peopleData) {
    return null;
  }

  return (
    <div className="people">
      <h1>People</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const peopleData = await fetch('http://localhost:4000/api/people', {
    method: 'GET',
    headers: {
      Accept: 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

  return {
    props: { peopleData },
  };
};

export default People;
