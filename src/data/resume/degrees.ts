export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'UTHealth McWilliams School of Biomedical Informatics',
    degree: 'Master of Science in Biomedical Informatics (Expected May 2027)',
    link: 'https://www.uth.edu/bmi',
    year: 2027,
  },
  {
    school: 'Prairie View A&M University',
    degree: 'Bachelor of Science in Biology',
    link: 'https://www.pvamu.edu',
    year: 2024,
  },
];

export default degrees;
