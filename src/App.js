
import './css/main.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from "./layout/Header";
import Body from "./layout/Body";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section from "./layout/Section";
function App() {
console.log("App");

  return (
      <BrowserRouter>
          <div className="App">
            {/*HEADER PART*/}
            <Header/>
            {/*************/}

            {/*HERO SECTION PART*/}
            <Body/>
            {/*******************/}
             <Section/>

            {/*<Routes>
                <Route path="/" ></Route>
            </Routes>*/}


          </div>
      </BrowserRouter>
  );
}

export default App;
