import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      <Route path="/news/:id" element={<NewsDetails />} />
    </Routes>
  );
};

export default App;