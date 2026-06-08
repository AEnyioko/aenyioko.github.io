/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface ExperienceSection {
  title: string;
  positions: Position[];
}

const experienceSections: ExperienceSection[] = [
  {
    title: 'Clinical Experience',
    positions: [
      {
        name: 'NeoGenomics Laboratories',
        position: 'Accessioning Technician I',
        url: 'https://www.neogenomics.com',
        startDate: '2025-05-01',
        highlights: [
          'Perform high-volume specimen data entry; interface with histology and molecular departments supporting NGS workflow continuity.',
          'Maintain specimen data records in compliance with CAP/CLIA quality standards and regulatory requirements.',
          'Coordinate with molecular pathology teams on specimen integrity and accessioning accuracy through dashboards.',
        ],
      },
      {
        name: 'MD Anderson Cancer Center',
        position: 'CT Diagnostic Imaging Volunteer',
        url: 'https://www.mdanderson.org',
        startDate: '2024-10-01',
        highlights: [
          'Assist patients with CT scan preparation by verifying IDs, explaining the procedure, and positioning them comfortably.',
          'Use the hospital scheduling system to streamline patient flow, resulting in smoother appointments and reduced wait times.',
        ],
      },
      {
        name: 'Sagis Diagnostics, PLLC',
        position: 'Specimen Accessioner',
        url: 'https://www.sagisdx.com',
        startDate: '2021-06-01',
        endDate: '2024-07-01',
        highlights: [
          'Processed 100+ specimens daily and developed an Excel-based productivity tracker to improve throughput reporting and organization.',
          'Managed large-scale patient and specimen data in compliance with laboratory standards.',
        ],
      },
    ],
  },
  {
    title: 'Research Experience',
    positions: [
      {
        name: 'Prairie View A&M University',
        position: 'Student Laboratory Aide',
        url: 'https://www.pvamu.edu',
        startDate: '2021-06-01',
        endDate: '2021-12-01',
        highlights: [
          'Maintained laboratory inventory of chemicals and reagents.',
          'Operated an IR spectrometer for compound identification and analysis.',
          'Assisted in experimental design and protocol execution.',
        ],
      },
    ],
  },
  {
    title: 'Independent Projects',
    positions: [
      {
        name: 'Co-occurring Mutations and Transcriptional Consequences of JAK2 V617F in MPN Phenotypes',
        position: 'Bioinformatics Research Project',
        url: 'https://github.com/AEnyioko/MPNDataset',
        startDate: '2026-03-01',
        highlights: [
          'Execute scRNA-seq QC/filtering pipelines across 23,000+ samples to characterize immune cell transcriptional signatures in myeloproliferative neoplasm phenotypes.',
          'Build harmonized, genotype-stratified reference datasets to identify biomarkers distinguishing MPN phenotypes.',
          'Maintain reproducible, detailed analysis records in Jupyter Notebooks.',
        ],
      },
    ],
  },
];

export const currentPosition = experienceSections[0].positions[0];

const work: Position[] = experienceSections.flatMap(
  (section) => section.positions,
);

export default experienceSections;
export { work };
