import type { Metadata } from 'next';

import {
  AUTHOR_NAME,
  SHARE_IMAGE,
  SHARE_IMAGE_SIZE,
  SITE_URL,
} from './utils';

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
          url: SHARE_IMAGE,
          width: SHARE_IMAGE_SIZE.width,
          height: SHARE_IMAGE_SIZE.height,
          alt: AUTHOR_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [SHARE_IMAGE],
    },
  };
}
