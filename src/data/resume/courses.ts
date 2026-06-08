export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Introduction to Bioinformatics',
    number: 'BMI 5301',
    link: 'https://www.uth.edu/bmi',
    university: 'UTHealth McWilliams School of Biomedical Informatics',
  },
  {
    title: 'Machine Learning in Biomedical Informatics',
    number: 'BMI 5310',
    link: 'https://www.uth.edu/bmi',
    university: 'UTHealth McWilliams School of Biomedical Informatics',
  },
  {
    title: 'Foundations of Biomedical Information Sciences I',
    number: 'BMI 5300',
    link: 'https://www.uth.edu/bmi',
    university: 'UTHealth McWilliams School of Biomedical Informatics',
  },
];

export default courses;
