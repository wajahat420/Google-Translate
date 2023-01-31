import logo from './logo.svg';
import './App.css';
import DomToImage from './dom-to-img';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // window.initgte = function () {
    //   new google.translate.TranslateElement(
    //     {
    //       pageLanguage: "en"
    //       // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //     },
    //     "google_te"
    //   );
    // };

    // var s1 = document.createElement("script");
    // s1.src = "https://translate.google.com/translate_a/element.js?cb=initgte";
    // document.head.appendChild(s1);
  })

  return (
    <div id='app' className="App">
      {/* <header className="App-header">
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
      <DomToImage/> */}
      <div style={{backgroundColor:'white'}}>
      <div id="google_te"></div>
      <h1>this is the text in english</h1>

      </div>


    </div>
  );
}

export default App;
