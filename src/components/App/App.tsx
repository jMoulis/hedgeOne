import React from 'react';

const App = () => {
  return (
    <div>
      <h2>Ma liste de tâches</h2>
      <ul>
        <li>
          <input type="checkbox" />
          <span>Acheter du pain</span>
          <input type="date" />
        </li>
        <li>
          <input type="checkbox" />
          <span>Acheter du reblochon</span>
          <input type="date" />
          <button type="button" onClick={() => console.log('delete')}>
            Delete
          </button>
        </li>
      </ul>
      <button type="button" onClick={() => console.log('newTask')}>
        Add
      </button>
    </div>
  );
};

export default App;
