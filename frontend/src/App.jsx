

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Authentication />} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
