import GraphSection from 'components/GraphSection';
import Navigation from 'components/Navigation';
import {
  AgePerIndustry,
  Person,
  SalaryPerIndustry,
  SalaryPerYears,
} from 'models/models';
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

  let averageSalaryPerYearsOfExperienceData: SalaryPerYears[] = [];
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

  let averageSalaryPerIndustryData: SalaryPerIndustry[] = [];
  let averageSalaryPerIndustryMap = calculateAverageSalaryPerIndustry(
    peopleData.filter((person) => Boolean(person.industry))
  );
  averageSalaryPerIndustryMap.forEach((averageSalary, industry) => {
    averageSalaryPerIndustryData.push({
      averageSalary: averageSalary,
      industry: industry,
    });
  });

  let averageAgePerIndustryData: AgePerIndustry[] = [];
  let averageAgePerIndustryMap = calculateAverageAgePerIndustry(peopleData);
  averageAgePerIndustryMap.forEach((averageAge, industry) => {
    averageAgePerIndustryData.push({
      averageAge: averageAge,
      industry: industry,
    });
  });

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
