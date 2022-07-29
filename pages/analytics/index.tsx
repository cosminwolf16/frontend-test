import { Person } from 'models/models';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import styles from 'styles/Analytics.module.scss';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
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
  let averageSalaryPerIndustryMap = calculateAverageSalaryPerIndustry(
    peopleData.filter((person) => Boolean(person.industry))
  );
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
    <div className={styles.analytics}>
      <h1 className={styles.analyticsTitle}>Analytics page</h1>
      <button
        onClick={() => router.push('/')}
        className={styles.analyticsBackButton}
      >
        Go back Home
      </button>
      <div className="graph-section">
        <h2 className={styles.sectionTitle}>
          Average Salary Per Years of Experience
        </h2>
        <VictoryChart>
          <VictoryBar
            data={averageSalaryPerYearsOfExperienceData}
            x="averageSalary"
            y="yearsOfExperience"
            theme={VictoryTheme.material}
          />
        </VictoryChart>
      </div>
      <div className="graph-section">
        <h2 className={styles.sectionTitle}>Average Salary Per Industry</h2>
        <VictoryChart>
          <VictoryBar
            data={averageSalaryPerIndustryData}
            x="averageSalary"
            y="industry"
            theme={VictoryTheme.material}
          />
        </VictoryChart>
      </div>
      <div className="graph-section">
        <h2 className={styles.sectionTitle}>Average Age Per Industry</h2>
        <VictoryChart>
          <VictoryBar
            data={averageAgePerIndustryData}
            x="averageAge"
            y="industry"
            theme={VictoryTheme.material}
          />
        </VictoryChart>
      </div>
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
