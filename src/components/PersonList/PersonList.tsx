import { Person } from 'models/models';
import PersonCard from 'components/PersonCard/PersonCard';

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
