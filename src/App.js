import './App.css';
import { useEffect, useState} from "react";

function App() {
  const [generatedQuote, setGeneratedQuote] = useState({});

  useEffect(() => {
    fetch('https://programming-quotesapi.vercel.app/api/random')
      .then(res => res.json())
      .then(data => setGeneratedQuote(data));
  }, []);

  const newQuote = () => {
    fetch('https://programming-quotesapi.vercel.app/api/random')
      .then(res => res.json())
      .then(data => setGeneratedQuote(data));
  };

  return (
    <div className="App" id="quote-box">
      <h1 id="text">{generatedQuote.quote}</h1>
      <p id="author">{generatedQuote.author}</p>
       <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet</a>
      <button id="new-quote" onClick={newQuote}>New Quote</button>
    </div>
  );
}

export default App;