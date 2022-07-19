
import './css/main.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./layout/Header";
import Body from "./layout/Body";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section from "./layout/Section";
import Footer from "./layout/Footer";
import ScrollToTop from "./component/ScrollToTop";
import Home from "./main/Home";
function App() {
console.log("App");

  return (
      <Router>

          <div className="App">
            {/*HEADER PART*/}
            <Header/>

                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="movies" element={<Section/>} />
                  </Routes>

                <Footer/>
          </div>

      </Router>
  );
}

export default App;
