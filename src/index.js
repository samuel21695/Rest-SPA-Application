import React from 'react';
import ReactDOM from 'react-dom';
import Body1 from './components/body1';
import Body2 from './components/body2';

function App() {
  return (
    <>
    <Body1 />
    <Body2 />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));