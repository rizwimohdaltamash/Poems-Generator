import { Routes, Route } from "react-router-dom";

// Component
import MyNavbar from "./components/Navbar";

// Pages
import FirstQ from "./pages/Firstques";
import SecondQ from "./pages/Secondques";
import Poem from "./pages/Poem";

function App() {
  return (
    <div className="App">
      <MyNavbar />

      <Routes>
        <Route path="/" element={<FirstQ />} />
        <Route path="/second" element={<SecondQ />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
    </div>
  );
}

export default App;
