// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";

import React, { useState , createContext, Component } from 'react';
export const CountContext = createContext();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    const message = '66678979879';
    return (
      <div className="App">
        <header className="App-header">
          <CountContext.Provider value={message}>
            <Home />
          </CountContext.Provider>
        </header>
      </div>
    );
  }
}

// function App() {
//   const message = '66678979879';
//   return (
//     <div className="App">
//       <header className="App-header">
//         <CountContext.Provider value={message}>
//           <Home />
//         </CountContext.Provider>
//       </header>
//     </div>
//   );
// }

export default App;
