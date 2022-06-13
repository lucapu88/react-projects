import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import TotalBox from './components/TotalBox';
import Loading from './components/Loading';
import ErrorContainer from './components/ErrorContainer';
import { useGlobalContext } from './context/context';

function App() {
  const { isLoading, products } = useGlobalContext();

  return (
    <div className="App">
      <Navbar></Navbar>
      {isLoading ? (
        <div className="center-item">
          <Loading></Loading>
        </div>
      ) : (
        <React.Fragment>
          {products.length ? (
            <>
              <Cart></Cart>
              <TotalBox></TotalBox>
            </>
          ) : (
            <ErrorContainer></ErrorContainer>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
