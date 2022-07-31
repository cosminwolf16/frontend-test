import { GetServerSideProps } from 'next';
import { Person } from 'models/models';
import {
  generateAverageAgeIndustryData,
  generateAverageSalaryPerIndustryData,
  generateAverageSalaryPerYearsOfExperienceData,
} from 'utils/utils';
import GraphSection from 'components/GraphSection';
import Navigation from 'components/Navigation';
import styles from 'styles/Analytics.module.scss';

interface Analytics {
  peopleData: Person[];
}

const Analytics: React.FC<Analytics> = ({ peopleData }) => {
  const averageSalaryPerYearsOfExperienceData =
    generateAverageSalaryPerYearsOfExperienceData(peopleData);
  const averageSalaryPerIndustryData =
    generateAverageSalaryPerIndustryData(peopleData);
  const averageAgePerIndustryData = generateAverageAgeIndustryData(peopleData);

  return (
    <div className={styles.analytics}>
      <Navigation />
      <h1 className={styles.analyticsTitle}>Analytics page</h1>
      <GraphSection
        title="Average Salary Per Years of Experience"
        data={averageSalaryPerYearsOfExperienceData}
        content={{
          primaryDataKey: 'averageSalary',
          secondDataKey: 'yearsOfExperience',
        }}
      />
      <GraphSection
        title="Average Salary Per Industry"
        data={averageSalaryPerIndustryData}
        content={{ primaryDataKey: 'averageSalary', secondDataKey: 'industry' }}
      />
      <GraphSection
        title="Average Age Per Industry"
        data={averageAgePerIndustryData}
        content={{ primaryDataKey: 'averageAge', secondDataKey: 'industry' }}
      />
    </div>
  );
};

export default Analytics;

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
