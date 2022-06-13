import { useState, useEffect } from 'react';
import data from './data';
import Articolo from './Articolo';

const getLocalStorageTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
};

function App() {
  const [theme, setTheme] = useState(getLocalStorageTheme() || 'light');

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={changeTheme}>
          cambia tema
        </button>
        <section className="article-section">
          {data.map((e) => {
            return <Articolo key={e.id} {...e}></Articolo>;
          })}
        </section>
      </div>
    </section>
  );
}

export default App;
