import { Person } from 'models/models';

export const calculateAverageSalaryPerYearsOfExperience = (
  peopleData: Person[]
) => {
  let salaryMap = new Map();
  // @ts-ignore
  peopleData.forEach((person) => {
    let salaryList = salaryMap.get(person.years_of_experience);
    if (salaryList === undefined) {
      salaryList = [];
    }

    salaryList.push(person.salary);

    salaryMap.set(person.years_of_experience, salaryList);
  });

  let averageSalaryMap = new Map();
  salaryMap.forEach((salaryList, yearsOfExperience) => {
    let salaryAverage =
      salaryList.reduce((sum: number, salary: number) => {
        sum += salary;
        return sum;
      }, 0) / salaryList.length;
    salaryAverage = Math.round((salaryAverage + Number.EPSILON) * 100) / 100;
    averageSalaryMap.set(yearsOfExperience, salaryAverage);
  });
  return averageSalaryMap;
};

export const calculateAverageSalaryPerIndustry = (peopleData: Person[]) => {
  let salaryMap = new Map();
  // @ts-ignore
  peopleData.forEach((person) => {
    let salaryList = salaryMap.get(person.industry);
    if (salaryList === undefined) {
      salaryList = [];
    }

    salaryList.push(person.salary);

    salaryMap.set(person.industry, salaryList);
  });

  let averageSalaryMap = new Map();
  salaryMap.forEach((salaryList, industry) => {
    let salaryAverage =
      salaryList.reduce((sum: number, salary: number) => {
        sum += salary;
        return sum;
      }, 0) / salaryList.length;
    salaryAverage = Math.round((salaryAverage + Number.EPSILON) * 100) / 100;
    averageSalaryMap.set(industry, salaryAverage);
  });
  return averageSalaryMap;
};

const extractYearFromBirthDate = (dateOfBirth: string) => {
  const dateString = dateOfBirth;

  const dateParts = dateString.split('/');
  const year = new Date(
    +dateParts[2],
    // @ts-ignore
    dateParts[1] - 1,
    +dateParts[0]
  ).getFullYear();

  return year;
};

export const calculateAverageAgePerIndustry = (peopleData: Person[]) => {
  let ageMap = new Map();
  // @ts-ignore
  peopleData.forEach((person) => {
    let ageList = ageMap.get(person.industry);
    if (ageList === undefined) {
      ageList = [];
    }

    ageList.push(
      new Date().getFullYear() - extractYearFromBirthDate(person.date_of_birth)
    );

    ageMap.set(person.industry, ageList);
  });

  let averageAgeMap = new Map();
  ageMap.forEach((ageList, industry) => {
    let ageAverage =
      ageList.reduce((sum: number, age: number) => {
        sum += age;
        return sum;
      }, 0) / ageList.length;
    ageAverage = Math.round((ageAverage + Number.EPSILON) * 100) / 100;
    averageAgeMap.set(industry, ageAverage);
  });
  return averageAgeMap;
};
