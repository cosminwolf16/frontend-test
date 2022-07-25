import PersonCard from 'components/PersonCard/PersonCard';
import { Person } from 'models/models';

interface PeopleListProps {
  people: Person[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <PersonCard person={person} key={person.id} />;
      })}
    </>
  );
};

export default PeopleList;
