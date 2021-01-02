import * as React from 'react';

import './grid.css'

const Grid = () => {

  const rows = [];
  let i = 0;
  let j = 0;
  
  while (i < 14) {
    j = 0;
    rows[i] = []
    while (j < 14) {
      rows[i].push(
        (
          <div className='gridsquare'>
            <p>{`${i}, ${j}`}</p>
          </div>
        )
      )
      j += 1;
    }
    i += 1;
  }

  return (
    <div className='grid'>
      { rows.map(row => {
        return (
          <div className='grid-row'>
            { row.map(gridsquare => gridsquare) }
          </div>
        )
      })}
    </div>
  )
}

export default Grid;
