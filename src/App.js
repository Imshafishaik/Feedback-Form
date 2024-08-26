import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AddFeedback from './components/AddFeedback';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-feedback" element={<AddFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
