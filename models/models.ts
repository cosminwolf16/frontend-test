export interface Person {
  date_of_birth: string;
  email: string;
  first_name: string;
  id: number;
  industry: string;
  last_name: string;
  salary: number;
  years_of_experience: number;
}

export interface SalaryPerYears {
  averageSalary: number;
  yearsOfExperience: number;
}

export interface SalaryPerIndustry {
  averageSalary: number;
  industry: string;
}
export interface AgePerIndustry {
  averageAge: number;
  industry: string;
}
