import Title from './components/Title';
import Holiday from './components/Holiday';
//Ho utilizzato Cartella Component per dare una chiara locazione ai miei componenti
function App() {
  return (
    <section className="section-center">
      <div className="container">
        <Title text="Vacanze"></Title>
        <Holiday></Holiday>
      </div>
    </section>
  );
}

export default App;
