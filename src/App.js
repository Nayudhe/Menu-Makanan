import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    function App() {
      return (
        <Router>
          <Routes>
            <Route exact path="/" component={<Home/>} />
          </Routes>
        </Router>
      );
    }

  );
}

export default App;
