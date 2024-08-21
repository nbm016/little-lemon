
import './App.css';
import Nav from './components/Nav'
//import Header from './components/Header'
//import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      {/*<Header/>
      <Nav/>
      <Main/>
      <Footer/> */}
      
      {/*<Nav/>
      <Header/>
      <BookingForm/>*/}
      
      <Nav/>
      <Main/>
      <Menu/>
    </div>
  );
}

export default App;
