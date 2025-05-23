import Form from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Welcome from "./Components/Welcome/Welcome";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
