import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    count: 0,
    posts: [
      {
        id: 1,
        title: 'Tiburcio',
        body: 'this is Tiburcio'
      },
      {
        id: 2,
        title: 'Confucio',
        body: 'This is Confucio'
      },
      {
        id: 3,
        title: 'Emengarda',
        body: 'This is Emengarda'
      },
    ]
  }

  componentDidMount() {
    const { posts, count } = this.state;
    posts[0].title = 'jafer';

    setTimeout(()=>{
      this.setState(posts)
    }, 5000);
   
  }


  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(p => (
          <div key={p.id}>
            <h1> {p.title}</h1>
            <p>{p.body}</p>
          </div>
        ))
        }
      </div>
    )
  }
}

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

export default App;
