import { Route, Routes, Navigate } from "react-router-dom";
import Form from "./components/Form/Form";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Navigate to="/signUp" />} />
        <Route path="/signUp" element={<Form SignUp={true} />} />
        <Route path="/login" element={<Form SignUp={false} />} />
      </Routes>
    </div>
  );
}

export default App;
