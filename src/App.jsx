import { Route, Routes } from "react-router-dom";
import "./App.css";
import HOME from "./pages/HOME";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="*" element={<><img src="https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png" alt="" /></>} />
    </Routes>
  );
}

export default App;
