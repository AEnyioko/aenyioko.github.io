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
    title: 'MPN Dataset',
    subtitle: 'Harmonized MPN expression analysis',
    link: 'https://github.com/AEnyioko/MPNDataset',
    image: '/images/me.jpg',
    date: '2026-03-01',
    desc: 'A pipeline for harmonized MPN datasets for the analysis of gene expression across MPN phenotypes.',
    tech: ['Python', 'Jupyter', 'scRNA-seq', 'Pandas'],
    featured: true,
  },
  {
    title: 'Variant Analysis VCF',
    subtitle: 'Genomic variant workflows',
    link: 'https://github.com/AEnyioko/VariantAnalysisVCF',
    image: '/images/me.jpg',
    date: '2026-02-18',
    desc: 'Jupyter notebooks for exploring variant call format data and mutation-level analysis.',
    tech: ['Python', 'Jupyter', 'VCF', 'Pandas'],
  },
  {
    title: 'NGS Analysis',
    subtitle: 'Sequencing data pipelines',
    link: 'https://github.com/AEnyioko/NGS_Analysis',
    image: '/images/me.jpg',
    date: '2026-03-02',
    desc: 'Next-generation sequencing analysis notebooks focused on reproducible genomic workflows.',
    tech: ['Python', 'Jupyter', 'NGS'],
  },
  {
    title: 'Gene Expression Databases',
    link: 'https://github.com/AEnyioko/Gene_Expression_Databases',
    image: '/images/me.jpg',
    date: '2026-03-18',
    desc: 'Exploring and organizing gene expression datasets for downstream biological analysis.',
    tech: ['Python', 'Jupyter', 'Bioinformatics'],
  },
  {
    title: 'Rosalind',
    subtitle: 'Bioinformatics problem solving',
    link: 'https://github.com/AEnyioko/Rosalind',
    image: '/images/me.jpg',
    date: '2026-02-03',
    desc: 'Python solutions to classic Rosalind bioinformatics challenges.',
    tech: ['Python', 'Algorithms'],
  },
  {
    title: 'Supervised Classification',
    link: 'https://github.com/AEnyioko/SupervisedClassification',
    image: '/images/me.jpg',
    date: '2025-11-05',
    desc: 'Supervised learning experiments applied to biological classification problems.',
    tech: ['Python', 'Jupyter', 'Machine Learning'],
  },
];

export default data;
