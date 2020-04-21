import React from 'react';
import DragBox from './components/DragBox';
import Header from './components/Header';

import 'normalize.css';
import './styles/App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
      <Header />
      <article>
        <DragBox />
        <DragBox />
        <DragBox />
        <p>Click anywhere</p>
      </article>
    </div>
  );
}

export default App;
