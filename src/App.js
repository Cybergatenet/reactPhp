import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Book from "./pages/book/Book";
import LoginSignup from "./pages/loginSignin/LoginSignup";
import './asserts/font-awesome-4.7.0/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<List />} />
        <Route path="/Login" element={<LoginSignup />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
