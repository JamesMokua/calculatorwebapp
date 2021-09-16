import React,{useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Keypad from './components/Keypad';
import Display from './components/Display';
import {evaluate } from 'mathjs'


function App() {
  const[inputText,setInputText] = useState([])
  const[output,setOutPut]= useState([])
  const[number,setNumber] = useState(0)
      const calculate = () => {
             const out = evaluate(inputText)  
             setOutPut(out)
             setInputText('')
            }
  return (
  
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="home">My Calc</Navbar.Brand>
    <Nav>
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="home">Standard</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Display 
  number={number} 
  setInputText={setInputText}
   inputText={inputText}
   setNumber={setNumber}
   output={output}
   />
  <Keypad
    inputText={inputText}
  setInputText={setInputText}
   number={number}
   setNumber={setNumber}
   calculate={calculate}
   setOutput={setOutPut}
    />
    </div>
  );
}

export default App;
