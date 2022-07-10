import logo from './logo.svg';
//import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

    const [toggleState, setToggleState] = useState(false);
    const menuList = document.getElementsByClassName(styles.navbar_menu);
    const iconsList = document.getElementsByClassName(styles.navbar_icons);
    function toogle(){
        setToggleState(toggleState => !toggleState);
        menuList[0].classList.toggle(styles.active);
        iconsList[0].classList.toggle(styles.active);
    }

    let toggleClassCheck = toggleState ? 'active': '';
  return (
    <div className="App">
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo}>
           <i className="fab fa-accusoft"></i>
            <a href="">DreamCoding</a>
          </div>
            <ul className={styles.navbar_menu}>

              <li><a href="">Home</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Weddings</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Bookings</a></li>
            </ul>
            <ul  className={styles.navbar_icons}>
              <li><i className="fa-brands fa-twitter"></i></li>
              <li><i className="fa-brands fa-facebook-f"></i></li>
            </ul>

            <a href="#none" className={styles.navbar_toogleBtn} onClick={toogle}>
                <i className="fa-solid fa-bars"></i>
            </a>
        </nav>
    </div>
  );
}

export default App;
