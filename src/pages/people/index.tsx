import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Person } from 'models/models';
import { useAppDispatch } from 'hooks/reduxHooks';
import { loadPeopleData } from 'store/actions/peopleActions';
import { PEOPLE_PER_PAGE } from 'constants/peopleConstants';
import Pagination from 'components/Pagination/Pagination';
import PeopleList from 'components/PersonList/PersonList';
import Navigation from 'components/Navigation';
import styles from 'styles/People.module.scss';

interface PeopleProps {
  peopleData: Person[];
}

const People: React.FC<PeopleProps> = ({ peopleData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPerson = currentPage * PEOPLE_PER_PAGE;
  const indexOfFirstPerson = indexOfLastPerson - PEOPLE_PER_PAGE;
  const currentPeople = peopleData.slice(indexOfFirstPerson, indexOfLastPerson);

  const dispatch = useAppDispatch();

  const paginate = (pageNumber: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(loadPeopleData(peopleData));
  }, [dispatch, peopleData]);

  if (!peopleData) {
    return null;
  }

  return (
    <div className={styles.people}>
      <Navigation />
      <h1 className={styles.heading}>People</h1>
      <PeopleList people={currentPeople} />
      <Pagination
        peoplePerPage={PEOPLE_PER_PAGE}
        totalPeople={peopleData.length}
        paginate={paginate}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const peopleData = await fetch('http://localhost:4000/api/people', {
      method: 'GET',
      headers: {
        Accept: 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());

    return {
      props: { peopleData },
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default People;
