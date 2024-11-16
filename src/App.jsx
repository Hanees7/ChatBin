import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewPage from "./components/ViewPage";
import ViewTextPage from "./components/ViewTextPage ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewPage />} />
        <Route path="/view/:id" element={<ViewTextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
