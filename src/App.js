import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AddFeedback from './components/AddFeedback';
import ViewSubmission from './components/ViewSubmission';
import HomeWebsite from './components/website/HomeWebsite';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path='/view-submission' element={<ViewSubmission />} />

        <Route path="/home" element={<HomeWebsite />} />
      </Routes>
    </div>
  );
}

export default App;
