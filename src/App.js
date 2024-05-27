import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/contact" element={<ContactPage />} />
     </Routes>
    </div>
  );
}

export default App;
