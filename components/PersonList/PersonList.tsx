import PersonCard from 'components/PersonCard/PersonCard';
import { useAppDispatch } from 'hooks/reduxHooks';
import { Person } from 'models/models';
import { setCurrentPerson } from 'store/actions/peopleActions';

interface PeopleListProps {
  people: Person[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {people.map((person) => {
        return (
          <PersonCard
            person={person}
            key={person.id}
            onClick={() => dispatch(setCurrentPerson(person))}
          />
        );
      })}
    </>
  );
};

export default PeopleList;
