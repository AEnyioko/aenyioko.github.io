import type { ExperienceSection } from '@/data/resume/work';

import Job from './Experience/Job';

interface ExperienceProps {
  sections: ExperienceSection[];
}

export default function Experience({ sections }: ExperienceProps) {
  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>Experience</h3>
      </div>
      {sections.map((section) => (
        <div className="experience-group" key={section.title}>
          <h4 className="experience-group-title">{section.title}</h4>
          {section.positions.map((job) => (
            <Job data={job} key={`${job.name}-${job.position}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
