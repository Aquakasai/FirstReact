import perenoel from './perenoel.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
	<header className="App-header">
		<img src={perenoel} className="App-logo" alt="logo" />
		<h1>Liste au père noël</h1>
		<ul>
		<li>un nouveau pc</li>
		<li>la santé de tous</li>
		<li>Cyberpunk 2077</li>
		<li>une meilleur année</li>
	  </ul>
      </header>
    </div>
  );
}

export default App;
