import React from 'react';
import Write from './js/components/Write';
import Add from './js/components/Add';
import Option from './js/components/Option';
import List from './js/components/List';
import './css/App.css';

function App() {
  return (
    <div className='body'>
      <div>
        <Write />
        <Add />
      </div>
      <Option />
      <List />
    </div>
  );
}

export default App;
