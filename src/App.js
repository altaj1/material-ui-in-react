import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import CheckBox from './components/CheckBox';
import IconesMui from './components/IconesMui';

function App() {
  return (
    <div className="App">
      <ul>
        
      <h1>React MUI</h1>
      <button>Click me</button>
      <h2>Material Button </h2>
      <Button variant=" disabled" >Material</Button>
      <Button variant="contained" disabled>
  Disabled
</Button><Button variant="contained" disabled>
  Disabled
</Button>
       <h3>ButtonGoup</h3>
       <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
       </ul>
       <CheckBox></CheckBox>
       <IconesMui></IconesMui>
    </div>
  );
}

export default App;
