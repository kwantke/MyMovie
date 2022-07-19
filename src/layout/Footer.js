import {Link,useNavigate} from 'react-router-dom';

export default function Footer(){
    /*const navigate = useNavigate();
    const handleClick = () => {
        console.log("fdfd");
        navigate("/movies");
    }*/
    return (<>
        <div className="footer">
            <div className="inside-footer">
                <div className="footer-container">
                    <div className="logopart">
                        <h1>Karol Bro</h1>
                        <img  src="../images/logo/e.png" alt=""/>
                    </div>
                    <div className="copyright">
                        <p>copyright &copy;<span>Shiva Bro</span>.All Rights Reserved-2022.</p>
                    </div>
                    <div className="socials">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-pinterest"></i>
                    </div>
                    <div className="btn4">
                        <Link to="">Subscribe Now</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* SCROLL BTN*/}
        <div className="scroll">
            <Link to="movies" ><i className="fa-solid fa-arrow-up"></i></Link>
        </div>
        {/***************/}
    </>


    )
}