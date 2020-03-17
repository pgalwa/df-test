import React, {useState} from 'react';
import Form from 'components/Form'
import Results from 'components/Results'

function App() {
  const [results, setResults] = useState(null);
  return (
    <div>
      <Form setResults={setResults} />
      <Results results={results} />
    </div>
  );
}

export default App;
