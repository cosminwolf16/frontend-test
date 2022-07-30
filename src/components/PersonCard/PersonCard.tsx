import { Person } from 'models/models';
import Link from 'next/link';
import styles from 'styles/People.module.scss';

interface PersonCard {
  person: Person;
}

const PersonCard: React.FC<PersonCard> = ({ person }) => {
  if (
    person.first_name === null ||
    person.last_name === null ||
    person.email === null
  ) {
    return null;
  }

  return (
    <div className={styles.grid}>
      <Link href={`/people/${person.id}`}>
        <a className={styles.card}>
          <h2>{`${person.first_name} ${person.last_name}`}</h2>
          <p>{person.email}</p>
        </a>
      </Link>
    </div>
  );
};

export default PersonCard;
