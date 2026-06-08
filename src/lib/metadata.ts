import type { Metadata } from 'next';

import { AUTHOR_NAME, SITE_URL } from './utils';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: `/${string}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const absoluteUrl = path
    ? new URL(
        path.startsWith('/') ? path.slice(1) : path,
        `${SITE_URL}/`,
      ).toString()
    : undefined;
  const pageTitle = `${title} | ${AUTHOR_NAME}`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: AUTHOR_NAME,
      title: pageTitle,
      description,
      ...(absoluteUrl ? { url: absoluteUrl } : {}),
      images: [
        {
          url: '/images/me.jpg',
          width: 1200,
          height: 630,
          alt: AUTHOR_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: ['/images/me.jpg'],
    },
  };
}
