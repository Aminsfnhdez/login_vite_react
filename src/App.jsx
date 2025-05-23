import Form from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
