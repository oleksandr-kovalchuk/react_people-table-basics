import { NavLink } from 'react-router-dom';
import { Person } from '../types';

interface Props {
  person?: Person;
}

const PersonLink: React.FC<Props> = ({ person }) => {
  if (!person) {
    return <span>-</span>;
  }

  const isFemale = person.sex === 'f';

  return (
    <NavLink
      to={`/people/${person.slug}`}
      className={`has-text-weight-bold ${isFemale ? 'has-text-danger' : ''}`}
    >
      {person.name}
    </NavLink>
  );
};

export default PersonLink;
