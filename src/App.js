import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Components //
import Header from './components/Header';

// Pages //
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <Router> 
      <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path = "/about" element= {<About/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
// can add back at the top <header className="App-header">
//</header>