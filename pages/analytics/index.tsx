import { Person } from 'models/models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import styles from 'styles/Analytics.module.scss';
import {
  calculateAverageAgePerIndustry,
  calculateAverageSalaryPerIndustry,
  calculateAverageSalaryPerYearsOfExperience,
} from 'utils/utils';

interface Analytics {
  peopleData: Person[];
}

const Analytics: React.FC<Analytics> = ({ peopleData }) => {
  const router = useRouter();

  let averageSalaryPerYearsOfExperienceData: {
    averageSalary: number;
    yearsOfExperience: number;
  }[] = [];
  let averageSalaryPerYearsOfExperienceMap =
    calculateAverageSalaryPerYearsOfExperience(peopleData);
  averageSalaryPerYearsOfExperienceMap.forEach(
    (averageSalary, yearsOfExperiece) => {
      averageSalaryPerYearsOfExperienceData.push({
        averageSalary: averageSalary,
        yearsOfExperience: yearsOfExperiece,
      });
    }
  );

  let averageSalaryPerIndustryData: {
    averageSalary: number;
    industry: string;
  }[] = [];
  let averageSalaryPerIndustryMap =
    calculateAverageSalaryPerIndustry(peopleData);
  averageSalaryPerIndustryMap.forEach((averageSalary, industry) => {
    averageSalaryPerIndustryData.push({
      averageSalary: averageSalary,
      industry: industry,
    });
  });

  let averageAgePerIndustryData: {
    averageAge: number;
    industry: string;
  }[] = [];
  let averageAgePerIndustryMap = calculateAverageAgePerIndustry(peopleData);
  averageAgePerIndustryMap.forEach((averageAge, industry) => {
    averageAgePerIndustryData.push({
      averageAge: averageAge,
      industry: industry,
    });
  });

  return (
    <div>
      <h1 className={styles.analyticsTitle}>Analytics page</h1>
      <button
        onClick={() => router.push('/')}
        className={styles.analyticsBackButton}
      >
        Go back Home
      </button>
    </div>
  );
};

export default Analytics;

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
