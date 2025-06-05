import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mt-4">
        <Welcome />
      </main>
    </div>
  );
}

export default App; 