export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Rosalind',
    subtitle: 'Bioinformatics problem solving',
    link: 'https://github.com/AEnyioko/Rosalind',
    image: '/images/projects/rosalind.png',
    date: '2024-01-01',
    desc: 'Python solutions to classic Rosalind bioinformatics challenges.',
    tech: ['Python', 'Algorithms'],
  },
];

export default data;
