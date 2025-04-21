import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import Books from "./components/Books/Books";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Main />

        <div className="out-puts-content">
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/books" element={<Books />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
