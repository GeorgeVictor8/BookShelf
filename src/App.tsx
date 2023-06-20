import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./UI/Home";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="*" element={<Home errPage={<Error />} />} />
      </Routes>
    </Router>
  );
}

export default App;
