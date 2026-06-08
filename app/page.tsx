import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  description:
    'Aspiring computational biologist and biomedical informatics student in Houston, TX. Exploring spatial transcriptomics, immunology, and genomic data analysis.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
