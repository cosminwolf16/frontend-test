import styles from 'styles/Pagination.module.scss';

interface PaginationProps {
  peoplePerPage: number;
  totalPeople: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  peoplePerPage,
  totalPeople,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={styles.container}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.item}>
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
