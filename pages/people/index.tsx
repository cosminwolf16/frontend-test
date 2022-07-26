import Pagination from 'components/Pagination/Pagination';
import PeopleList from 'components/PersonList/PersonList';
import { Person } from 'models/models';
import styles from 'styles/People.module.scss';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

interface PeopleProps {
  peopleData: Person[];
}

const People: React.FC<PeopleProps> = ({ peopleData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(15);

  const indexOfLastPerson = currentPage * peoplePerPage;
  const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
  const currentPeople = peopleData.slice(indexOfFirstPerson, indexOfLastPerson);

  const paginate = (pageNumber: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    console.log(peopleData);
  }, []);

  if (!peopleData) {
    return null;
  }

  return (
    <div>
      <h1 className={styles.heading}>People</h1>
      <PeopleList people={currentPeople} />
      <Pagination
        peoplePerPage={peoplePerPage}
        totalPeople={peopleData.length}
        paginate={paginate}
      />
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
