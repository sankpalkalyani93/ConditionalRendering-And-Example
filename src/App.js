import { Component } from 'react';
//import { useState } from 'react';
import './App.css';
import EvenOdd from './EvenOdd';

/*function App() {
  const [num, setNum] = useState(0);

  const handleNumChange = (e) => {
    setNum(Number(e.target.value));
  }

  return (
    <div className="App">
      <p><h2>Even Odd Using Function and Props and && </h2></p>
      <p>
        <input type="text" value={num} onChange={handleNumChange} placeholder="Enter value for num"/>
      </p>
      <p><EvenOdd num={num}/></p>
    </div>
  );
}*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0,
    }
  }

  handleNumChange = (e) => {
    this.setState({ num: Number(e.target.value) });
  }

  render(){
    return(
      <div>
        <p>
          <input type="text" value={this.state.num} onChange={this.handleNumChange} plcaeholder="Enter value for num"/>
        </p>
        <p>
          <EvenOdd num={this.state.num}/>
        </p>
      </div>
    );
  }
}

export default App;
