import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  const { coursework, degree, link, school, year } = data;

  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{degree}</h4>
        <p className="school">
          <a href={link}>{school}</a>, <time dateTime={String(year)}>{year}</time>
        </p>
      </header>
      {coursework && coursework.length > 0 ? (
        <div className="degree-coursework">
          <p className="degree-coursework-label">Relevant coursework</p>
          <ul className="points">
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
