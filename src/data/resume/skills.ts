export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const PROGRAMMING_AND_DATA_ANALYSIS = 'Programming and Data Analysis';

const skills: Skill[] = [
  { title: 'Python', competency: 3, category: [PROGRAMMING_AND_DATA_ANALYSIS] },
  { title: 'R', competency: 3, category: [PROGRAMMING_AND_DATA_ANALYSIS] },
  {
    title: 'Bash',
    competency: 3,
    category: [PROGRAMMING_AND_DATA_ANALYSIS, 'Tools'],
  },
  { title: 'SQL', competency: 3, category: [PROGRAMMING_AND_DATA_ANALYSIS] },
  { title: 'Jupyter', competency: 3, category: ['Tools'] },
  { title: 'Bioconductor', competency: 3, category: ['Bioinformatics'] },
  { title: 'Docker', competency: 3, category: ['Tools'] },
  { title: 'Pandas', competency: 3, category: [PROGRAMMING_AND_DATA_ANALYSIS] },
  { title: 'NumPy', competency: 3, category: [PROGRAMMING_AND_DATA_ANALYSIS] },
  {
    title: 'NGS Analysis',
    competency: 3,
    category: ['Bioinformatics'],
  },
  {
    title: 'VCF / Variant Analysis',
    competency: 3,
    category: ['Bioinformatics'],
  },
  {
    title: 'Gene Expression Analysis',
    competency: 3,
    category: ['Bioinformatics'],
  },
  {
    title: 'scRNA-seq Analysis',
    competency: 3,
    category: ['Bioinformatics'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: [PROGRAMMING_AND_DATA_ANALYSIS],
  },
  { title: 'Git & GitHub', competency: 3, category: ['Tools'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
