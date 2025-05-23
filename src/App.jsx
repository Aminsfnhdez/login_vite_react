import Form from "./Components/Form/Form";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
