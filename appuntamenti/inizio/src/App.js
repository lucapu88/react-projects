import List from './List';
import data from './data';
import { useState, useCallback } from 'react';
import { IoReloadSharp } from 'react-icons/io5';

function App() {
  const [people, setPeople] = useState(data);

  const deleteAll = () => {
    let text = 'Sei sicuro che vuoi cancellare tutta sta lista di stronzi?';
    if (window.confirm(text) === true) {
      setPeople([]);
    }
  };

  const reloadAllPeople = () => {
    setPeople(data);
  };

  const deletePerson = useCallback(
    (id) => {
      setPeople(people.filter((p) => p.id !== id));
    },
    [people]
  );

  return (
    <section>
      <div className="container">
        <h2 style={{ color: 'var(--bg-blue)' }}>
          Lista di soggetti un pò così
        </h2>

        <div className="btn-group">
          <button onClick={reloadAllPeople}>
            <IoReloadSharp style={{ fontSize: '20px' }} />
          </button>
          <button onClick={deleteAll}>Delete All</button>
        </div>

        <List data={people} deletePerson={deletePerson}></List>
      </div>
    </section>
  );
}

export default App;
