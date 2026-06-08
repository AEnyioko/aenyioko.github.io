import { EMAIL_DOMAIN, EMAIL_LOCAL } from '@/lib/utils';

export default function EmailLink() {
  return (
    <div className="contact-email-container">
      <a
        href={`mailto:${EMAIL_LOCAL}@${EMAIL_DOMAIN}`}
        className="contact-email-link"
      >
        <span className="contact-email-prefix">{EMAIL_LOCAL}</span>
        <span className="contact-email-domain">@{EMAIL_DOMAIN}</span>
      </a>
    </div>
  );
}
