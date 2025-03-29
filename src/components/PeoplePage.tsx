import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Person } from '../types';
import { getPeople } from '../api';
import { Loader } from './Loader';
import PeopleTable from './PeopleTable';

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const fetchedPeople = await getPeople();

        setPeople(fetchedPeople);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h1 className="title">People Page</h1>
        <div className="block">
          <div className="box table-container">
            {loading && <Loader />}

            {error && (
              <p data-cy="peopleLoadingError" className="has-text-danger">
                Something went wrong
              </p>
            )}

            {!loading && !error && (
              <>
                {people.length === 0 ? (
                  <p data-cy="noPeopleMessage">
                    There are no people on the server
                  </p>
                ) : (
                  <PeopleTable people={people} selectedSlug={slug} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PeoplePage;
