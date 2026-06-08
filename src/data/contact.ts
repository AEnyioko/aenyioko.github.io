import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons/faGoodreads';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/AEnyioko',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/chibuzor-enyioko-26b57b193/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.goodreads.com/user/show/175624411-anthony-enyioko',
    label: 'Goodreads',
    icon: faGoodreads,
  },
  {
    link: 'mailto:chibuzor.a.enyioko@uth.tmc.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
