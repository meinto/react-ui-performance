import React, { useState } from 'react';
import './App.css';
import { Row as PlainRow } from './rows/plain/Row'
import { Row as StyledComponentsRow } from './rows/styled-components/Row'

const names = [
  'Star Hex',
  'The White Cranium',
  'Storm Flame',
  'Captain Dimension',
  'Duke Positron',
  'Doctor Incredible',
  'The Storm Shadow',
  'Web Fly',
  'The Ultra Ninja',
  'Commander Mercury',
]

const generateRows = (type: string): JSX.Element[] => {
  const rows = []
  for (let i = 0; i < 500; i++) {
    switch(type) {  
      case 'PLAIN':
        rows.push(<PlainRow key={i} index={i} name={names[i % names.length]}/>)
        break
      case 'STYLED_COMPONENTS':
        rows.push(<StyledComponentsRow key={i} index={i} name={names[i % names.length]}/>)
        break
    }
  }
  return rows
}

const App: React.FC = () => {
  const [rows, setRows] = useState([<></>])

  return (
    <div className="App">
      <div>
        <button onClick={() => setRows(generateRows('PLAIN'))}>Plain</button>
        <button onClick={() => setRows(generateRows('STYLED_COMPONENTS'))}>Styled Components</button>
      </div>
      {rows}
    </div>
  );
}

export default App;
