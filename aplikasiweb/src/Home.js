import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h3>Pilih Link :</h3>
        <a
          className="App-link"
          href="Lat1.js"
          rel="noopener noreferrer"
        >
          Menampilkan Teks
        </a>

        <a
          className="App-link"
          href="Lat2.js"
          rel="noopener noreferrer"
        >
          Menampilkan teks (Dari Variable)
        </a>

        <a
          className="App-link"
          href="Lat3.js"
          rel="noopener noreferrer"
        >
          Seleksi Kondisi : IF 
        </a>

        <a
          className="App-link"
          href="Lat4.js"
          rel="noopener noreferrer"
        >
          Ekspresi : Operasi Matematika 
        </a>

      </header>
    </div>
  );
}

export default App;
