import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homesite from './WebPage/Homesite/homesite';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homesite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
