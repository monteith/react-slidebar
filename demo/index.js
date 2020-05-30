import React from 'react';
import ReactDOM from 'react-dom';
import { assignUuids } from '../src/assignUuids';
import Slidebar from '../src/Slidebar';
import './index.css';

const menuItems = assignUuids({
  name: 'Home',
  children: [
    {
      name: 'Menu 1',
      children: [
        {
          name: 'Menu a',
          children: [
            { name: 'Menu d', children: [] },
            {
              name: 'Menu e',
              children: [
                { name: 'Menu g' },
                { name: 'Menu h' },
                { name: 'Menu i' },
              ],
            },
            { name: 'Menu f', children: [] },
          ],
        },
        { name: 'Menu b', children: [] },
        { name: 'Menu c', children: [] },
      ],
    },
    { name: 'Menu 2', children: [] },
    { name: 'Menu 3', children: [] },
    { name: 'Menu 4', children: [] },
  ],
});

function App() {
  return (
    <div className="fake-application">
      <div className="sidebar-wrapper">
        <Slidebar menuItems={menuItems} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
