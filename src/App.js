
// console.log('App.js')
import React, {Component} from 'react';
import Contacts from './components/contacts.js';



class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  
  render () {
    
    return (
      // JSX to render goes here...
      
      // This is test component:
      // <div class="card">
      //   <div class="card-body">
      //     <h5 class="card-title">Jackie Jones</h5>
      //     <h6 class="card-subtitle mb-2 text-muted">jjones@uosussex.com</h6>
      //     <p class="card-text">Biologist</p>
      //   </div>
      // </div>

      // 
      <Contacts contacts={this.state.contacts} />

    );
  }
  
  

  
}


export default App;

//console.log('App.js DONE')



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// 
// export default App;
//
