export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  coursework?: string[];
}

const degrees: Degree[] = [
  {
    school: 'UTHealth McWilliams School of Biomedical Informatics',
    degree: 'Master of Science in Biomedical Informatics (Expected May 2027)',
    link: 'https://www.uth.edu/bmi',
    year: 2027,
    coursework: [
      'BMI 5301 — Introduction to Bioinformatics',
      'BMI 5310 — Machine Learning in Biomedical Informatics',
      'BMI 5300 — Foundations of Biomedical Information Sciences I',
    ],
  },
  {
    school: 'Prairie View A&M University',
    degree: 'Bachelor of Science in Biology',
    link: 'https://www.pvamu.edu',
    year: 2024,
  },
];

export default degrees;
