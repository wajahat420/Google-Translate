import logo from './logo.svg';
import './App.css';
import { jsPDF } from "jspdf";

function App() {

  const pdfDownload = e => {
    e.preventDefault()
    let doc = new jsPDF("landscape", 'pt', 'A4');
    doc.html(document.getElementById('pdf-view'), {
      callback: () => {
        doc.save('test.pdf');
      }
    });
  }

  return (
    <>
      <div id="pdf-view" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <button onClick={pdfDownload}>Download as pdf</button>

    </>
  );
}

export default App;
