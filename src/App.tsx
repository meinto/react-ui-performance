import React, { useState } from 'react';
import styled from 'styled-components'
import './App.css';
import { Row as PlainRow } from './rows/plain/Row'
import { Row as StyledComponentsRow } from './rows/styled-components/Row'
import { Row as StyledComponentsRow2 } from './rows/styled-components/Row2'
import { Row as StyledComponentsRow3 } from './rows/styled-components/Row3'

const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
`

const ButtonContainer = styled.div`
  background-color: #eee;
`

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
      case 'STYLED_COMPONENTS_2':
        rows.push(<StyledComponentsRow2 key={i} index={i} name={names[i % names.length]}/>)
        break
      case 'STYLED_COMPONENTS_3':
        rows.push(<StyledComponentsRow3 key={i} index={i} name={names[i % names.length]}/>)
        break
    }
  }
  return rows
}

const App: React.FC = () => {
  const [rows, setRows] = useState([<div key={'initital'}></div>])

  return (
    <div className="App">
      <ButtonContainer>
        <Button key={'b1'} onClick={() => setRows(generateRows('PLAIN'))}>Plain</Button>
        <Button key={'b2'} onClick={() => setRows(generateRows('STYLED_COMPONENTS'))}>Styled Components</Button>
        <Button key={'b3'} onClick={() => setRows(generateRows('STYLED_COMPONENTS_2'))}>Styled Components 2</Button>
        <Button key={'b4'} onClick={() => setRows(generateRows('STYLED_COMPONENTS_3'))}>Styled Components 3</Button>
      </ButtonContainer>
      {rows}
    </div>
  );
}

export default App;
