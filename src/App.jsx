import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./comp/publicTab/Home";
import Navbar from "./comp/publicTab/NavBar";
import Contentpage from './comp/publicTab/Contentpage';
import Footer from './comp/publicTab/Footer';
import TypesOfNews from './comp/publicTab/TypesOfNews';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-4/5 m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contentPage" element={<Contentpage />} />
          <Route path="/typeOfNews" element={<TypesOfNews />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
